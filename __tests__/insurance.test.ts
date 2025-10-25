import { renderHook } from "@testing-library/react-hooks";
import { useTonSiphere } from "../hooks/use-ton-siphere";

describe("Insurance logic", () => {
  it("should allow SIP with insurance", async () => {
    const { result } = renderHook(() => useTonSiphere());
    await result.current.createSIP({
      name: "Insured SIP",
      token: "TON",
      amount: "50",
      frequency: "Monthly",
      strategy: "Staking Only",
      insurance: true,
    });
    expect(result.current.sips[0].insurance).toBe(true);
  });
});
