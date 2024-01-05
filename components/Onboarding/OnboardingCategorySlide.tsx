import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { onboardingStyles } from "../../constants/styles";
import { SettingsButton } from "../settingsComponents";
import { Text, TitleText } from "../themed";

interface Props {
  categoryGroups: ICategoryGroup[];
  setCategoryGroups: React.Dispatch<React.SetStateAction<ICategoryGroup[]>>;
  categories: ICategory[];
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
  budgetId: string;
  handlePageTurn: (direction: "backward" | "forward") => void;
}

export default function OnboardingCategorySlide({
  categories,
  setCategories,
  budgetId,
  handlePageTurn,
}: Props): React.JSX.Element {
  // const [numCategoryInputs, setNumCategoryInputs] = useState(0);
  // const { grey4 } = useThemeColor();

  // const renderCategoryInputs = () => {
  //   const inputs = [];
  //   for (let i = 0; i < numCategoryInputs; i++) {
  //     inputs.push(
  //       <OnboardingCategoryInput
  //         key={i}
  //         categories={categories}
  //         setCategories={setCategories}
  //         budgetId={budgetId}
  //         placeholder="e.g. Category..."
  //       />
  //     );
  //   }
  //   return inputs;
  // };

  return (
    <View style={onboardingStyles.container}>
      <View>
        <TouchableOpacity
          style={onboardingStyles.backButton}
          onPress={() => {
            handlePageTurn("backward");
          }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <View style={onboardingStyles.contentContainer}>
          <TitleText style={onboardingStyles.title}>
            Create Some Categories
          </TitleText>
          <ScrollView style={styles.categoriesContainer}>
            {/* <OnboardingCategoryInput
              categories={categories}
              setCategories={setCategories}
              budgetId={budgetId}
              placeholder="e.g. Groceries..."
            />
            {renderCategoryInputs()} 
            <TouchableOpacity onPress={() => setNumCategoryInputs(numCategoryInputs + 1)}>
              <Text style={{ color: grey4 }}>+ Add Another</Text>
            </TouchableOpacity> */}
          </ScrollView>
        </View>
      </View>
      <SettingsButton
        onPress={() => {
          handlePageTurn("forward");
        }}
      >
        <Text>List My Accounts</Text>
      </SettingsButton>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    maxHeight: 285,
  },
});
