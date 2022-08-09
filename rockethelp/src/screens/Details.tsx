import { VStack } from "native-base";
import React from "react";
import { Header } from "../components/Header";

export function Details() {
  return (
    <VStack flex={1} bg="gray.700">
      <Header title="Solicitação" />
    </VStack>
  );
}
