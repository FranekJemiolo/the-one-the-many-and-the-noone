# Story Rewrite Plan: Aligning with Book Design

## Objective
Rewrite the interactive narrative to match the original book design while preserving the best elements of the current Engine/Resistance framework.

## Core Character Changes

### Protagonist: Aleksy Wrona
- **Current:** "The Witness (You)" - generic unnamed protagonist
- **Target:** Aleksy Wrona - named protagonist with specific personality
- **Personality:** Observer who cannot stay detached, watches exits unconsciously, tracks movement in peripheral vision, pauses before answering
- **Symbolism:** Crow/wolf animal connections
- **Role:** Natural fracture that gradually becomes aware of multiplicity

### Mira Nowak
- **Current:** Only appears as witness in Chapter 1
- **Target:** Main character, emotional anchor, appears throughout story
- **Personality:** Uses humor as shield, maintains eye contact aggressively, interrupts when things get too abstract, sharp-tongued but perceptive
- **Symbolism:** Deer animal connection
- **Role:** Emotional grounding, relationship that reaches breaking point

### Dr. Kaczmarek (NEW)
- **Status:** Currently missing, needs to be added
- **Personality:** Minimal unnecessary movement, writes things down even when remembering, calm, articulate, observant
- **Symbolism:** Amphibious/transitional (between states)
- **Role:** Institutional mind, rational integrator, defines "madness vs insight" tension

### Sava Illich (NEW)
- **Status:** Currently missing, needs to be added
- **Personality:** Head tilts slightly when "switching", repeats phrases with small variations
- **Symbolism:** River (flow, continuity)
- **Role:** The fractured one, shows Aleksy what he might become

### Characters to Keep (with adjusted roles)
- **Marcus:** Building maintenance worker - keep as source of building history
- **Vance:** Temporal trainer - adjust to fit Aleksy's gradual awakening
- **Rose:** Coherence field - keep as philosophical entity
- **The Engine:** Keep as compression force
- **The Resistance:** Keep as multiplicity force

### Characters to Remove/Rebrand
- **Seraph** → Rebrand as Dr. Kaczmarek (institutional role)
- **Chen** → Keep but reduce role
- **Koval** → Merge with Dr. Kaczmarek or rebrand
- **Sister Lys** → Remove or rebrand
- **Kai Rosen** → Remove or rebrand
- **Morrow** → Remove or rebrand

## Plot Structure Changes

### Act 1 — Subtle Dissonance (Chapters 1-10)
- **Current:** Generic anomaly investigation
- **Target:** Aleksy's gradual psychological fracture, Mira introduction, subtle perception shifts
- **Key scenes:**
  - Animal POV (hidden)
  - Aleksy at work (office scene with Mira)
  - First social rejection
  - Branching seeds begin

### Act 2 — Overlap (Chapters 11-20)
- **Current:** Engine vs Resistance conflict
- **Target:** Deep human relationship with Mira, emotional grounding, trust/vulnerability
- **Key scenes:**
  - Mira's apartment (relationship deepening)
  - First fracture becomes undeniable
  - Institutional pressure begins (Dr. Kaczmarek introduction)

### Act 3 — Institutional Conflict (Chapters 21-30)
- **Current:** System oscillation
- **Target:** Merge attempts, institutional conflict escalates, Mira relationship reaches breaking point
- **Key scenes:**
  - Dr. Kaczmarek evaluation
  - Sava Illich introduction (fractured parallel)
  - Aleksy vs institutional control

### Act 4 — Convergence (Chapters 31-40)
- **Current:** Parallel worlds
- **Target:** Merge attempts, identity crystallization, final choices
- **Key scenes:**
  - Aleksy sees what he might become (via Sava)
  - Final fracture or integration
  - Relationship resolution with Mira

### Act 5 — Resolution Paths (Chapters 41-47)
- **Current:** Multiple endings
- **Target:** Different endings based on relationship choices and fracture level
- **Endings:**
  - Distance → survival
  - Merge → loss of individuality
  - Integration → controlled fracture
  - Break → complete separation

## Chapter-by-Chapter Rewrite Plan

