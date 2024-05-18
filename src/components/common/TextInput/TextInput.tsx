import * as React from "react";
import { textInputTypes } from "./types";
import style from "./style.module.css";
import eyeIcon from "@assets/icons/eye.svg";
import eyeSlashIcon from "@assets/icons/eye-slash.svg";

const TextInput = (props: textInputTypes) => {
  let {
    error,
    errorText,
    id,
    name,
    onChange,
    placeholder,
    value,
    className,
    type,
    limited,
    limitedCount,
    WFull,
    textArea,
    textAreaLine,
    direction = "ltr",
  } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const [hasError, setHasError] = React.useState(error);
  if (limited && limitedCount) {
    if (limitedCount < value?.length) setHasError(true);
  }
  return (
    <div className="w-full flex flex-col items-start space-y-2 ">
      <div
        className={`${style.inputParent} ${hasError && "border-palette-red-500"} rounded-lg border border-palette-gray-300 ${WFull ? "w-full" : "max-w-[350px]"} flex justify-between ${textArea ? "items-start" : "items-center"}  ${className}`}
      >
        {!textArea ? (
          <input
            type={showPassword ? "text" : type}
            className={` ${style.inputText} ${direction == "rtl" ? style.dirRtl : style.dirLtr}  text-palette-gray-900 rounded-lg `}
            onChange={(event) => {
              if (onChange) {
                onChange(event);
              }
            }}
            value={value}
            placeholder={placeholder}
            name={name}
            id={id}
          />
        ) : (
          <textarea
            rows={textAreaLine}
            className={` ${style.inputText} ${direction == "rtl" ? style.dirRtl : style.dirLtr}  text-palette-gray-900 rounded-lg `}
            onChange={(event) => {
              if (onChange) {
                onChange(event);
              }
            }}
            value={value}
            placeholder={placeholder}
            name={name}
            id={id}
          ></textarea>
        )}
        {!textArea && (
          <span className={style.floatingLabel}>
            {placeholder}
            {/* <span className={style.cornerLeftBottom}></span>
            <span className={style.cornerRightBottom}></span> */}
          </span>
        )}
        {type == "password" ? (
          <img
            className="cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
            src={showPassword ? eyeIcon : eyeSlashIcon}
          />
        ) : null}
        {limited && (
          <div className="flex flex-row items-center min-w-16">
            {limitedCount} / {value?.length}
          </div>
        )}
      </div>
      {hasError && (
        <h2 className="px-4 text-10 text-palette-red-500 text-right">
          {errorText}
        </h2>
      )}
    </div>
  );
};
export default TextInput;
