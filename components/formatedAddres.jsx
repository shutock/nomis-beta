export default function FormatedAddress({ address = "0xNomis.eth" }) {
  if (
    address[address.length - 4] === "." &&
    address[address.length - 3] === "e" &&
    address[address.length - 2] === "t" &&
    address[address.length - 1] === "h"
  ) {
    const ensAddress = [];
    for (let i = 0; i < address.length - 4; i++) {
      ensAddress[i] = address[i];
    }
    return (
      <div className="row formatedAddress">
        <div className="symbols">{ensAddress}</div>
        <div className="eth">eth</div>
      </div>
    );
  }

  if (address[0] === "0" && address[1] === "x")
    return (
      <div className="row formatedAddress">
        <div className="type">0x</div>
        <div className="symbols">
          {address[2] +
            address[3] +
            address[4] +
            address[5] +
            " · · · " +
            address[address.length - 4] +
            address[address.length - 3] +
            address[address.length - 2] +
            address[address.length - 1]}
        </div>
      </div>
    );

  return (
    <div className="row formatedAddress">
      <div className="symbols">
        {address[0] +
          address[1] +
          address[2] +
          address[3] +
          " · · · " +
          address[address.length - 4] +
          address[address.length - 3] +
          address[address.length - 2] +
          address[address.length - 1]}
      </div>
    </div>
  );
}
