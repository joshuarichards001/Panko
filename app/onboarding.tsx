import { router } from "expo-router";
import React, { useState } from "react";
import { Animated, StyleSheet, View, type ScrollView } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import OnboardingAccountSlide from "../components/onboarding/onboardingAccountSlide";
import OnboardingCategorySlide from "../components/onboarding/onboardingCategorySlide";
import OnboardingWelcomeSlide from "../components/onboarding/onboardingWelcomeSlide";
import { useThemeColor } from "../components/themed";
import { SCREEN_WIDTH } from "../constants/constants";
import { useAppDispatch } from "../redux/hooks";
import { setAccounts } from "../redux/slices/accountSlice";
import { setBudgets } from "../redux/slices/budgetSlice";
import { setCategories } from "../redux/slices/categorySlice";
import { setUser } from "../redux/slices/userSlice";

export default function Onboarding(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const scrollRef = React.useRef<ScrollView>(null);
  const [categoryGroups, setCategoryGroups] = useState<ICategoryGroup[]>([]);
  const [categories, setCategoriesState] = useState<ICategory[]>([]);
  const [accounts, setAccountsState] = useState<IAccount[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { primary, grey3 } = useThemeColor();
  const budgetId = uuidv4();

  const handlePageTurn = (direction: "backward" | "forward"): void => {
    const increment = direction === "forward" ? 1 : -1;
    const nextPage = currentPage + increment;

    setCurrentPage(nextPage);
    scrollRef.current?.scrollTo({ x: nextPage * SCREEN_WIDTH, animated: true });
  };

  const getDotBackgroundColor = (index: number): string => {
    return index === currentPage ? primary : grey3;
  };

  const renderProgressDots = (): React.JSX.Element[] => {
    const pageCount = 3;
    const dots = [];
    for (let i = 0; i < pageCount; i++) {
      dots.push(
        <View
          key={i}
          style={[styles.dot, { backgroundColor: getDotBackgroundColor(i) }]}
        />,
      );
    }
    return dots;
  };

  const completeOnboarding = (): void => {
    const user: IUser = {
      id: uuidv4(),
      isOnboarded: true,
      isDailyNotificationEnabled: false,
      isProgressBarsHidden: false,
      theme: "system",
    };

    const budget: IBudget = {
      id: budgetId,
      name: "My Budget",
      defaultAccountId: accounts[0]?.id,
    };

    dispatch(setUser(user));
    dispatch(setBudgets([budget]));
    dispatch(setCategories(categories));
    dispatch(setAccounts(accounts));

    router.push("/budget");
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        disableIntervalMomentum
        scrollEnabled={false}
        pagingEnabled
        decelerationRate={0}
        snapToInterval={SCREEN_WIDTH}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
      >
        <OnboardingWelcomeSlide handlePageTurn={handlePageTurn} />
        <OnboardingCategorySlide
          categoryGroups={categoryGroups}
          setCategoryGroups={setCategoryGroups}
          categories={categories}
          setCategories={setCategoriesState}
          handlePageTurn={handlePageTurn}
          budgetId={budgetId}
        />
        <OnboardingAccountSlide
          completeOnboarding={completeOnboarding}
          accounts={accounts}
          setAccounts={setAccountsState}
          handlePageTurn={handlePageTurn}
          budgetId={budgetId}
        />
      </Animated.ScrollView>
      <View style={styles.dotsContainer}>{renderProgressDots()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 30,
    paddingBottom: 60,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
