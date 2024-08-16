import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Herosession() {
  const { t, i18n } = useTranslation(); // Destructure i18n to get current language

  // Check if the current language is Arabic
  const isRTL = i18n.language === 'ar';

  const style = {
    height: "500px",
  };

  return (
    <div className={`Container ${isRTL ? 'rtl' : ''}`}>
      <div className="p-5">
        <hr className="d-flex align-content-center" />
      </div>
      <div className="container">
        <motion.div
          style={style}
          className="row"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className={`col-lg-12 col-12 px-3 ${isRTL ? 'text-right' : 'text-center'}`}>
            <h1 className={`fw-bolder ${isRTL ? 'text-end' : 'text-lg-start'} text-sm-center text-light`}>
              {t('welcome_title')} {/* Translate title */}
              <br />
              <i className={`fw-bolder text-light display-5 ${isRTL ? 'text-end' : ''}`}>
                {t('shopping_destination')} {/* Translate subtitle */}
              </i>
            </h1>
            <p className={`col-6 ${isRTL ? 'text-end' : 'text-start'} text-light mt-5`} style={{ fontSize: '25px' }}>
              {t('shopping_description')} {/* Translate description */}
            </p>
            <motion.div
              className="text-center"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 1, repeat: 2 }}
            >
              <motion.button
                className="btn btn-primary rounded-5 bg-dark text-info px-4 py-3"
                initial={{ scale: 1 }}
                whileTap={{ scale: 0.95, rotate: "-2deg" }}
                style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
              >
                {t('start_shopping')} {/* Translate button text */}
                <motion.i
                  className="fa-solid fa-arrow-right"
                  whileHover={{ rotate: '-20deg' }}
                ></motion.i>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
