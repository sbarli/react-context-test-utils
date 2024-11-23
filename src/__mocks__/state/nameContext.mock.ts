import { DEFAULT_NAME, INameContext } from "@/state/name/NameProvider";

export const nameContextMock: INameContext = {
  name: DEFAULT_NAME,
  updateName: jest.fn(),
}