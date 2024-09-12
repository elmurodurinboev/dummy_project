import { getStudents } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export const useGetStudents = (offset: number, pageLimit: number, country: string) => {
  return useQuery({
    queryKey: ['students', offset, pageLimit, country],
    queryFn: async () => getStudents(offset, pageLimit, country)
  });
};
