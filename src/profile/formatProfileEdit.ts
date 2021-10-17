import {User} from 'types/User';

interface EditProfileRequest {
  name: string;
  description: string | null;
  whatsappNumber: number | null;
  instagramUsername: string | null;
}

export function formatProfileEdit(value): EditProfileRequest {
  return {
    name: value.name,
    description: value.description || null,
    whatsappNumber: value.whatsappNumber || null,
    instagramUsername: value.instagramUsername || null,
  };
}
