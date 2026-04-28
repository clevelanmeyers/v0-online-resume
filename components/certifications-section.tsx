"use client";

import { Award, GraduationCap, BookOpen, X, ExternalLink } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const certifications = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    verificationUrl: "https://www.certmetrics.com/comptia/public/verification.aspx",
    credentialId: "ecf60859-17f0-472b-8c3d-1d11c7957342",
  },
  {
    name: "CompTIA Network+ (N+)",
    issuer: "CompTIA",
    verificationUrl: "https://www.certmetrics.com/comptia/public/verification.aspx",
    credentialId: "9ab4d93c-2add-4248-904d-b038d5088955",
  },
  {
    name: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services Training and Certification",
    verificationUrl: "https://www.credly.com/badges/verify",
    credentialId: "a5b9c9a6-7e88-45da-80f7-9fb6b0ae7e00",
  },
  {
    name: "ISC2 Candidate",
    issuer: "ISC2",
    verificationUrl: "https://www.credly.com/badges/5ebf1eff-e29d-4bb6-9c21-320b5332b9a7/public_url",
    credentialId: "5ebf1eff-e29d-4bb6-9c21-320b5332b9a7",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    verificationUrl: "https://www.credly.com/badges/verify",
    credentialId: "d06a39d5-77e3-41ea-b41f-3c7767bfbe81",
  },
  {
    name: "Introduction to Modern AI",
    issuer: "Cisco",
    verificationUrl: "https://www.credly.com/badges/verify",
    credentialId: "d8109cfd-55f8-4d2f-991e-9a7ae0a3952a",
  },
  {
    name: "Junior Cybersecurity Analyst",
    issuer: "Cisco",
    verificationUrl: "https://www.credly.com/badges/1e840a19-45cc-469c-b0ad-d4a80087f8db/public_url",
    credentialId: "1e840a19-45cc-469c-b0ad-d4a80087f8db",
  },
  {
    name: "Introduction to the Threat Landscape 2.0",
    issuer: "Fortinet",
    verificationUrl: "https://www.credly.com/badges/69dc13d4-bc0a-4464-9fda-05fc6de272f2/public_url",
    credentialId: "69dc13d4-bc0a-4464-9fda-05fc6de272f2",
  },

];

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  certification: (typeof certifications)[0] | null;
}

function QRModal({ isOpen, onClose, certification }: QRModalProps) {
  if (!isOpen || !certification) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-xl p-6 max-w-sm w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Verify Certification</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-xl mb-4">
            <QRCodeSVG
              value={certification.verificationUrl}
              size={200}
              level="H"
              includeMargin={false}
            />
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-foreground">{certification.name}</h4>
            <p className="text-sm text-muted-foreground mb-2">{certification.issuer}</p>
            <p className="text-xs text-muted-foreground mb-4">
              Credential ID: {certification.credentialId}
            </p>

            <a
              href={certification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Verify Online
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);

  return (
    <section id="certifications" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h3>

            <div className="p-6 border border-border rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    National IT Diploma
                  </h4>
                  <p className="text-primary font-medium">Currently Studying</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Focus: Information Technology, Systems Administration,
                    Network Infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Certifications
              <span className="text-xs font-normal ml-2 text-primary">(Click to verify)</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <button
                  key={cert.name}
                  onClick={() => setSelectedCert(cert)}
                  className="w-full p-4 border border-border rounded-lg flex items-center justify-between gap-4 hover:border-primary/50 hover:bg-secondary/30 transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {cert.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Mini QR code preview */}
                  <div className="bg-white p-1.5 rounded-md opacity-60 group-hover:opacity-100 transition-opacity">
                    <QRCodeSVG
                      value={cert.verificationUrl}
                      size={32}
                      level="L"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      <QRModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        certification={selectedCert}
      />
    </section>
  );
}
