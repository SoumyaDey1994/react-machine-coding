export const ProductItem = (props) => {
  const { id, title, thumbnail, price } = props.item;
  return (
    <div key={id} className="product-item">
      <img src={thumbnail} alt={title} />
      <p>
        {" "}
        <strong>{title}</strong>
      </p>
      <p>$ {price}</p>
    </div>
  );
};
