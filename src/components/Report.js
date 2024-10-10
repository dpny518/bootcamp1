import React from 'react';
import './Report.css';

const Report = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="report-container">
      <h1>Admissions Verification Report</h1>
      <p><strong>Date:</strong> {today}</p>
      <p><strong>Subject:</strong> Initial Red Flag Assessment</p>

      <section className="section">
        <h2>Claims Under Review</h2>
        <ol>
          <li>Fencing experience</li>
          <li>Chinese language proficiency</li>
          <li>High biology score</li>
        </ol>
      </section>

      <section className="section">
        <h2>Red Flag Indicators</h2>

        <h3>Fencing Claim 🚩</h3>
        <p><strong>Multiple Concerns Identified</strong></p>
        <ul>
          <li>Candidate's only response about fencing ("I liked thrill of fear") demonstrates:</li>
          <ul>
            <li>No technical knowledge of the sport</li>
            <li>No mention of specific competitions, levels, or achievements</li>
            <li>No reference to coaches, clubs, or training venues</li>
            <li>Lack of familiar terminology used by fencers</li>
          </ul>
          <li>Response pattern suggests possible embellishment or misrepresentation</li>
        </ul>

        <h3>Chinese Language Proficiency ❓</h3>
        <p><strong>Insufficient Data</strong></p>
        <ul>
          <li>No responses yet demonstrating language ability</li>
          <li>Unable to assess authenticity of claim</li>
          <li>Recommend conducting portion of interview in Chinese to verify</li>
        </ul>

        <h3>Biology Score ❓</h3>
        <p><strong>Pending Verification</strong></p>
        <ul>
          <li>Academic records should be cross-referenced with:</li>
          <ul>
            <li>Official school transcripts</li>
            <li>Standardized test scores</li>
            <li>Score reporting services</li>
          </ul>
        </ul>
      </section>

      <section className="section">
        <h2>Recommended Follow-up Questions</h2>

        <h3>Fencing Verification</h3>
        <ol>
          <li>Which weapons do you fence with?</li>
          <li>Where do you train?</li>
          <li>What's your USFA rating?</li>
          <li>Tell me about your most recent competition.</li>
        </ol>

        <h3>Chinese Language Verification</h3>
        <ol>
          <li>Switch to Mandarin for portion of interview</li>
          <li>Request details about language certifications (HSK, etc.)</li>
          <li>Discuss specific Chinese coursework</li>
        </ol>

        <h3>Biology Verification</h3>
        <ol>
          <li>Request specific details about advanced coursework</li>
          <li>Discuss lab experience</li>
          <li>Cross-reference with official transcripts</li>
        </ol>
      </section>

      <section className="section">
        <h2>Initial Risk Assessment</h2>
        <p><strong>High risk</strong> of misrepresentation regarding fencing claim</p>
        <p><strong>Insufficient data</strong> to assess other claims</p>
        <p>Recommend immediate deeper verification of all extracurricular activities</p>
      </section>

      <section className="section">
        <h2>Next Steps</h2>
        <ol>
          <li>Flag application for enhanced verification</li>
          <li>Request supporting documentation</li>
          <li>Contact listed coaches/advisors</li>
          <li>Schedule follow-up interview if documentation is provided</li>
        </ol>
      </section>
    </div>
  );
};

export default Report;
