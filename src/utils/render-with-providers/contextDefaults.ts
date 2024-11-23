import { mock } from "jest-mock-extended";
import { nameContextMock } from "@/__mocks__/state/nameContext.mock";
import { INameContext } from "@/state/name/NameProvider";
import { IContextDefaults } from "@/types/renderWithProviders.types";

export const contextDefaults = (): IContextDefaults => ({
  nameContext: mock<INameContext>(nameContextMock),
});