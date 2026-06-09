import clsx from "clsx";
import { useState } from "react";

import Icon from "@/components/Icon/Icon";

import SelectItem from "./SelectItem";

const Selectbox = ({ inputField }) => {
  const [isOpenSelectbox, setIsOpenSelectbox] = useState(false);
  const [selectboxValue, setSelectboxValue] = useState(4);

  return (
    <div>
      {isOpenSelectbox && (
        <div
          onClick={() => setIsOpenSelectbox(false)}
          className="fixed inset-0 z-10"
        />
      )}
      <div
        onClick={() => setIsOpenSelectbox(true)}
        className="relative flex-items-center h-10 cursor-pointer justify-between rounded-xl bg-cream py-1 pr-4 pl-2 text-primary/40 placeholder:text-sm"
      >
        <span>{selectboxValue}</span>
        <Icon
          src="/images/icons/icons.svg#arrow-short"
          className={clsx([
            "size-6 transition-all",
            isOpenSelectbox ? "rotate-90" : "rotate-180",
          ])}
        />

        {isOpenSelectbox && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 -bottom-48 flex-center w-70 flex-col divide-y divide-primary/20 rounded-2xl border border-primary/20 bg-white px-4 py-2 *:py-1"
          >
            {inputField.options.map((inputOption) => (
              <SelectItem
                key={inputOption.id}
                value={inputOption.value}
                setIsOpenSelectbox={setIsOpenSelectbox}
                selectboxValue={selectboxValue}
                onClickSelectboxItem={setSelectboxValue}
              />
            ))}
            {/* <div
              onClick={() => {
                setSelectboxValue(4);
                setIsOpenSelectbox(false);
              }}
              className="z-20 flex-items-center w-full justify-between px-2 hover:bg-cream/50"
            >
              <span>4</span>
              {selectboxValue === 4 ? (
                <span className="relative size-5 rounded-full border border-caramel before:absolute before:inset-0.5 before:rounded-full before:bg-caramel" />
              ) : (
                <span className="size-5 rounded-full bg-cream" />
              )}
            </div>
            <div
              onClick={() => {
                setSelectboxValue(5);
                setIsOpenSelectbox(false);
              }}
              className="z-20 flex-items-center w-full justify-between px-2 hover:bg-cream/50"
            >
              <span>5</span>
              {selectboxValue === 5 ? (
                <span className="relative size-5 rounded-full border border-caramel before:absolute before:inset-0.5 before:rounded-full before:bg-caramel" />
              ) : (
                <span className="size-5 rounded-full bg-cream" />
              )}
            </div>
            <div
              onClick={() => {
                setSelectboxValue(6);
                setIsOpenSelectbox(false);
              }}
              className="z-20 flex-items-center w-full justify-between px-2 hover:bg-cream/50"
            >
              <span>6</span>
              {selectboxValue === 6 ? (
                <span className="relative size-5 rounded-full border border-caramel before:absolute before:inset-0.5 before:rounded-full before:bg-caramel" />
              ) : (
                <span className="size-5 rounded-full bg-cream" />
              )}
            </div>
            <div
              onClick={() => {
                setSelectboxValue(7);
                setIsOpenSelectbox(false);
              }}
              className="z-20 flex-items-center w-full justify-between px-2 hover:bg-cream/50"
            >
              <span>7</span>
              {selectboxValue === 7 ? (
                <span className="relative size-5 rounded-full border border-caramel before:absolute before:inset-0.5 before:rounded-full before:bg-caramel" />
              ) : (
                <span className="size-5 rounded-full bg-cream" />
              )}
            </div>
            <div
              onClick={() => {
                setSelectboxValue(8);
                setIsOpenSelectbox(false);
              }}
              className="z-20 flex-items-center w-full justify-between px-2 hover:bg-cream/50"
            >
              <span>8</span>
              {selectboxValue === 8 ? (
                <span className="relative size-5 rounded-full border border-caramel before:absolute before:inset-0.5 before:rounded-full before:bg-caramel" />
              ) : (
                <span className="size-5 rounded-full bg-cream" />
              )}
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selectbox;
