import { GreenButton } from "../../components/GreenButton/greenButton";
import { Input } from "../../components/Input/input";
import { BasicInfoInput } from "./BasicInfoInput/basicInfoInput";
import { PaymentCard } from "./PaymentCard/paymentCard";
import { SettingsInfoItem } from "./SettingInfoItem/settingsInfoItem";
import { SettingsPhoto } from "./SettingsPhoto/settingsPhoto";
import s from "./settings.module.css";

export const Settings = () => {
  return (
    <div className={s.settingsWrapper}>
    <div className={s.settings}>
      <div className={s.settingsHeader}>Profile</div>
      <div className={s.settingsContent}>
        <SettingsPhoto />
        <div className={s.settingsInfo}>
          <div className={s.settingsBasicInfo}>
            <div className={s.settingsBasicInfoHeader}>Basic information</div>
            <div className={s.settingsBasicInfoItems}>
              <BasicInfoInput
                removeDisablingAbility={true}
                value={"login"}
                icon={"/img/settings/edit-icon.svg"}
              />
              <BasicInfoInput
                removeDisablingAbility={true}
                value={"Email"}
                icon={"/img/settings/edit-icon.svg"}
              />
              <BasicInfoInput
                removeDisablingAbility={false}
                value={"USA"}
                icon={"/img/settings/USA.svg"}
              />
              <BasicInfoInput
                removeDisablingAbility={false}
                value={"125.554.544.55:41554"}
                icon={"/img/settings/IP.svg"}
              />
            </div>
          </div>
          <SettingsInfoItem title={"Change your password"}>
            <div className={s.passwordInputs}>
              <Input
                inputStyle={{ lineHeight: "25px", fontWeight: "700" }}
                placeholder={"Enter the old password"}
                isPassword
                type={"password"}
              />
              <Input
                inputStyle={{ lineHeight: "25px", fontWeight: "700" }}
                placeholder={"Enter a new password"}
                isPassword
                type={"password"}
              />
              <Input
                inputStyle={{ lineHeight: "25px", fontWeight: "700" }}
                placeholder={"Repeat the new password"}
                isPassword
                type={"password"}
              />
              <div className={s.passwordInputsButton}>
                <GreenButton text={"Save"} />
              </div>
            </div>
          </SettingsInfoItem>
          <SettingsInfoItem title={"Payment details"}>
            <div className={s.paymentDetails}>
              {cardInfo.map((card, index) => {
                return (
                  <PaymentCard
                    lastFourDigits={card.lastFourDigits}
                    expirationDate={card.expirationDate}
                  />
                );
              })}
            </div>
            <div className={s.paymentDetailsButton}>
              {" "}
              <GreenButton text={"Add a new deposit method"} />
            </div>
          </SettingsInfoItem>
          <SettingsInfoItem title={"2FA protection"}>
            <p className={s.protectionText}>
              Enable two-factor authentication for the security of your profile
            </p>
          </SettingsInfoItem>
        </div>
      </div>
    </div>
    </div>
  );
};

const cardInfo = [
  {
    lastFourDigits: "8596",
    expirationDate: "12/28",
  },
  {
    lastFourDigits: "8596",
    expirationDate: "12/28",
  },
];
