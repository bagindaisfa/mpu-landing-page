// components/FormProtectedRoute.jsx
import { useUserForm } from '../userFormContext';
import { useEffect, useState } from 'react';
import ModalAssessment from '../Pages/InnerPage/ModalSchedule/ModalAssessment';

const FormProtectedRoute = ({ children }) => {
  const { hasSubmittedForm } = useUserForm();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!hasSubmittedForm) {
      setModalOpen(true);
    }
  }, [hasSubmittedForm]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (!hasSubmittedForm) {
    return (
      <>
        <ModalAssessment isOpen={modalOpen} onClose={handleCloseModal} />
        {/* Optional: Tampilkan loading state atau blank */}
        <div className="h-screen flex items-center justify-center text-gray-600">
          Please complete the form to access this content.
        </div>
      </>
    );
  }

  return children;
};

export default FormProtectedRoute;
