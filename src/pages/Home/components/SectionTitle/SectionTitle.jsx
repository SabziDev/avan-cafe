import { Link } from "react-router";

import Icon from "@/components/Icon/Icon";

const SectionTitle = ({ children, isShowLink = false }) => {
  return (
    <div className="flex-items-center justify-between">
      <h3 className="flex-center gap-5 font-bold">
        <div className="flex-center gap-0.5">
          <span className="size-3 rotate-45 bg-primary" />
          <span className="size-4 bg-secondary" />
        </div>
        <span className="text-xl sm:text-2xl md:text-4xl">{children}</span>
      </h3>
      {isShowLink && (
        <Link to="#" className="group flex-center gap-2">
          <span className="text-md transition-all group-hover:underline group-hover:underline-offset-2 sm:text-lg md:text-xl">
            مشاهده همه
          </span>
          <Icon
            src="/images/icons/icons.svg#arrow-long"
            className="size-6 rotate-45"
          />
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
