# Teira Culinaria Admin

## GitHub-entegre İçerik Yönetim Sistemi

Bu sistem, GitHub reposuna direkt bağlanarak görsel yükleme ve kart yönetimi yapar. Farklı bölümlerde (gallery, services, about) görseller düzenleyebilir, sürükle-bırak ile kart sıralayabilir ve değişiklikleri doğrudan GitHub'a commit edebilirsiniz.

## Nasıl Kullanılır

### 1. Erişim ve Kimlik Doğrulama

- Siteye `/admin-github` adresinden erişin
- GitHub bilgilerinizi girin:
  - Owner: `albertfast`
  - Repo: `teiraculinaria`
  - Branch: `main` (veya çalıştığınız branch)
  - Token: GitHub'dan alacağınız [fine-grained Personal Access Token](https://github.com/settings/tokens?type=beta)
    - Yetkiler: "Contents" için okuma ve yazma izni gerekli

### 2. Bölüm Seçimi ve Görsel Yükleme

- Bölümler arasında geçiş yapabilirsiniz: gallery, services, about
- Her bölüm için ayrı ayrı görsel yükleyebilirsiniz
- Görseller `public/uploads/{section}` klasörüne yüklenir

### 3. Kartları Yönetme

- Bir görsel yüklediğinizde otomatik olarak bir kart oluşturulur
- Bütün görseller için tek tıkla kartlar oluşturabilirsiniz
- Kartları sürükleyerek sıralayabilirsiniz
- Her kartın başlık ve alt başlık bilgilerini düzenleyebilirsiniz

### 4. Değişiklikleri Kaydetme

- "Commit content.json to GitHub" ile değişiklikleri doğrudan GitHub'a gönderebilirsiniz
- Bu işlem otomatik olarak GitHub Actions ile siteyi yeniden derleyecektir

## GitHub Token Alma

1. [GitHub Personal Access Tokens sayfasına](https://github.com/settings/tokens?type=beta) gidin
2. "Generate new token" > "Fine-grained token" seçin
3. Repository access: "Only select repositories" seçip `teiraculinaria` reposunu seçin
4. Contents bölümünden "Read and write" yetkilerini verin
5. Token'ı kopyalayıp Admin panelinde kullanın

**Not:** Token'ınızı güvenli bir yerde saklayın veya Admin panelindeki "Remember in localStorage" seçeneğini kullanın.