import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { useAppSelector } from "../redux/hooks";

export default function EntryPoint(): void {
  const user = useAppSelector((state) => state.user);

  useFocusEffect(
    useCallback(() => {
      if (user?.isOnboarded) {
        router.push("/budget");
      } else {
        router.push("/onboarding");
      }
    }, []),
  );
}
