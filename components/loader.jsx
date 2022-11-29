export default function Loader({ isLoading }) {
  return (
    <div className={isLoading ? "loader active" : "loader"}>Loading...</div>
  );
}
