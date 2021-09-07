import React from 'react';

const TrashbinIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.33333 5H2.22222V18C2.22222 18.5304 2.45635 19.0391 2.8731 19.4142C3.28984 19.7893 3.85507 20 4.44444 20H15.5556C16.1449 20 16.7102 19.7893 17.1269 19.4142C17.5437 19.0391 17.7778 18.5304 17.7778 18V5H3.33333ZM15.1311 2L13.3333 0H6.66667L4.86889 2H0V4H20V2H15.1311Z"
        fill=""
      />
    </svg>
  );
};
export default TrashbinIcon;