### Phase 1: Chapters 1-10 (Foundation)
1. **ch1_signal_event** → Rewrite as Aleksy's first animal POV memory
2. **ch1_aleksy_investigation** → Remove (Aleksy is now protagonist, not witness)
3. **ch1_mira_observation** → Remove (Mira is now main character, not witness)
4. **ch1_witness_testimony** → Rewrite as Aleksy and Mira's first scene together
5. **ch1_marcus_history** → Keep (building history source)
6. **ch1_building_origin** → Keep (Elias Vane backstory)
7. **ch1_rose_field_activation** → Keep (Rose introduction)
8. **ch1_seraph_mentorship** → Remove/replace with Dr. Kaczmarek
9. **ch2_emotional_anomaly** → Rewrite as Aleksy's second fracture moment
10. **ch3_layer_training** → Keep Vance but frame as Aleksy's awakening
11. **ch4_protection_offer** → Rewrite as Aleksy's first institutional encounter
12. **ch5_deja_vu_encounter** → Keep (Aleksy/Mira relationship scene)
13. **ch6_compression_resistance** → Rewrite as Dr. Kaczmarek introduction
14. **ch7-10** → Rewrite to focus on Aleksy/Mira relationship + institutional pressure

### Phase 2: Chapters 11-20 (Relationship & Escalation)
15. **ch11-20** → Rewrite to focus on:
    - Mira's apartment scenes
    - Emotional grounding
    - Dr. Kaczmarek's evaluation
    - Sava Illich introduction
    - Relationship reaching breaking point

### Phase 3: Chapters 21-30 (Institutional Conflict)
16. **ch21-30** → Rewrite to focus on:
    - Merge attempts
    - Institutional control
    - Aleksy vs Dr. Kaczmarek
    - Sava as mirror
    - Mira's breaking point

### Phase 4: Chapters 31-40 (Convergence)
17. **ch31-40** → Rewrite to focus on:
    - Identity crystallization
    - Final fracture/integration
    - Relationship resolution
    - Preparation for endings

### Phase 5: Chapters 41-47 (Resolution)
18. **ch41-47** → Rewrite endings based on:
    - Relationship axis (trust/fear/dependency)
    - Fracture level (controlled/uncontrolled)
    - Institutional alignment

## Variable System Updates

### New Variables
- `aleksy_fracture_level` (0-100)
- `mira_trust` (0-100)
- `mira_fear` (0-100)
- `institutional_alignment` (0-100)
- `animal_pov_access` (boolean)
- `sava_influence` (0-100)

### Variables to Keep
- `layer_training_commitment`
- `observation_awareness`
- `relationship_focus`

### Variables to Remove
- `aleksy_dominance` (Aleksy is now protagonist)
- `mira_dominance` (Mira is now main character, not choice)

## README Updates
- Update main characters section
- Update story description to match new plot
- Update themes to emphasize psychological fracture
- Update endings description

## Canonical Walkthrough Updates
- Rewrite to follow Aleksy's path
- Include relationship choices with Mira
- Include institutional encounters with Dr. Kaczmarek
- Include Sava as mirror character
- Update ending choices based on new structure

## Implementation Order
1. Create detailed character profiles for Aleksy, Mira, Dr. Kaczmarek, Sava
2. Rewrite Chapters 1-5 (foundation)
3. Rewrite Chapters 6-10 (relationship building)
4. Rewrite Chapters 11-20 (escalation)
5. Rewrite Chapters 21-30 (institutional conflict)
6. Rewrite Chapters 31-40 (convergence)
7. Rewrite Chapters 41-47 (resolution)
8. Update README
9. Update canonical walkthrough
10. Test build
11. Commit and push

## Testing Checklist
- [ ] Aleksy appears as protagonist throughout
- [ ] Mira appears throughout as emotional anchor
- [ ] Dr. Kaczmarek appears as institutional figure
- [ ] Sava appears as fractured mirror
- [ ] Character personalities consistent
- [ ] Plot follows book design structure
- [ ] No character contradictions
- [ ] Event continuity maintained
- [ ] Build passes
- [ ] README updated
- [ ] Canonical walkthrough updated
