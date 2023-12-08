import toast from 'react-hot-toast';

export const handleErrorMessage = (msg: string) => toast.error(msg);
export const handleSuccessMessage = (msg: string) => toast.success(msg);
