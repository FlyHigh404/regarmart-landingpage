import { transporter } from "../config/newsletter.js";

const sendSubscriptionConfirmation = (email) => {
  const mailOptions = {
    from: `"Panganku Fresh" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "🌿 Terima Kasih Telah Bergabung dengan Panganku Fresh!",
    html: `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f9fdf9; padding: 0; margin: 0;">
    <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      
      <!-- HEADER -->
      <div style="background-color: #4CAF50; color: #ffffff; padding: 24px 16px;">
        <h1 style="margin: 0; font-size: 24px;">Panganku Fresh</h1>
        <p style="margin: 6px 0 0; font-size: 15px;">Segar. Sehat. Terpercaya.</p>
      </div>

      <!-- BODY -->
      <div style="padding: 28px 24px; color: #333;">
        <h2 style="color: #2e7d32;">Selamat Datang di Keluarga Panganku Fresh! 🥦</h2>
        <p style="font-size: 16px; line-height: 1.6;">
          Terima kasih telah berlangganan bersama kami! 🎉<br>
          Kini Anda akan menjadi yang <strong>pertama tahu</strong> tentang <strong>promo eksklusif</strong>,
          <strong>produk segar</strong> langsung dari petani, dan <strong>tips dapur sehat</strong> setiap minggunya.
        </p>

        <div style="margin: 24px 0;">
          <a href="https://pangankufresh.com" 
             style="background-color: #43a047; color: #fff; text-decoration: none; 
                    padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 15px; 
                    display: inline-block;">
            Kunjungi Website Kami
          </a>
        </div>

        <p style="font-size: 14px; color: #555;">
          Terima kasih telah mempercayakan kebutuhan segar Anda kepada kami.<br>
          Salam hangat dari tim <strong>Panganku Fresh</strong> 🍅
        </p>
      </div>

      <!-- FOOTER -->
      <div style="background-color: #f1f8e9; padding: 16px; text-align: center; font-size: 13px; color: #666;">
        <p style="margin: 0;">Hubungi kami di <a href="mailto:regarm4rt@gmail.com" style="color: #43a047; text-decoration: none;">regarm4rt@gmail.com</a></p>
        <p style="margin: 4px 0 0;">Ikuti kami di 
          <a href="https://facebook.com/RegarMart" style="color: #43a047; text-decoration: none;">Facebook</a>
        </p>
        <p style="margin: 8px 0 0;">© 2025 Panganku Fresh. Semua hak dilindungi.</p>
      </div>
    </div>
  </div>
  `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Gagal mengirim email konfirmasi:", error);
    } else {
      console.log("Email konfirmasi terkirim:", info.response);
    }
  });
};

export { sendSubscriptionConfirmation };
