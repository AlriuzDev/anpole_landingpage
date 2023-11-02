export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "constactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
