export type VideoProps = {
  src: string;
}

export type IconProps = {
  className?: string
  height?: string | number
  width?: string | number
}

export type MetaProps = {
  title?: string;
  description?: string;
  author?: string;
  keyword?: string;
  image?: string;
}

export type WORKS_ITEMS_TYPE = {
  _id: string;
  name: string;
  mediaType: string;
  workType: string;
  themeColor: {
    hex: string;
  },
  textColor: {
    hex: string;
  },
  coverimage: {
    _type: string;
    attribution: string;
    asset: {
      _ref: string;
      _type: string;
    };
  },
}[];

type Contact = {
  newtab: boolean;
  detail: string;
  href: string;
  _key: string;
  type: string;
  color: {
    hex: string;
  },
  icon: {
    _type: string;
    attribution: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

type Education = {
  school: string;
  fieldofStudy: string;
  startYear: string;
  endMonth: string;
  _key: string;
  endYear: string;
  startMonth: string;
};

export type PROFILE_TYPE = {
  contact: Contact[];
  _rev: string;
  _type: string;
  _id: string;
  _updatedAt: string;
  tools: string[];
  skills: string[];
  code: string[];
  status: string;
  fullname:string;
  position:string;
  location:string;
  profileImg: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  _createdAt: string;
  educations: Education[];
}[];

export type EXPERIENCE_TYPE = {
}[];