const CustomButton = ({ children, ...otherProps }:{children:any}) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
