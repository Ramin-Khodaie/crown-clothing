const CustomButton = ({
  children,
  handleClick,
  ...otherProps
}: {
  children: any;
  handleClick: () => void;
  otherProps?: any;
}) => {
  return (
    <button className="custom-button" {...otherProps} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
