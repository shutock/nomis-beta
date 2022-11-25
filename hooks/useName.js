import { useEnsName } from "wagmi";

export default function useName(address) {
  const { data, isLoading } = useEnsName({
    address: address,
  });

  if (isLoading) return "loading";
  if (data === null) return "";
  return data;
}
