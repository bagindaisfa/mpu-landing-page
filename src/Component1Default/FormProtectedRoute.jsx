// components/FormProtectedRoute.jsx
import { useUserForm } from '../UserFormContext';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalAssessment from '../Pages/InnerPage/ModalSchedule/ModalAssessment';
import ModalNotifikasi from '../Shared/ModalNotifikasi/ModalNotifikasi';

const FormProtectedRoute = ({ children }) => {
  const { hasSubmittedForm, markFormSubmitted } = useUserForm();
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!hasSubmittedForm) {
      setModalOpen(true);
    }
  }, [hasSubmittedForm]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSuccess = () => {
    setShowNotification(true);
    markFormSubmitted();
    handleCloseModal();
  };

  return (
    <>
      {!hasSubmittedForm ? (
        <>
          <ModalAssessment
            isOpen={modalOpen}
            onClose={handleCloseModal}
            onSuccess={handleSuccess}
          />
          {/* Optional: Tampilkan loading state atau blank */}
          <div className="h-screen flex items-center justify-center text-gray-600">
            <div className="flex flex-col items-center text-center">
              <p>Please complete the form to access this content.</p>
              <button
                type="submit"
                className="primary-btn2 !py-[15px] mt-4"
                onClick={() => setModalOpen(true)}
              >
                Submit my data
              </button>
            </div>
          </div>
        </>
      ) : (
        children
      )}

      <ModalNotifikasi
        isOpen={showNotification}
        onClose={() => {
          setShowNotification(false);
          handleCloseModal();
        }}
        message={t('popup.success')}
      />
    </>
  );
};

export default FormProtectedRoute;
