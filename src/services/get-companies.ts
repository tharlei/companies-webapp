import { api } from '../infra/api';

interface ApiCompany {
  items: Company[];
  meta: {
    current_page: number;
    exists_next_page: boolean;
    exists_prev_page: boolean;
    from: number | null;
    last_page: number;
    per_page: number;
    to: number | null;
    total: number;
  };
}

interface Input {
  page: number | null;
  limit: number | null;
  federal_unit: string | null;
  city: string | null;
  name: string | null;
}

interface Response {
  collection: Company[];
  existsNextPage: boolean;
}

export interface Company {
  id: string;
  email: string;
  phone: string;
  description: string;
  name: string;
}

export async function getCompanies(params: Input): Promise<Response> {
  try {
    const { data } = await api.get<ApiCompany>(`/companies`, {
      params,
    });

    return {
      collection: data.items,
      existsNextPage: data.meta.exists_next_page,
    };
  } catch {
    return {
      collection: [],
      existsNextPage: true,
    };
  }
}
