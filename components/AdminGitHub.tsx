import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminGitHubComponent from '../src/components/AdminGitHub';

// Bu bir wrapper bileşenidir - asıl bileşeni src klasörünün içinden import ediyor
export default function AdminGitHub() {
  const navigate = useNavigate();

  useEffect(() => {
    // Gerekirse, sayfa yükleme mantığı eklenebilir
    // Örneğin: yetkilendirme kontrolü vb.
  }, []);
  
  return <AdminGitHubComponent />;
}