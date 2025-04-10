import React, { useEffect, useState } from "react";
import LeadFormModal from "./LeadFormModal";

export default function CampaignSection() {
  const [campaigns, setCampaigns] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  // 🔁 Fetch campaigns on mount
  useEffect(() => {
    const fetchCampaigns = async () => {
      const token = localStorage.getItem("sf_access_token");
      const instanceUrl = localStorage.getItem("sf_instance_url");

      if (!token || !instanceUrl) {
        console.error("❌ Missing access token or instance URL.");
        return;
      }

      try {
        const response = await fetch(
          `${instanceUrl}/services/apexrest/campaigns`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("❌ Failed to fetch campaigns");
        }

        const data = await response.json();
        setCampaigns(data); // assuming it's an array
      } catch (error) {
        console.error("🔴 API error:", error);
      }
    };

    fetchCampaigns();
  }, []);

  const handleJoin = (campaignId) => {
    setSelectedCampaignId(campaignId);
    setShowModal(true);
  };

  return (
    <>
      <section className="campaign-section" id="campaigns">
        <h2 className="campaign-title">📢 Our Campaigns</h2>
        <div className="campaigns-grid">
          {campaigns.length === 0 && <p>Loading campaigns...</p>}
          {campaigns.map((c) => (
            <div key={c.id} className="campaign-card">
              <h3>{c.name}</h3>
              <p>{c.description || "No description available."}</p>
              <div className="campaign-meta">
                <span>
                  📅 {c.startDate} → {c.endDate}
                </span>
                <span>👥 Members: {c.memberCount}</span>
              </div>
              <button className="join-btn" onClick={() => handleJoin(c.id)}>
                Join Campaign
              </button>
            </div>
          ))}
        </div>
      </section>

      <LeadFormModal
        open={showModal}
        onClose={() => setShowModal(false)}
        campaignId={selectedCampaignId}
      />
    </>
  );
}
