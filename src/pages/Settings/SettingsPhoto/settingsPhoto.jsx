import { useState } from "react";
import s from "./settingsPhoto.module.css";

export const SettingsPhoto = () => {
  const [fileName, setFileName] = useState(null);

  return (<div>
    <div className={s.settingsPhoto}>
      <div className={s.settingsPhotoImg}>
        <img src="" alt="" />
      </div>
      <div className={s.settingsPhotoFile}>
        <p className={s.settingsPhotoText}>
          <span>Edit photos</span>
          <div className={s.editIcon}>
            <img src="/img/settings/edit-icon.svg" alt="" />
          </div>
        </p>

        <input
          onChange={(e) => {
            const file = e.target.files[0];
            setFileName(file.name);
          }}
          className={s.fileInput}
          type="file"
        />
      </div>
    </div>
    </div>
  );
};
