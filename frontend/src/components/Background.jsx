import { useCallback } from "react";
import PropTypes from "prop-types";

const Background = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://home.accredian.com/whyaccredian");
  }, []);

  const onLinkContainerClick1 = useCallback(() => {
    window.open("https://www.facebook.com/insaidlearn");
  }, []);

  const onLinkContainerClick2 = useCallback(() => {
    window.open("https://www.linkedin.com/school/insaid/");
  }, []);

  const onLinkContainerClick3 = useCallback(() => {
    window.open("https://twitter.com/insaidlearn");
  }, []);

  const onLinkContainerClick4 = useCallback(() => {
    window.open("https://www.instagram.com/insaid.learn/");
  }, []);

  const onLinkContainerClick5 = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA");
  }, []);

  const onLinkContainerClick6 = useCallback(() => {
    window.open("https://home.accredian.com/About");
  }, []);

  const onLinkContainerClick7 = useCallback(() => {
    window.open("https://home.accredian.com/Career");
  }, []);

  const onLinkContainerClick8 = useCallback(() => {
    window.open("https://blog.accredian.com/");
  }, []);

  const onLinkContainerClick9 = useCallback(() => {
    window.open("https://home.accredian.com/policies/accredian-policy");
  }, []);

  const onLinkContainerClick10 = useCallback(() => {
    window.open("https://home.accredian.com/terms/referral");
  }, []);

  const onLinkContainerClick11 = useCallback(() => {
    window.open("https://home.accredian.com/terms/privacy");
  }, []);

  const onLinkContainerClick12 = useCallback(() => {
    window.open("https://home.accredian.com/terms");
  }, []);

  const onLinkContainerClick13 = useCallback(() => {
    window.open("https://home.accredian.com/Faq");
  }, []);

  return (
    <div
      className={`self-stretch bg-homeaccrediancom-mine-shaft flex flex-row items-end justify-between py-8 pl-[360px] box-border gap-[20px] text-center text-sm text-homeaccrediancom-nero font-homeaccrediancom-roboto-bold-17 mq900:pl-[90px] mq900:pt-[21px] mq900:pb-[21px] mq900:box-border mq450:pt-5 mq450:pb-5 mq450:box-border mq1300:pl-[180px] mq1300:box-border mq1650:flex-wrap mq1650:justify-center ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[32.5px] mq900:gap-[16px] mq1300:max-w-full">
        <div className="w-full flex flex-row flex-wrap items-start justify-center max-w-[1200px] mq1300:max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[20.7px] box-border min-w-[335px] max-w-[768px] mq900:max-w-full">
            <img
              className="w-36 h-[38.3px] relative overflow-hidden shrink-0 object-contain max-w-[768px] mq900:max-w-full"
              alt=""
              src="/accredainnewwebp@2x.png"
            />
          </div>
          <div className="flex flex-col items-center justify-start py-0 px-[67px] box-border max-w-[384px] ml-[-2px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:max-w-full">
            <div className="rounded-lg bg-homeaccrediancom-japanese-laurel box-border flex flex-row items-center justify-center py-[5px] px-[38px] min-w-[64px] whitespace-nowrap border-[1px] border-solid border-homeaccrediancom-nero">
              <div className="relative tracking-[0.4px] leading-[25px] font-medium">
                Schedule 1-on-1 Call Now
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 px-6 text-left">
              <div className="relative leading-[20px]">
                Speak with our Learning Advisor
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-xl mq900:gap-[20px]">
          <div className="w-full h-[539.4px] flex flex-row flex-wrap items-start justify-center relative max-w-[1200px] mq450:h-auto mq450:min-h-[539.4000000000001] mq1300:max-w-full">
            <div className="h-px w-[1152px] absolute !m-[0] top-[-1px] left-[0px] box-border border-t-[1px] border-solid border-homeaccrediancom-mystic" />
            <div className="w-[432px] !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-8 px-0 pb-0 box-border max-w-[432px] mq450:max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.3px] box-border gap-[3.2px] max-w-[432px] mq450:max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-4">
                  <div className="relative tracking-[0.19px] leading-[30px] inline-block min-w-[89px] mq450:text-base mq450:leading-[24px]">
                    Programs
                  </div>
                </div>
                <div className="w-[380px] flex flex-col items-start justify-start gap-[0.3px] max-w-full text-mid">
                  <div className="self-stretch rounded-t rounded-b-none flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px] max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[11.2px] px-0 pb-3 box-border min-w-[211px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[0.16px] leading-[26px]">{`Data Science & AI`}</b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px] max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[11.2px] px-0 pb-3 box-border min-w-[211px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[0.16px] leading-[26px]">
                              Product Management
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px] max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[11.2px] px-0 pb-3 box-border min-w-[211px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[0.16px] leading-[26px]">
                              Business Analytics
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px] max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[11.2px] px-0 pb-3 box-border min-w-[211px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[0.16px] leading-[26px]">
                              Digital Transformation
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px] max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-[11.9px] box-border min-w-[211px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[0.16px] leading-[26px]">
                              Business Management
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px] max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-[11.9px] box-border min-w-[211px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[0.16px] leading-[26px]">
                              Project Management
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px] max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-[11.9px] box-border min-w-[211px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[0.16px] leading-[26px]">{`Strategy & Leadership`}</b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px] max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-[11.9px] box-border min-w-[211px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[0.16px] leading-[25.5px]">
                              Senior Management
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg8.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-t-none rounded-b flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 box-border min-h-[48px] max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[11.2px] px-0 pb-3 box-border min-w-[211px] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3.2px]">
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative tracking-[0.16px] leading-[26px] inline-block min-w-[58px]">
                              Fintech
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative"
                          alt=""
                          src="/svg8.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[528px] !m-[0] absolute top-[0px] left-[432px] flex flex-row items-start justify-start pt-8 px-0 pb-0 box-border max-w-[528px] mq900:max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-[201.3px] box-border gap-[4.2px] max-w-[528px] mq900:max-w-full">
                <div className="relative tracking-[0.19px] leading-[30px] inline-block min-w-[101px] mq450:text-base mq450:leading-[24px]">
                  Contact Us
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <a
                        className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                        href="mailto:admissions@accredian.com"
                        target="_blank"
                      >
                        Email us (For Data Science Queries):
                        admissions@accredian.com
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <a
                        className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                        href="mailto:pm@accredian.com"
                        target="_blank"
                      >
                        Email us (For Product Management
                        Queries):pm@accredian.com
                      </a>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative tracking-[0.13px] leading-[21px]">
                        Data Science Admission Helpline:+91 9079653292 (9 AM - 7
                        PM)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative tracking-[0.13px] leading-[21px]">
                        Product Management Admission Helpline:+91 9625811095
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative tracking-[0.13px] leading-[21px]">
                        Enrolled Student Helpline: +91 7969322507
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative tracking-[0.13px] leading-[21px]">
                        <p className="m-0">
                          Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                          Sector 18, Gurugram,
                        </p>
                        <p className="m-0">Haryana 122015</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-start justify-start max-w-full cursor-pointer text-lg"
                  onClick={onLinkContainerClick}
                >
                  <a
                    className="flex-1 relative tracking-[0.17px] leading-[27px] text-[inherit] inline-block [text-decoration:none] max-w-full"
                    href="https://home.accredian.com/whyaccredian"
                    target="_blank"
                  >
                    Why Accredian
                  </a>
                </div>
                <div className="relative tracking-[0.19px] leading-[30px] font-light inline-block min-w-[88px] mq450:text-base mq450:leading-[24px]">
                  Follow Us
                </div>
                <div className="w-[205.5px] flex flex-row items-start justify-start">
                  <div
                    className="flex flex-row items-center justify-start cursor-pointer"
                    onClick={onLinkContainerClick1}
                  >
                    <img
                      className="h-[27.2px] w-[27.2px] relative"
                      alt=""
                      src="/svg9.svg"
                    />
                  </div>
                  <div
                    className="flex flex-row items-center justify-start py-0 pr-0 pl-4 cursor-pointer"
                    onClick={onLinkContainerClick2}
                  >
                    <img
                      className="h-[27.2px] w-[27.2px] relative"
                      alt=""
                      src="/svg10.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div
                      className="h-[27.2px] flex-1 relative shrink-0 cursor-pointer"
                      onClick={onLinkContainerClick3}
                    >
                      <img
                        className="absolute top-[0px] left-[21.5px] w-[27.2px] h-[27.2px]"
                        alt=""
                        src="/more-social-link-content.svg"
                      />
                    </div>
                    <div
                      className="flex flex-row items-center justify-start py-0 pr-0 pl-4 shrink-0 cursor-pointer z-[1] ml-[-0.1px]"
                      onClick={onLinkContainerClick4}
                    >
                      <img
                        className="h-[27.2px] w-[27.2px] relative"
                        alt=""
                        src="/svg11.svg"
                      />
                    </div>
                    <div
                      className="flex flex-row items-center justify-start py-0 pr-0 pl-4 shrink-0 cursor-pointer z-[2] ml-[-0.1px]"
                      onClick={onLinkContainerClick5}
                    >
                      <img
                        className="h-[27.2px] w-[27.2px] relative"
                        alt=""
                        src="/svg12.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[539.4px] w-48 !m-[0] absolute top-[0px] left-[960px] flex flex-col items-start justify-center pt-8 px-0 pb-0 box-border max-w-[192px]">
              <div className="w-full flex-1 flex flex-col items-start justify-start max-w-[192px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0 gap-[4px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[0.19px] leading-[30px] mq450:text-base mq450:leading-[24px]">
                      Accredian
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick6}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/About"
                          target="_blank"
                        >
                          About
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick7}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/Career"
                          target="_blank"
                        >
                          Career
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick8}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://blog.accredian.com/"
                          target="_blank"
                        >
                          Blog
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick9}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/policies/accredian-policy"
                          target="_blank"
                        >
                          Admission Policy
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick10}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/terms/referral"
                          target="_blank"
                        >
                          Referral Policy
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick11}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/terms/privacy"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick12}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/terms"
                          target="_blank"
                        >
                          Terms Of Service
                        </a>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div
                        className="self-stretch flex flex-col items-start justify-start cursor-pointer"
                        onClick={onLinkContainerClick13}
                      >
                        <a
                          className="self-stretch relative tracking-[0.13px] leading-[21px] text-[inherit] [text-decoration:none]"
                          href="https://home.accredian.com/Faq"
                          target="_blank"
                        >
                          Master FAQs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center text-sm">
            <div className="w-[492px] relative tracking-[0.13px] leading-[21px] flex items-center justify-center">
              © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
              Rights Reserved
            </div>
          </div>
        </div>
      </div>
      <div className="h-[122px] flex flex-col items-start justify-start">
        <img
          className="w-[60px] h-[60px] relative z-[1]"
          alt=""
          src="/svg13.svg"
        />
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
