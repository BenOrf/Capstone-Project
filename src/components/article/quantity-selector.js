function QuantitySelector(props) {
  return (
    <div>
      <p>Set the quantity</p>
      <div className="quantity-input">
        <button
          className="quantity-input__modifier quantity-input__modifier--left"
          onClick={this.decrement}
        >
          &mdash;
        </button>
        <input
          className="quantity-input__screen"
          type="text"
          value={this.state.value}
          readonly
        />
        <button
          className="quantity-input__modifier quantity-input__modifier--right"
          onClick={this.increment}
        >
          &#xff0b;
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;
