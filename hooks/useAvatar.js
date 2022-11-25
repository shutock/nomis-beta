import { useEnsAvatar } from "wagmi";

export default function useAvatar(address) {
  const { data, isLoading } = useEnsAvatar({
    address: address,
  });
  const random = Math.random();
  const defaultUserpick =
    random < 1 / 3
      ? "/userpicks/userpick1.svg"
      : random < 2 / 3
      ? "/userpicks/userpick2.svg"
      : "/userpicks/userpick3.svg";

  if (isLoading) return "loading";
  if (!data) return defaultUserpick;
  return data;
}
