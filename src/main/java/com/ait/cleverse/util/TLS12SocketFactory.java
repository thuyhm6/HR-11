package com.ait.cleverse.util;

import org.apache.axis.components.net.BooleanHolder;
import org.apache.axis.components.net.JSSESocketFactory;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocket;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.io.IOException;
import java.net.Socket;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.util.Hashtable;

/**
 * Port từ Hanwha_HAE (com.ait.web.util.TLS12SocketFactory): SocketFactory cho Apache Axis 1.4
 * ép dùng TLSv1.2 và bỏ qua kiểm tra chứng chỉ (fix lỗi PKIX khi gọi ep.cleverse.hanwha.com).
 * Chỉ được đăng ký khi cleverse.approval.trust-all=true (xem CleverseApprovalServiceImpl).
 */
public class TLS12SocketFactory extends JSSESocketFactory {

    @SuppressWarnings("rawtypes")
    public TLS12SocketFactory(Hashtable attributes) {
        super(attributes);
    }

    @Override
    protected void initFactory() throws IOException {
        try {
            TrustManager[] trustAllCerts = new TrustManager[] {
                new X509TrustManager() {
                    public X509Certificate[] getAcceptedIssuers() { return new X509Certificate[0]; }
                    public void checkClientTrusted(X509Certificate[] certs, String authType) { }
                    public void checkServerTrusted(X509Certificate[] certs, String authType) { }
                }
            };
            SSLContext context = SSLContext.getInstance("TLSv1.2");
            context.init(null, trustAllCerts, new SecureRandom());
            this.sslFactory = context.getSocketFactory();
        } catch (Exception e) {
            throw new IOException("Failed to init TLS 1.2 with TrustAll: " + e.getMessage(), e);
        }
    }

    @Override
    public Socket create(String host, int port, StringBuffer otherHeaders, BooleanHolder useFullURL) throws Exception {
        Socket s = super.create(host, port, otherHeaders, useFullURL);
        if (s instanceof SSLSocket) {
            ((SSLSocket) s).setEnabledProtocols(new String[] { "TLSv1.2" });
        }
        return s;
    }
}
