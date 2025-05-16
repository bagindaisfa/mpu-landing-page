import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import dayjs from 'dayjs';

const ModalSchedule = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formDataSchedule, setFormDataSchedule] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });
  if (!isOpen) return null;

  const handleSubmitSchedule = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { name, email, date, time } = formDataSchedule;
      const [hours, minutes] = time.split(':');
      const datetime = dayjs(date)
        .set('hour', parseInt(hours))
        .set('minute', parseInt(minutes))
        .toISOString();

      const response = await fetch(`${import.meta.env.VITE_API_URL}/schedule`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, datetime }),
      });
      if (!response.ok) {
        throw new Error('Failed to schedule consultation');
      }
      alert('Consultation successfully scheduled!');
    } catch (error) {
      alert('Failed to schedule consultation.');
      console.error('Failed to schedule consultation', error);
    } finally {
      setLoading(false);
      setFormDataSchedule({ name: '', email: '', date: '', time: '' });
      onClose();
    }
  };

  const handleChangeShecdule = (e) => {
    setFormDataSchedule({
      ...formDataSchedule,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          className="ml-auto block text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mt-2">
          <h3 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
            Schedule a Consultation
          </h3>
          <form className="space-y-4" onSubmit={handleSubmitSchedule}>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formDataSchedule.name}
                onChange={handleChangeShecdule}
                placeholder="Enter Name"
                required
                className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
              />
              <FaUser
                size={'14'}
                className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formDataSchedule.email}
                onChange={handleChangeShecdule}
                placeholder="Enter email"
                required
                className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
              />
              <HiOutlineMailOpen
                size={'16'}
                className="absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5"
              />
            </div>
            <div>
              <input
                type="date"
                name="date"
                value={formDataSchedule.date}
                onChange={handleChangeShecdule}
                required
                className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
              />
            </div>
            <div>
              <input
                type="time"
                name="time"
                value={formDataSchedule.time}
                onChange={handleChangeShecdule}
                required
                className="font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0"
              />
            </div>
            <div>
              <label className="font-FiraSans text-TextColor-0 text-sm flex items-center gap-2">
                Your data will be kept confidential and used solely for the
                related project purposes.
              </label>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="primary-btn2 !py-[15px]"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalSchedule;
