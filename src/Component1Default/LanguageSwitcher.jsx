import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');
  const [isChecked, setIsChecked] = useState(lang === 'id');

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    const newLang = checked ? 'id' : 'en';

    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  useEffect(() => {
    setLang(i18n.language);
    setIsChecked(i18n.language === 'id');
  }, [i18n.language]);

  return (
    <label htmlFor="customSwitch" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id="customSwitch"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        {/* Background */}
        <div
          className={`block w-14 h-8 rounded-full transition-colors duration-300 ${
            isChecked ? 'bg-green-500' : 'bg-gray-300'
          }`}
        ></div>

        {/* Circle + Flag Image */}
        <div
          className={`dot absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
            isChecked ? 'translate-x-6' : ''
          }`}
        >
          <img
            src={
              isChecked
                ? 'https://flagcdn.com/id.svg'
                : 'https://flagcdn.com/gb.svg'
            }
            alt={isChecked ? 'Bahasa Indonesia' : 'English'}
            className="w-4 h-4 object-contain"
          />
        </div>
      </div>
    </label>
  );
}
