import { renderHook, act } from "@testing-library/react-hooks";
import { useTonSiphere } from "../hooks/use-ton-siphere";

describe("useTonSiphere", () => {
  it("should initialize with no SIPs", () => {
    const { result } = renderHook(() => useTonSiphere());
    expect(result.current.sips).toEqual([]);
  });

  it("should handle SIP creation", async () => {
    const { result } = renderHook(() => useTonSiphere());
    await act(async () => {
      await result.current.createSIP({
        name: "Test SIP",
        token: "TON",
        amount: "100",
        frequency: "Weekly",
        strategy: "Staking Only",
        insurance: true,
      });
    });
    expect(result.current.sips.length).toBe(1);
    expect(result.current.sips[0].name).toBe("Test SIP");
  });
});
