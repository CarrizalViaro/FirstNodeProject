const pKey = process.env.FB_PRIVATE_KEY.replace(/\\n/g, '\n');

const fbCredentials = {
  "type": "service_account",
  "project_id": "firstnodeproject-bda72",
  "private_key_id": "ec8b2107891b4099487e1e848db67733526e1fb4",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC3V4Zs2nkWrt68\niwAKxaUIpleWWZhQCg+gUCMtbp4YKimjIBO9j/cZxVmHHd9RCmERTtUKeVtOKBZ7\n9i8uoqrMSNi2nalDj5IHQ/n21MXrXX+M6rRr/cXJ8yeOqOA2JtzymAdv6125Mpn6\nJvIuYdqgCt9dGFhBgHL4zSHD3nDBWx8nUbZALlqcuW3bYEjX91dxnxBoEIoFYtD4\nuv4gjOaRvEl3CaWP4mQl0QTgcgQ3kAVgvOUIQDHWbvObZG3m6IiPdPN7Sg0FsZV4\nU40Id2ygG+uFX134UCIryG7n2/FsNRcb8XE5lr5zC9RviE13S9rV7hC8RXf17vaF\npJVF5dIzAgMBAAECggEABEr12E2jQS82AuckSJxJGXM/oMMXSGR76i6GLFWnOPyf\nvfSN0cXxrLZMutett2mNTUjxvw2JYEKbCCsC/s4LPr5D6L63TGArtKTYUPm5aqHl\nTyjdsZufCnP5jKMSoOH3EW0S24GAz8nKBivsRr6+zjmC8lyUEHCQAJhY/ouSS0yr\nPNHclgRCOc+wQpfhk4IJqvM7EdkTFYV9swVqTFWjBp4zkcPovAPMYM2nQi+C/ypD\nFhSXvkr3qH6st3ihzIx+4soxdDpUnvq6Fyh7vNAFtviLrQDzMGV1x1gZafhSOOzh\ntcacN2JUtFz3W9HbQvg5a24zleJiHwhu6CRdWdrYIQKBgQDkQAZQvda012SWvkO0\nxWT2mMy/7GQM4+Qr2kCYp9JAa1EkL8XXvCSeu1+CSxu5gTKsmcZ/vESqQtGkCTKm\nTJOIW4t3zUeS2nnFYak8NNRu1CJc8UjOaDrpkElK7veHXkmWauJm7Rtbi5NYzp/m\nnVSlSFAwTVCpxmI7Dk9a64PbUwKBgQDNocseyzB8TU/S0ANGg+nZ4kOr+ds2YQtU\nNGWn/rQ/102rP4LIQEIrFNrE7MtK2YXC0txmUR59EpmFmXoOJEA9zHbp954SLqnU\nR0inh1oqbMFPl5IQ4aM/UDGFjlUTWGRZIHKOLbGssaO8+mBBWAH8+N4v1HovS2a0\nh7hox0oxoQKBgCq0p/nXayKu4k0qEDT0ce2JrVWDfzzCLuDdlxR44efXrHjez1+L\n/jYMzNPuBaPxvm943iDsMtTAZ8UPS4C99ySeLDwgFnItmncJzMZNBCowWrWVF5A3\nBD7LFkuE5p9XTuFr4ixr1KCOPuVw044shbffDdHbxWneimaOSN60DhmtAoGAY1Gw\nL9FoO8GDuojp7BcuziQxF1F5BczdkfA04W1uVh+BziLA4kPXMcPC3raYgjCKIM2D\n0o9/sF1ZdWPpxgbQWIj3Lo6A9LtBH9zGRNRlQnSA8hZ9YFX7aUssgBt9D/jzjvDT\nI8UCOi0art4nu6fsXek+N8/irBE5LB0ZftIzDcECgYAp14EOzgUySqm7BqAOTyIF\nsDu/BnF6UQYxpXPH82xzftjGJmWc/tg/RXuQXjJ6mFvUEavrgsxC19e4NrdZqRJS\n+VdpBbnaFuEGHF3D/ggkOPfCw0hCoBtjX/n5ywasSGvmlBgYtytMdqx1OLR9E4NP\nyGPZLGc6YEItNTgGeJRRGw==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-989j9@firstnodeproject-bda72.iam.gserviceaccount.com",
  "client_id": "113522761537919146529",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-989j9%40firstnodeproject-bda72.iam.gserviceaccount.com"
};

module.exports = fbCredentials;
