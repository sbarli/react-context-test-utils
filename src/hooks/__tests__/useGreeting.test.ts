import { renderHookWithProviders } from '@/utils/render-with-providers/renderWithProviders';
import { useGreeting } from '../useGreeting';

describe('useGreeting', () => {
  it('has expected context', () => {
    const MOCK_NAME = 'MockFirstName MockLastName';
    const { result } = renderHookWithProviders(useGreeting, {
      context: {
        nameContext: {
          name: MOCK_NAME,
        },
      },
    });

    expect(result.current.greeting).toBe(`Hello, ${MOCK_NAME}!`);
  });
});
