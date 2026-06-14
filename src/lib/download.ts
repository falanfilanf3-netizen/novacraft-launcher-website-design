/**
 * NovaCraft için merkezi indirme ayarları.
 *
 * 👉 İndirme dosyanız hazır olduğunda `url` alanına
 *    bağlantıyı (örneğin "/NovaCraft-Kurulum-2.4.0.exe")
 *    yazmanız yeterli. Sitedeki tüm butonlar otomatik olarak
 *    "geçici olarak kapalı" modundan çıkıp gerçek indirme
 *    bağlantısına dönüşecek.
 */
export const DOWNLOAD = {
  url: "/novacraft-setup-v1.4.exe", // <-- kurulum dosyasının bağlantısını buraya ekleyin
  version: "1.4",
  releaseName: "Süpernova",
  size: "86 MB",
  platforms: "Windows · macOS · Linux",
};

/** Kurulum dosyası bağlantısı girildi mi? */
export const HAS_FILE = DOWNLOAD.url.trim().length > 0;
