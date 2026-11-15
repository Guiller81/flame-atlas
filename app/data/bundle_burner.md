# FILE: BURNER_EMULATION_1
# BURNER_EMULATION_1 — Burning rate emulation on the ISS: apparatus, round 1 results and the steady-burning model

## Scope
Covers: ACM-06 (Dehghani 2022, burning rate emulation dissertation) pages 1–77 and 96–103: the study aim and emulation principle, BRE burner hardware and data reduction, ISS test design and flame counts, round 1 results (Table 3.1 end points, steadiness, heat flux, radiant fraction, flame shape, heat of gasification, fire-safety implications), the Chapter 4 analytic steady-burning model (flame height and radius, radiant fraction, absorption coefficient, flame temperature criterion, convective, radiative and net heat flux), and the first half of Chapter 5 (steadiness, radiative-loss correlation, flame-sheet temperature, flame size, surface sensors).
Not here: the rest of ACM-06 Chapter 5 from the flammability diagram on (pressure effect, uncertainty, summary), Chapter 6 flammability maps and real materials (Tables 6.1 and 6.2), Chapter 7 conclusions, Appendices A–F (calorimeter correction, transient data, parameter sheet Tables D.1–D.2, per-test Tables E.1 and F.1) and the PSI-20 record (see BURNER_EMULATION_2). ACM-06 pages 78–95 are not curated in this bundle. Real solid samples burned in flow: see BASS_ISS_SOLIDS_1 to BASS_ISS_SOLIDS_4, NEWER_ISS_SOLID_FUEL_1 and NEWER_ISS_SOLID_FUEL_2, LARGE_SCALE_FIRES_1 and LARGE_SCALE_FIRES_2. The NASA Test 2 procedure itself: see MATERIAL_ACCEPTANCE_1 and MATERIAL_ACCEPTANCE_2. Earth-versus-space limit comparisons outside the BRE study: see EARTH_VS_LOW_G_LIMITS_1 and EARTH_VS_LOW_G_LIMITS_2.

## Conditions covered
| Source | Campaign / test family | Platform and gravity | Burner and fuel | Oxygen | Pressure | Flow | Enclosure and ignition | Duration | Tests | Citation |
|---|---|---|---|---|---|---|---|---|---|---|
| ACM-06 | BRE ISS tests in the CIR rack (ACME), two rounds of 8 test point days | ISS, g-level below μ-g | 25 mm porous copper burner; ethylene or nitrogen-diluted ethylene, heats of combustion 15–47.2 kJ/g (12–47.2 kJ/g in Chapter 5) | X_O2 0.21–0.40 | 0.56–1 bar (Table 2.1); 0.565–1 bar (p.21) | quiescent; fuel-mixture mass flux 1–12 g/m2s | chamber nominally 100 L; igniter | constant fuel flow 3 min in most tests, one 5 min; flames up to 300 s | 149 successful ignitions (29 steady for 120 s or more); 122 ethylene-mixture flames, 49 fuel-terminated; 103 ignited, 49 fuel-terminated (Chapter 5) | [ACM-06 p.20–21 · MEASURED · nominal; ACM-06 p.24–25 · MEASURED · nominal; ACM-06 p.29–30 · Table 2.1 · MEASURED · nominal; ACM-06 p.96 · MEASURED] |
| ACM-06 | Round 1 (Chapter 3), end points in Table 3.1 | ISS, quiescent microgravity | 25 mm burner; ethylene-nitrogen, 23.6 and 47.2 kJ/g (LHV) | 40 to 21 % (p.31); X_O2 0.18–0.40 in Table 3.1 (p.32) | 1 to about 0.4 bar (p.31); 0.57–1.04 bar in Table 3.1 (p.32) | quiescent | chamber nominally 100 L; igniter | t_b per test | 59 successfully ignited tests | [ACM-06 p.25 · Fig. 2.1 · MEASURED · nominal; ACM-06 p.29–30 · MEASURED · nominal; ACM-06 p.31–32 · Table 3.1 · MEASURED · nominal] |
| ACM-06 | Chapter 4 steady set compared with the analytic model | ISS (Table 3.1 "Summary of the ISS tests") | 25 mm burner; ethylene-nitrogen, 23.6 and 47.2 kJ/g (LHV) | 21 to 40 % | 0.56 to 1 bar | quiescent chamber (p.30) | chamber nominally 100 L; igniter | steady end points | 29 steady flames | [ACM-06 p.29–30 · MEASURED · nominal; ACM-06 p.32 · Table 3.1 · MEASURED · nominal, ctx; ACM-06 p.55 · MEASURED · nominal; ACM-06 p.25 · Fig. 2.1 · MEASURED · nominal] |
| ACM-06 | Normal-atmosphere BRE tests with DRM22 simulation (test 19039H2) | ISS, microgravity, per Table 3.1 "Summary of the ISS tests" (row 39H2, p.32) and Table 6.1 of the microgravity chapter (p.109–112); p.19–20 say only "atmospheric condition" | ethylene, X_f = 1, 3.09 g/m2s (19039H2, p.19–20); 3.07 g/m2s in Table 6.1, 3.06 in Table 3.1 | atmospheric (p.19–20); X_O2 0.184 before and 0.1815 after the test (Table 6.1), 0.18 (Table 3.1) | atmospheric (p.19–20); 1.05 bar (Table 6.1), 1.02 bar (Table 3.1) | not reported on p.19–20; quiescent chamber (p.30) and quiescent ambient (p.109 chapter title) | igniter (first frame 4.5 s after retraction) | 19039H2 self-extinguished after repeated partial extinction | 5 tests | [ACM-06 p.19–20 · Fig. 1.1 · MEASURED · nominal; ACM-06 p.109–112 · Table 6.1 · MEASURED; ACM-06 p.32 · Table 3.1 · MEASURED · ctx; ACM-06 p.30 · MEASURED · ctx] |
| ACM-06 (citing ref [10]) | Earlier BRE drop-facility tests | drop facility, 5-s microgravity | burner | not reported on these pages | not reported on these pages | not reported on these pages | not reported on these pages | 5 s | not reported on these pages | [ACM-06 p.18 · CITED; ACM-06 p.50 · MEASURED] |
## Findings

### Symbols, subscripts and end-condition codes (ACM-06 list of abbreviations)
- Latin symbols, A to k: A surface area; b copper-plate diameter taken at half its thickness; B Spalding B number; c specific heat; c_p gas specific heat; D_∞ ambient mass diffusivity; d_f radiometer distance to the centroid of the flame volume; d_n radiometer distance to where the burner's normal axis meets the radiometer surface; d_s radiometer distance to the burner-surface centre; e_b thermal effusivity; F_s→r view factor of the burner surface relative to the radiometer; F_s→f view factor of the flame sheet relative to the burner surface; FT Fuel Terminated; H copper-plate thickness; h vertical distance from burner surface up to the radiometer; h_0 effective heat-transfer coefficient between plate and semi-infinite back; h_rod effective heat-transfer coefficient between sensor rod and plate; K gas conversion factor; k thermal conductivity. [ACM-06 p.13 · AUTHOR-INTERPRETATION]
- Latin symbols, L to Y_Fb: L heat of gasification; (mc)_Cu heat capacity of the copper; Ṁ total mass flow rate; ṁ mass flow rate; ṁ'' mass flux; p ambient pressure; Pe_c Peclet number; Q̇ heat loss rate; q̇'' heat flux; R burner-surface radius; r radial position on the burner surface; r_f flame radius measured at the flame base; SE Self-Extinguished; S stoichiometric molar air-fuel ratio; T temperature; t time; t_b burn time; V both sensor output voltage and volumetric flow rate; X mole fraction; X_r radiant fraction; x vertical distance from the burner centre; Y mass fraction; Y_Fb fuel mass fraction at the burner surface. [ACM-06 p.13 · AUTHOR-INTERPRETATION]
- y_f flame height; Z mixture fraction; Greek: α absorptivity, or fuel-to-ambient-air mass ratio (one row, two meanings); β radiative heat flux to the top surface over radiative heat flux to the burner's bevel edge; Δh_c enthalpy of combustion; ϵ emissivity; θ_f angle between the radiometer normal axis and the radiometer-to-flame-centroid line; θ_r angle, from horizontal, of the line joining burner surface and radiometer; κ absorption coefficient; κ̃ effective absorption coefficient (printed "coeficient"); λ dimensionless mass flux, λ = ṁ'' / (4k / (π c_p R_b)) as printed; μ radiative over convective heat flux to the burner top surface; ξ ellipsoidal coordinate; ξ_f ellipsoidal coordinate at the flame sheet; ρ density; σ Stefan-Boltzmann constant (printed "Stephan-Boltzmann"); τ dimensionless time, τ = D_∞ t / R²; Ω dimensionless radiation-fraction variable. [ACM-06 p.14 · AUTHOR-INTERPRETATION]
- Subscripts: 60 the +60 radiometer; b back of the copper plate; CO2 carbon dioxide; c and convection convective heat flux; cal average heat flux to the burner surface from the calorimeter; crc corrected calorimeter; ctr burner-surface centre; ext external; f flame sheet or fuel; g burner gas or combustion-product gas; H heat flux sensors; H2O water vapour; mix fuel mixture; o without radiation loss; O2 oxygen; off offset position on the burner surface (r = 9.5 mm); pr predicted; r radiation; rr re-radiation; rod heat flux sensor rod. [ACM-06 p.14 · AUTHOR-INTERPRETATION]
- Subscripts, continued: s burner surface; st steady state; sensor heat flux sensor; ∞ ambient; "∈= 0" (as printed) ellipsoid aspect ratio at the burner surface. [ACM-06 p.15 · AUTHOR-INTERPRETATION]

### Aim, emulation principle and literature context
- The author holds that the fire hazard of solids and liquids in microgravity is poorly known: ground tests are too brief to get past ignition transients, and burning dozens of condensed fuels in orbit would cost too much. [ACM-06 p.1 · AUTHOR-INTERPRETATION]
- Burning rate emulation stands in for a condensed fuel with gases fed through a porous burner that carries embedded heat flux gauges; the Burning Rate Emulator (BRE) is such a circular porous gas burner, derived from earlier emulators used in normal gravity and in drop-tower tests, and is meant to reproduce quiescent burning of condensed fuels. [ACM-06 p.1 · AUTHOR-INTERPRETATION; ACM-06 p.17 · AUTHOR-INTERPRETATION; ACM-06 p.21 · AUTHOR-INTERPRETATION]
- The emulation is meant to match four diffusion-flame properties at the same burner flow rate: heat of combustion, heat of gasification, surface temperature and smoke point; the first two are the primary ones, and the last two are examined for normal-gravity tests. [ACM-06 p.17 · AUTHOR-INTERPRETATION; ACM-06 p.21–22 · AUTHOR-INTERPRETATION]
- The author sees the BRE as a practical way to study the flammability of materials carried on spacecraft. [ACM-06 p.17 · AUTHOR-INTERPRETATION]
- The author cites observations that microgravity fires may behave quite differently, with some experiments suggesting condensed fuels may burn more easily there, and concludes that condensed-fuel flames need in-depth study in a quiescent artificial atmosphere in microgravity, i.e. on the ISS. [ACM-06 p.16 · AUTHOR-INTERPRETATION]
- A fire on the Mir station was started by an oxygen generator and was later judged to have probably gone out because its oxygen supply was used up (ACM-06 refs [1–3]). [ACM-06 p.16 · CITED]
- The author argues that preventing spacecraft fires requires studying how flames develop, starting from a laminar diffusion flame in a quiescent environment. [ACM-06 p.16 · AUTHOR-INTERPRETATION]
- On Earth, buoyant entrainment of surrounding air gives a flame an upward-pointing shape, while with negligible buoyancy in microgravity flames turn more hemispherical or bubble-like; cabin ventilation supplies forced convection that helps fire spread, and the hemispherical flame shape changes soot behaviour and gas release and, through them, radiation losses. [ACM-06 p.16 · AUTHOR-INTERPRETATION]
- NASA judges the flammability of materials sent to space with a series of normal-gravity tests (ref [4]), which are described as not enough to characterise a flame in reduced gravity (ref [1]). [ACM-06 p.16–17 · CITED]
- Routine ISS burn tests of candidate materials would be ideal but are not practical, per the author. [ACM-06 p.17 · AUTHOR-INTERPRETATION]
- Knowledge of microgravity fires remains limited after decades; extensive studies have been made on very small materials and burners, but these usually include flames with assisted ambient flows, and burning in place on a surface in a quiescent atmosphere is the case that has been poorly understood (refs [4,10]). [ACM-06 p.17 · CITED]
- Materials have long been known to burn in place and to spread with an ambient flow, given enough oxygen, at every gravity level (refs [6–9,11–30]); in microgravity, opposed-flow spread generates its own flow in a quiescent atmosphere (refs [18,26–28,31–33]). [ACM-06 p.17 · CITED]
- Air movement inside a spacecraft exists but is small and random, according to the author. [ACM-06 p.17 · AUTHOR-INTERPRETATION]
- Early anecdotal Kimzey experiments showed that small plastic items could burn, and a controlled, tiny cylindrical candle-wick flame burned steadily for about an hour in microgravity (refs [34,35]); liquid droplets burn quasi-steadily and steady-burning theory predicts them reasonably well, although the onset of cool flames can augment burning (refs [36–43]). [ACM-06 p.17 · CITED; ACM-06 p.49 · CITED]
- The author splits fire growth into three processes: ignition, burning in place, and spread. [ACM-06 p.18 · AUTHOR-INTERPRETATION]
- In the author's view, opposed-flow spread is well understood in microgravity, concurrent spread is in good shape for a specified ambient flow, and microgravity ignition is adequately understood for a given applied heat flux (printed "insulting heat flux"); in normal gravity, theory that even neglects heat loss predicts ignition time reasonably, so ignition depends only on heat flux and material properties. [ACM-06 p.18 · AUTHOR-INTERPRETATION]
- NASA Test 2 is the cone calorimeter, which allows these property measurements (ref [45], ISO 5660-1); NASA Test 1 (ref [44], NASA-STD-6001B), in regulatory use, takes upward spread in 1 g at higher-than-normal oxygen mole fractions as the defining safety criterion for using a material in spacecraft. [ACM-06 p.18 · CITED; ACM-06 p.168 · CITED]
- The work aims to pair Test 2, with a procedure for measuring properties, with theoretical prediction of burning in microgravity. [ACM-06 p.18 · AUTHOR-INTERPRETATION]
- The burner study began years earlier to examine burning of simulated flat surfaces, burner gases making ignition easy and a steady flow rate settable (refs [10,46–49]); even at a steady flow rate the microgravity flame grows for some time before an apparent steady state, and early 5-s drop-facility tests suggested a steady flame heat flux within that time while the flame kept growing (ref [10]); the blue flames were suspected to lose more radiation as they grew and to end in radiative extinction. [ACM-06 p.18 · CITED]
- All experiments in the dissertation are transient. [ACM-06 p.18 · MEASURED]
- If a steady state is reached, the author takes the data to represent a real material burning. [ACM-06 p.18 · AUTHOR-INTERPRETATION]
- Measuring the flame heat flux back to the burner gives the heat of gasification, a key steady-burning property for an evaporating material; the author holds that an evaporative model gives good time-averaged burning estimates in transient cases even with more complex pyrolysis and charring; burner surface temperature relates to the material's vaporisation temperature but weakly affects burning, since it barely changes ignition and its radiative flux is usually small next to flame heat fluxes. [ACM-06 p.18–19 · AUTHOR-INTERPRETATION]
- The author hypothesises that the heats of combustion and gasification, both material properties, define flammability, and adds the smoke point because flame radiation matters in normal gravity; in microgravity soot radiation does not appear important, whereas radiation from the fuel itself and from its water and carbon dioxide products should be. [ACM-06 p.19 · AUTHOR-INTERPRETATION]
- Using heat of combustion, heat of gasification and smoke point, earlier work emulated plastics and liquid pool fires of 25 and 50 mm diameter (refs [4,10,46–54]). [ACM-06 p.19 · CITED]
- The task is framed as building an experimental flammability map (heat of gasification against fuel-mixture mass flux, and eventually against heat of combustion) whose heat-of-combustion and heat-of-gasification values can be matched to real materials (refs [51,55,56]). [ACM-06 p.19 · AUTHOR-INTERPRETATION]

### Modelling approach (as introduced in the abstract and Chapter 1)
- The steady ISS data serve to assess the predictive modelling. [ACM-06 p.21 · MEASURED]
- The model is an analytic transient analysis with demonstrated numerical accuracy and good predictions of 5-s microgravity data; its purely convective form is adjusted by lowering the heat of combustion by the radiative heat loss, through the flame radiative fraction, which is treated as lost energy so that the ellipsoidal model predicts flame size, surface heat flux and steady-state temperature. [ACM-06 p.21 · MODELED]
- A radiative-fraction model with one empirical constant can be built; given the radiative fraction, flame heat fluxes and flame temperature can be computed, while flame shape does not depend on it; a flame temperature of 1100–1200 K with radiation loss is used as the criterion for a stable flame (steady burning); RADCAL is used to model flame emissivity and absorption coefficient; steady-burning conditions can be predicted from known fuel properties, atmospheric conditions and fuel diameter (ref [52]). [ACM-06 p.21 · MODELED]
- Abstract summary of the analysis: a radiation-theory dimensional analysis gives a relation for the radiative loss fraction; RADCAL, a narrow-band radiation model, gives flame emissivities from product concentrations, temperature, flame length and pressure; published analytic solutions predict flame height and radius and, with the empirical radiation relation, correct the total heat release rate for radiative loss; average convective and radiative heat fluxes, from the analytic solution and a view-factor model of the burner surface relative to the flame sheet, feed the heat-of-gasification calculation. [ACM-06 p.1–2 · MODELED]
- Stated objectives: characterise the burners before data runs so the ISS measurement techniques are well understood; correlate results with steady-state theory and analyse the burner as a microgravity condensed-fuel emulator to obtain the flammability map; modify the slug-calorimeter calibration constants (ref [48]) for heat absorbed by the burner rim; examine how the calorimeter depends on burn time; convert each round's data and segregate it to find correlations; extend the dimensional-analysis radiative-fraction correlation to chamber pressure and oxygen mole fraction with RADCAL, Grosshandler's narrow-band model (refs [58,59]); analyse flame temperature with ellipsoidal theory (refs [49,60]) and estimate each flame's average emissivity; obtain a microgravity flammability map for spacecraft fire safety. [ACM-06 p.22 · AUTHOR-INTERPRETATION]

### ISS operations, burner and instruments
- The BRE tests ran on the ISS in the Combustion Integrated Rack (CIR) within the Advanced Combustion via Microgravity Experiments (ACME) program; NASA-written software ran them automatically, and crew swapped fuel and oxygen bottles and installed burners and test-specific hardware; NASA operations ran the tests, recorded imaging and non-imaging data and uploaded them to a cloud drive, while the UMD team monitored, changed the parameter sheet as needed, made a first analysis soon after each test, and did the full analysis and publication. [ACM-06 p.24–25 · MEASURED]
- UMD pre-test work: calibrating the heat flux sensors, radiometers and slug calorimeter; finding sensor, mass-flow-meter and burner operating conditions that would give ignition and data on test point days; choosing design parameters and a test matrix that would yield enough data for the objectives. [ACM-06 p.24 · MEASURED]
- Before each test point day UMD sent NASA operations a parameter sheet of 69 parameters (Appendix D: Table D.1, meanings in Table D.2), among them fuel and nitrogen volumetric flow rates, ambient conditions per test, camera settings and igniter position; it acted as that day's test matrix in much more detail, and Table D.1 shows an example with two test points, 21028A1 and 21028B1. [ACM-06 p.24 · MEASURED; ACM-06 p.152 · Table D.1 · MEASURED · ctx]
- Two rounds of microgravity tests were planned, varying fuel-mixture mass flux, chamber ambient oxygen mole fraction, chamber pressure, fuel type and burner size; each round had 8 test point days of 12 hours; round 1 preparation, data and analysis gave two journal papers and one further journal collaboration (dissertation sections 2–5), and round 2 gave a further data set. [ACM-06 p.22 · MEASURED; ACM-06 p.25 · MEASURED]
- Burner: gaseous-fuel BRE whose 25 mm diameter top is perforated copper sheet with 125 holes of 1.2 mm, with a ceramic flow straightener for uniform fuel flow over the surface and an igniter; drawing labels: centre thermocouple at r = 4.7 mm, offset thermocouple at r = 10.4 mm, centre heat flux gauge at r = 0 mm, offset gauge at r = 9.5 mm, copper surface, insulation, flame sheet, flame height y_f, radiation from CO2 and H2O; two K-type thermocouples at r = 4.7 and 10.4 mm record the copper-top surface temperature. [ACM-06 p.25 · Fig. 2.1 · MEASURED · nominal; ACM-06 p.26 · MEASURED · nominal]
- Heat flux to the burner is measured by two embedded Medtherm Schmidt-Boelter gauges flush with the surface at r = 0 and 9.5 mm (not water-cooled, so their surface temperatures are logged too) and by the copper top, designed to be isothermal and to work as a slug calorimeter for the total average flux; the aim is the average net heat flux to the burner surface from calorimeter and local sensors. [ACM-06 p.1 · MEASURED · nominal; ACM-06 p.25–26 · MEASURED · nominal; ACM-06 p.103 · MEASURED · nominal]
- Anomaly: a design fault left the copper top's edges exposed to the flame, an unwanted heated surface that made the direct face-area heat flux significantly uncertain; the edge should have been insulated, the calorimeter yields the face-average flux only once edge heating is removed, and q''_cal from Eq. 2.1 still holds the heat taken up by the bevel edge, removed by the correction procedure of Appendix A. [ACM-06 p.26–27 · MEASURED; ACM-06 p.144 · MEASURED · ctx; ACM-06 p.144 · AUTHOR-INTERPRETATION · ctx]
- Calorimeter reduction (Eq. 2.1): q''_cal = [(mc)_Cu dT_s/dt + ε σ A_s (T_s⁴ − T_∞⁴) + h A_s (T_s − T_∞) + Q̇_g + Q̇_rod + Q̇_b] / A_s; the first three terms are heat stored in the copper plate, surface re-radiation and free convection from the plate (zero in microgravity); A_s = 573 mm² (burner face), A_rod = 40 mm² (sensor side wall passing heat to the burner back), A_b = 573 mm² (back face of the plate); Q̇_g, Q̇_rod, Q̇_b are heat taken by the burner gas flow, conducted into the sensor rod (geometry in ref [48]) and passed to the burner back; fitted range not stated. [ACM-06 p.26 · Eq. 2.1 · MODELED]
- Loss terms: Q̇_g = ṁ_g c_g (T_s − T_b) (Eq. 2.2); Q̇_rod = h_rod A_rod (T_s − T_rod) (Eq. 2.3); Q̇_b = h_b A_b (T_s − T_b) (Eq. 2.4); back temperature T_b = T_∞ + (h_b/e_b) [1.5 (T_s − T_b) ∫₀ᵗ (T_s − T_b) dt]^0.5 (Eq. 2.5), h_b being the heat-transfer coefficient to the back of the copper surface; Eqs. 2.1–2.5 are derived in ref [49]; fitted range not stated. [ACM-06 p.26 · Eq. 2.2 · MODELED; ACM-06 p.27 · Eq. 2.5 · MODELED]
- The calorimeter was calibrated with a known radiant heat flux following Markan et al. (ref [48]), and the two heat flux sensors against a NIST standard (refs [55,61]). [ACM-06 p.26–27 · CITED]
- Calibration constants, fitted by a commercial solver minimising the RMS difference between the right side of Eq. 2.1 and the known average net heat flux from the two sensors during calorimeter calibration: h_b = 386 W/m2-K, h_rod = 22 W/m2-K, e_b = 5525 W-s0.5/m2-K, (mc)_Cu = 7.98 J/K (apparatus and procedure in ref [48]). [ACM-06 p.27 · MEASURED]
- The sensors keep their original Medtherm paint and the copper top has a tougher paint (printed "Rustoleum"); both painted surfaces measured emissivity of unity, with absorptivities 0.91 (sensor) and 0.94 (copper) (ref [61]). [ACM-06 p.27 · MEASURED]
- The wanted net flux is flame radiation plus flame convection minus burner-surface re-radiation, which is what the surface sensors measure (Eq. 5.10). [ACM-06 p.27 · AUTHOR-INTERPRETATION; ACM-06 p.103 · MEASURED]
- Sensor correction for sensor-to-burner surface temperature differences (Eqs. 2.6–2.7, derived in refs [10,46,47]; also refs [48,55] on p.103): q''_net = q''_sensor + (α_s − α_H) q''_f,r − ε_s σ (T_s⁴ − T_∞⁴) + ε_H σ (T_H⁴ − T_∞⁴) + h_b (T_H − T_s); h_b = (q''_sensor + ε σ (T_H⁴ − T_∞⁴)) / (Y_O2 Δh_c,O2 / c_p − (T_H − T_∞)); fitted range not stated. [ACM-06 p.27 · Eq. 2.6 · CITED; ACM-06 p.103 · CITED]
- The second term (unknown incident flame radiation times the absorptivity difference) was to be removed by using one paint on sensor and burner, which did not happen; it is neglected as under 1 % of the net heat flux, since q''_f,r spans 1.9–5.5 kW/m2 and the average absorbed heat flux 6.5–15.7 kW/m2 (BRE ISS tests; the test conditions behind these ranges are not reported in the pages read). [ACM-06 p.28 · MEASURED]
- Radiometry: several Dexter Research radiometers (BaF2 window, argon-filled gap between sensing surface and window, ref [61]) view flame and burner from roughly 160 and 200 mm and were calibrated by NASA against a black-body source at varied temperature and aperture; they give the sensor-normal radiant flux from flame and burner, used to estimate the flame's total radiation loss and the radiative loss fractions; two other radiometers of the array read out of range in most cases. [ACM-06 p.1 · MEASURED · nominal; ACM-06 p.28 · MEASURED · nominal]
- The two radiometers used for analysis have calibrations (0.00114V − 0.001481) W/cm2 and (0.001798V − 0.002307) W/cm2, V being sensor output voltage (refs [62,63]); fitted range not stated. [ACM-06 p.28 · MEASURED]

#### Radiometer geometry (Fig. 2.2 table)
| Radiometer | d_n (mm) | d_f (mm) | d_s (mm) | θ_r (deg.) | θ_f (deg.) | Citation |
|---|---|---|---|---|---|---|
| +60 | 154 | 160 ± 1.5 | 160.5 | 5 | 21 | [ACM-06 p.29 · Fig. 2.2 · MEASURED · nominal] |
| offset | 204 | 206 ± 2 | 208 | 2 | 55 | [ACM-06 p.29 · Fig. 2.2 · MEASURED · nominal] |

- The fuel-nitrogen mixture mass flux stands for the condensed-phase burning rate; for a steady flame, the net average flame heat flux divided by this mass flux gives the theoretical (effective) heat of gasification of the emulated material. [ACM-06 p.1 · AUTHOR-INTERPRETATION; ACM-06 p.28 · AUTHOR-INTERPRETATION]
- Data are converted to engineering units, and the average of the two measured heat fluxes is used to obtain heats of gasification. [ACM-06 p.22–23 · MEASURED]
- Radiative loss fraction: the flame's total radiation loss rate over its total heat release rate, taken from the radiometer data; Chapter 4 names X_r the flame radiation loss fraction, radiant energy lost by the flame over its combustion energy. [ACM-06 p.23 · AUTHOR-INTERPRETATION; ACM-06 p.55 · AUTHOR-INTERPRETATION]
- Mixture volumetric flow is metered by Hastings HFM-300 controllers of 0.2 slpm (low mass flux tests) and 0.5 slpm (high mass flux tests) full scale, nitrogen-based; being calibrated with nitrogen, they need a gas conversion factor for other gases. [ACM-06 p.28 · MEASURED · nominal]
- Conversion (ref [64]): V̇_mix = (K_mix/K_N2) V̇_N2 (Eq. 2.8) and 1/K_mix = X_f/K_f + (1 − X_f)/K_N2 (Eq. 2.9), with K_N2 = 1; the factors for these tests come from Eq. 2.9 and the mixture flow from Eq. 2.8; fitted range not stated. [ACM-06 p.28–29 · Eq. 2.8 · CITED]
- Imaging: an operations camera inside the chamber records 30 fps video, from which still frames and image sequences show flame dynamics. [ACM-06 p.29 · MEASURED · nominal]

### Test campaign, design and outcome counts
| Set | Platform and gravity | Burner and fuel | Oxygen | Pressure | Flow | Enclosure | Ignition | Duration | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | ISS, Combustion Integrated Rack (ACME); g-level below μ-g (ref [65]) | 25 mm porous copper BRE burner; ethylene or nitrogen-diluted ethylene, X_f 0.15 to 1 (15 % and 100 % ethylene), heats of combustion 15–47.2 kJ/g, 47.2 kJ/g being pure ethylene (refs [66–68]) | X_O2 0.21–0.4, varied | 0.56–1 bar (Table 2.1); 0.565–1 bar (p.21); varied | quiescent ambient; fuel-mixture mass flux ṁ''_mix 1–12 g/m2-s, varied | chamber nominally 100 L before hardware, about 15 L of it taken by hardware | igniter | constant fuel flow 3 min in most tests, one flame 5 min | ambient diluent; ambient temperature | [ACM-06 p.1 · MEASURED · nominal; ACM-06 p.18 · MEASURED · nominal; ACM-06 p.20–21 · MEASURED · nominal; ACM-06 p.24 · MEASURED · nominal; ACM-06 p.25 · Fig. 2.1 · MEASURED · nominal; ACM-06 p.29–30 · Table 2.1 · MEASURED · nominal; ACM-06 p.30 · CITED · nominal] |
| C2 | ISS, round 1: 59 successfully ignited tests | 25 mm burner emulating flat-surface materials; ethylene-nitrogen mixtures with heats of combustion 23.6 and 47.2 kJ/g (LHV) | 40 to 21 % O2 (p.31); X_O2 0.18–0.40 in Table 3.1 (p.32) | 1 to about 0.4 bar (p.31); 0.57–1.04 bar in Table 3.1 (p.32) | quiescent | chamber nominally 100 L before hardware, about 15 L of it taken by hardware | igniter | t_b per test in Table 3.1 | ambient diluent; ambient temperature | [ACM-06 p.25 · Fig. 2.1 · MEASURED · nominal; ACM-06 p.30 · MEASURED · nominal; ACM-06 p.31 · MEASURED · nominal; ACM-06 p.32 · Table 3.1 · MEASURED] |
- Three of the atmospheres are nominal NASA-selected spaceflight habitat atmospheres: 21 % O2 at 1 bar, 26.5 % at 0.7 bar, and 34 % at 0.565 bar (ref [69]); round 1 used NASA human-habitat atmospheres. [ACM-06 p.30 · CITED · nominal; ACM-06 p.31 · MEASURED · nominal]
- Campaign outcome (conditions C1): 149 successful ignitions; 29 flames held a perceived steady state for 120 s or more (up to 300 s), and the rest developed instabilities and then self-extinguished. [ACM-06 p.29–30 · MEASURED]
- Of the 122 ethylene-mixture ISS flames, 49 did not self-extinguish before the fuel flow was deliberately stopped, the ISS making such long-duration microgravity flames possible (conditions C1). [ACM-06 p.20 · MEASURED]
- Round 1 (conditions C2): more than half of the 59 tests burned at least 2 and up to 5 minutes; flames were thin, blue and grew slowly for minutes; some self-extinguished, some oscillated periodically, and others seemed to become steady and were shut down. [ACM-06 p.31 · MEASURED]
- All flames in 21 % (by volume) oxygen self-extinguished within 40 s, while steady flames occurred at 26.5, 34 and 40 % oxygen (abstract, conditions C1; pressure and flow rate of these flames not given there); oxygen levels of 26 % and above were generally found able to sustain steady flames (round 1, conditions C2). [ACM-06 p.2 · MEASURED; ACM-06 p.31 · MEASURED]
- Theory shows the flames that were shut down had steady growth, with every round 1 end point above 94 % of steady-state flame heat flux (conditions C2); the abstract puts the steadiest flames above 94 % of their steady-state heat flux and height, steadiness being quantified with the analytic solution just before extinction (conditions C1). [ACM-06 p.2 · MODELED; ACM-06 p.31 · MODELED]
- The most useful Table 3.1 data are the long, apparently steady tests ended by shutting off the fuel; their steadiness is examined theoretically to justify treating them as steady, and their use is the derived heat of gasification (heat flux over mass flux), which the author relates to real solids that could burn steadily in microgravity at this scale. [ACM-06 p.31 · AUTHOR-INTERPRETATION]
- Radiometers gave a flame radiative fraction that appeared to correlate well with measured flame height (round 1, conditions C2), and surface heat flux plus flame radiation measurements led to a radiative loss fraction (X_r) correlation (conditions C1). [ACM-06 p.20–21 · MEASURED; ACM-06 p.31 · MEASURED]
- The other major finding was a flammability map showing that plastics can burn steadily in place in microgravity (conditions C1). [ACM-06 p.21 · AUTHOR-INTERPRETATION]
- From measurement and theory, a flammability map plotting heat of gasification against heat of combustion was built for nominal ambient oxygen mole fractions 0.265, 0.34 and 0.4 (abstract, conditions C1). [ACM-06 p.2 · MODELED]
- Earlier analyses of round 1 (refs [50–52]) reported the radiative loss fraction correlated with flame length, the flammability map, and emulation of PMMA and nylon (ref [51]). [ACM-06 p.21 · CITED]
- Table 3.1 summarises the end-point conditions of the 59 round 1 tests (conditions C2), one row per test point (IDs such as 39B3, 87B1, 94K1, 56C1; tests-table keys BRE:19039B3 and so on) in four ruled groups, with columns test pt., X_O2, X_f, p [bar], ṁ'' [g/m2s], q̇''_ctr, q̇''_off, q̇''_cal, q̇''_cal,crc [kW/m2], y_f, r_f [mm], q̇''_r,60, q̇''_r,off, X_r (these three without a printed unit), t_b [s] and end condition FT or SE. [ACM-06 p.31 · AUTHOR-INTERPRETATION; ACM-06 p.32 · Table 3.1 · MEASURED]
- Table 3.1 footnotes: 1 = radiometer data not available (marked on the q̇''_cal,crc dash of row 39B3); 2 = Flow-Terminated, considered as steady (on FT of row 39B3); 3 = Self-Extinguished (on SE of row 63B1); other gaps print as "-" with no legend, and row 66J1 prints no t_b value; the list of abbreviations names FT "Fuel Terminated". [ACM-06 p.32 · Table 3.1 · MEASURED; ACM-06 p.13 · AUTHOR-INTERPRETATION · ctx]

### Normal-atmosphere tests and the DRM22 simulation of test 19039H2
- Numerical simulations of 5 tests run at normal atmosphere predicted heat flux, flame lifetime, flame size and radiative heat loss successfully, and also described the extinction process including its instabilities (refs [50,57]). [ACM-06 p.19 · MODELED]
- All 5 of those normal-atmosphere tests showed instabilities and flame oscillation before self-extinguishing. [ACM-06 p.19 · MEASURED]
- Test 19039H2 (key BRE:19039H2; mass flux 3.09 g/m2s, X_f = 1, ignited in atmospheric condition; burner diameter not reported on these pages; Table 6.1 of the microgravity chapter lists 19039H2 at X_O2 0.184 before and 0.1815 after the test, 1.05 bar and 3.07 g/m2s, and Table 3.1 "Summary of the ISS tests" lists 39H2 at X_O2 0.18, 1.02 bar and 3.06 g/m2s): Fig. 1.1 compares experiment with a DRM22 simulation of the growing flame; colour shows net radiative emission and lines are iso-contours of volumetric heat release rate 1, 2, 4, … MW/m3; the first frame is 4.5 s after igniter retraction and frames are 3 s apart in both, at the same spatial scale and burner position. [ACM-06 p.19–20 · Fig. 1.1 · MEASURED · nominal, single-test; ACM-06 p.19–20 · Fig. 1.1 · MODELED · single-test; ACM-06 p.109–112 · Table 6.1 · MEASURED · single-test; ACM-06 p.32 · Table 3.1 · MEASURED · ctx, single-test]
- Simulated frame labels for test 19039H2 (3.09 g/m2s, X_f = 1, atmospheric condition, DRM22), time and peak temperature: 2.20 s, 1498 K; 5.20 s, 1338 K; 8.20 s, 1252 K; 13.40 s, 1225 K; 14.00 s, 1402 K; 14.20 s, 1224 K. [ACM-06 p.20 · Fig. 1.1 · MODELED · single-test]
- The simulations captured partial extinction and re-ignition (oscillation before self-extinction): after local extinction the flame edge takes a hook-like (bibrachial) form, and on re-ignition a classical triple flame travels along the stoichiometric surface and restores the original shape (test 19039H2, 3.09 g/m2s, X_f = 1, atmospheric condition). [ACM-06 p.20 · MODELED · single-test]
- In the experiment, partial extinction and re-ignition repeated several times before the flame self-extinguished completely (test 19039H2, 3.09 g/m2s, X_f = 1, atmospheric condition). [ACM-06 p.20 · MEASURED · single-test]

### Unsteady flames: growth, oscillation and self-extinction (round 1)
| Set | Platform and gravity | Burner and fuel | Oxygen | Pressure | Flow | Recording | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|---|---|
| C3 | ISS, quiescent microgravity (round 1) | 25 mm BRE burner; ethylene, X_f = 1 | nominal X_O2 0.34 | nominal 0.56 bar | quiescent; ṁ'' 1.78 (87B1), 2.55 (51D1), 6.95 (94K1) g/m2s | heat flux devices and four video cameras after ignition | ambient diluent; ambient temperature | [ACM-06 p.29–31 · MEASURED · nominal, ctx; ACM-06 p.33 · MEASURED · nominal; ACM-06 p.34 · Fig. 3.1 · MEASURED · nominal] |
- Unsteady data and flame images show transient behaviour and help tell steady flames from self-extinguished ones. [ACM-06 p.33 · AUTHOR-INTERPRETATION]

| Test (tests-table key) | ṁ'' (g/m2s) | Behaviour (conditions C3) | Fig. 3.1 frame times as labelled | Citation |
|---|---|---|---|---|
| 87B1 (BRE:19087B1) | 1.78 | grows and reaches steady state; deliberately shut down at about 3 min | 0 s (ignition), 30, 60, 120, 181 s (flow out) | [ACM-06 p.33 · MEASURED · single-test; ACM-06 p.34 · Fig. 3.1a · MEASURED · single-test] |
| 51D1 (BRE:19051D1) | 2.55 | grows and reaches steady state; deliberately shut down at about 3 min | 0 s (ignition), 20, 60, 120, 182 s (flow out) | [ACM-06 p.33 · MEASURED · single-test; ACM-06 p.34 · Fig. 3.1b · MEASURED · single-test] |
| 94K1 (BRE:19094K1) | 6.95 | apparent soot particles thrown out through the flame (frame at 6 s); partial extinction starts at 20 s, the flame then alternates between full and partial until it disappears at 34 s | 0 s (ignition), 6, 8, 10, 12, 15, 21, 24, 25, 29, 30, 32, 33, 33, 34 s (extinction); from 24 s a partial flame alternates with a full one | [ACM-06 p.33 · MEASURED · single-test; ACM-06 p.34 · Fig. 3.1c · MEASURED · single-test] |

- As mass flux rises from 1.78 to 2.55 to 6.95 g/m2s (conditions C3), the flame grows taller and finally goes out at the highest rate; it grows both radially and vertically and, at higher flow, overhangs below the burner surface around the exposed copper edge; after early ignition effects every flame is blue (frame sequences edited for the best images). [ACM-06 p.33 · MEASURED]
- The self-extinguished flames occurred above 3 g/m2s and all showed periodic growth and decay before final cessation (nominal X_O2 0.34, 0.56 bar; otherwise conditions C3). [ACM-06 p.33 · MEASURED]
- The shutdown at about 3 minutes was needed to save fuel and keep the atmosphere reasonably constant. [ACM-06 p.33 · MEASURED · nominal]
- Ban et al. saw the same overhang trend with rising flow rate, and ref [70] found similar general flame shapes in 1-g experiments. [ACM-06 p.33 · CITED]
- Fig. 3.2 plots heat flux and surface temperature for 94K1 (left, high flow) and 87B1 (right, low flow), conditions C3 (the text calls it "Figure 4"); transient calorimeter curves are uncorrected, since only end points were corrected (Appendix A); copper temperature is the mean of the two surface thermocouples, whose readings were almost equal. [ACM-06 p.35 · Fig. 3.2 · MEASURED; ACM-06 p.36 · MEASURED]
- The centre heat flux is above the offset sensor's at 9.5 mm (burner radius 12.5 mm), and all sensor and calorimeter net fluxes start very high and fall toward an asymptote (tests 94K1 and 87B1, conditions C3). [ACM-06 p.35 · Fig. 3.2 · MEASURED]
- The author notes one might expect the reverse from flame proximity, but radiation from the product gases depends on volume rather than distance. [ACM-06 p.35 · AUTHOR-INTERPRETATION]
- Anomaly seen in many tests, shown for 87B1 (conditions C3): the two local gauges fall sharply, then gradually, until an abrupt upward jump followed by a smooth curve; the offset gauge's jump is at ~46 s (read from Fig. 3.2, ± 5 s). [ACM-06 p.35 · Fig. 3.2 · MEASURED · ~fig, single-test]
- The author attributes it to early condensation of product water on the relatively cool gauge, the small void between sensor and copper top being a likely site; the water blocks conduction into the gauge, the flame then evaporates it, lowering the reading further until the gauge dries, and the dry gauge then suddenly senses the true flame heat flux. [ACM-06 p.35 · AUTHOR-INTERPRETATION]
- The condensation effect was also demonstrated in the authors' laboratory at 1 g. [ACM-06 p.35 · MEASURED]
- After the water effects, readings decay smoothly and slowly; at the high flow rate (94K1) the curve seems headed for an asymptote but turns periodic before self-extinction, while at the low rate (87B1) the descent looks asymptotic; the smooth-curve values vary inversely with steady mass flux, e.g. 15 kW/m2 at 1.78 g/m2s and about 7 kW/m2 at 6.95 g/m2s, a typical trend (conditions C3). [ACM-06 p.35–36 · MEASURED]
- Copper temperature read from Fig. 3.2 (conditions C3): 94K1 ~27 °C before ignition and ~52 °C at its maximum near ~36 s (± 5 °C, ± 2.5 s); 87B1 ~27 °C before ignition and ~119 °C at its maximum near ~179 s, just before fuel shutdown (± 10 °C, ± 5 s). [ACM-06 p.35 · Fig. 3.2 · MEASURED · ~fig]

### Oxygen, pressure and fuel dilution at constant mass flux (round 1)
| Set | Platform and gravity | Burner and fuel | Flow | Not reported in the pages read | Citation |
|---|---|---|---|---|---|
| C4 | ISS, quiescent microgravity (round 1) | 25 mm BRE burner; ethylene or ethylene-nitrogen | quiescent; ṁ'' about 2.5 g/m2s (2.45–2.55) | ambient diluent; ambient temperature | [ACM-06 p.29–31 · MEASURED · nominal, ctx; ACM-06 p.36 · MEASURED · nominal; ACM-06 p.37 · Fig. 3.3 · MEASURED · nominal; ACM-06 p.38 · Fig. 3.4 · MEASURED · nominal] |

| Test (tests-table key) | ṁ'' (g/m2s) | X_O2 | X_f | p (bar) | Behaviour and frame times as labelled (conditions C4) | Citation |
|---|---|---|---|---|---|---|
| 39B3 (BRE:19039B3) | 2.55 | 0.4 | 1 | 1 | frames 0 s (ignition), 3, 11, 14, 20, 30, 60, 150, 180 s (FT) | [ACM-06 p.37 · Fig. 3.3a · MEASURED · nominal, single-test] |
| 51A1 (BRE:19051A1) | 2.55 | 0.34 | 1 | 1 | apparently steady periodic behaviour: periodic extinctions go on for nearly 1 min before fuel shutdown; frames 0 s (ignition), 3, 12, 20, 40, 90, 124 s (1st osc.), 129, 150, 150, 178, 178, 181, 182, 182 s (FT) | [ACM-06 p.36 · MEASURED · single-test; ACM-06 p.37 · Fig. 3.3b · MEASURED · nominal, single-test] |
| 39D1 (BRE:19039D1) | 2.54 | 0.265 | 1 | 1 | frames 0 s (ignition), 3, 6, 10, 15, 30, 31 s (1st osc.), 35, 36, 37, 38, 38, 39, 40, 41, 41, 41 s (SE) | [ACM-06 p.38 · Fig. 3.4a · MEASURED · nominal, single-test] |
| 66G1 (BRE:19066G1) | 2.45 | 0.34 | 0.5 | 0.56 | frames 0 s (ignition), 4, 60, 120, 182 s (FT) | [ACM-06 p.38 · Fig. 3.4b · MEASURED · nominal, single-test] |

- Table 3.1 with Figs. 3.3a, 3.3b and 3.4a shows nominal ambient oxygen falling from 0.4 to 0.265 with the other parameters held (tests 39B3, 51A1, 39D1; ṁ'' 2.55, 2.55, 2.54 g/m2s; X_f = 1; 1 bar; conditions C4). [ACM-06 p.36 · MEASURED; ACM-06 p.37 · Fig. 3.3 · MEASURED · nominal; ACM-06 p.38 · Fig. 3.4a · MEASURED · nominal]
- At the Fig. 3.3b conditions but 0.56 bar (X_O2 0.34, X_f = 1, ṁ'' about 2.55 g/m2s; no test ID printed), no periodic behaviour was observed. [ACM-06 p.36 · MEASURED; ACM-06 p.37 · Fig. 3.3b · MEASURED · nominal]
- The author suggests a pressure effect, the flames being more stable at the lower pressure. [ACM-06 p.36 · AUTHOR-INTERPRETATION]
- Figs. 3.3b and "6b" (as printed) show the fuel mole fraction effect at nominal X_O2 0.34, ethylene mole fraction falling from 1 to 0.5 (Fig. 3.3b is 51A1 at X_f = 1, 1 bar; conditions C4). [ACM-06 p.36 · MEASURED; ACM-06 p.37 · Fig. 3.3b · MEASURED · nominal]
- The author reads the sequences as showing that higher oxygen, lower pressure and lower heat of combustion give more stable flames that can reach steady state or last longer (round 1, ṁ'' about 2.5 g/m2s); higher ambient oxygen and lower pressure give, respectively, higher flame temperature and higher radiative heat loss, while nitrogen dilution makes flames smaller and so lowers radiative loss at the same mixture mass flux; this was still under investigation. [ACM-06 p.36–37 · AUTHOR-INTERPRETATION]

### Steadiness of the round 1 end points (unsteady theory)
| Set | Platform and gravity | Burner and fuel | Groups plotted (X_f, X_O2, p in bar) | Not reported in the pages read | Citation |
|---|---|---|---|---|---|
| C5 | ISS, quiescent microgravity; all Table 3.1 end points (round 1) | 25 mm BRE burner; ethylene-nitrogen, heat of combustion Δh_c = X_f × 47.2 kJ/g | FT and SE: (1, 0.34, 0.56), (1, 0.265, 0.7), (0.5, 0.4, 1), (0.5, 0.34, 0.56), (0.5, 0.265, 0.7); FT only: (1, 0.4, 1), (1, 0.34, 1); SE only: (1, 0.21, 1), (0.5, 0.21, 1); Figs. 3.5 and 3.6 use the same marker legend | ambient diluent; ambient temperature | [ACM-06 p.29–31 · MEASURED · nominal, ctx; ACM-06 p.40–41 · Fig. 3.5 · MEASURED] |
- End points that did not self-extinguish during the test are checked theoretically to justify treating them as steady or nearly steady. [ACM-06 p.38 · AUTHOR-INTERPRETATION]
- Analytic unsteady theory has previously been a good predictor of the tests (ref [49]). [ACM-06 p.38–39 · CITED]
- The analytic solution gives the mixture fraction Z from classical diffusion-flame theory with unity Lewis number for the steady problem, plus a transient term that ref [49] shows can be added accurately. [ACM-06 p.39 · MODELED]
- Eq. 3.1: Z = {[1 − exp((2λ/π) tan⁻¹(ξ_f) − λ)] / [1 − exp(−λ)]} · erfc(ξ_f / (2√τ)), ξ_f being the dimensionless flame position set by the stoichiometric mixture fraction (also the dimensionless flame height); the erfc factor carries the transient and tends to unity as burn time grows; τ = D_∞ t / R² (Eq. 3.2); D_∞ = k / (ρ c_p) (Eq. 3.3); λ = ṁ'' / (4k / (π c_p R)) (Eq. 3.4); unity Lewis number for the steady problem; units not printed with the equations; fitted range not stated. [ACM-06 p.39 · Eq. 3.1 · MODELED]
- Evaluated from end-point data, erfc = 1 means steady; using constant nitrogen properties at 1400 K (D_∞ = 2.7×10⁻⁴ m2/s), Fig. 3.5 shows the end points that did not self-extinguish at nearly unity, while the self-extinguished ones range from 0.2 to 0.9, rising monotonically with burn time (conditions C5). [ACM-06 p.39–40 · Fig. 3.5 · MODELED]
- Flame-height steadiness (erfc) read from Fig. 3.5 (conditions C5; ± 0.05, burn time ± 25 s): lowest ~0.19 (SE, X_f 1, X_O2 0.21, 1 bar, ~12 s); highest SE points ~0.92 (X_f 1, X_O2 0.265, 0.7 bar, ~133 and ~160 s); lowest FT ~0.87 (X_f 1, X_O2 0.4, 1 bar, ~118 s); FT markers stacked at ~180 s span ~0.91 to ~0.97; longest burn ~0.93 (FT, X_f 0.5, X_O2 0.4, 1 bar, ~300 s). [ACM-06 p.40 · Fig. 3.5 · MODELED · ~fig]
- Comparing Figs. 3.5 and 3.6, the flame grows more slowly than the heat flux changes (conditions C5); the Chapter 3 summary adds that theory built on published work confirms these long flames are nearly steady, surface heat flux approaching its steady value faster than flame size. [ACM-06 p.39 · MODELED; ACM-06 p.53–54 · MODELED]
- Theory (ref [49]) shows that effects near the surface approach steady conditions faster than those farther away, the transient toward steady being relatively fast for heat flux and slower for flame growth. [ACM-06 p.39 · CITED; ACM-06 p.59 · CITED]
- Heat-flux steadiness uses the unsteady convective heat flux at the burner centre (ref [49]): q̇''_s(r = 0) = −(k/R) [(T_s − T_∞) − Δh_c Y_ox / (S c_p)] A_∈=0 (Eq. 3.5), whose unsteady part is A_∈=0 = 1/√(πτ) + (2λ/π) [exp(−λ) / (1 − exp(−λ))] (Eq. 3.6); the steadiness factor X_q,st, the ratio of steady to unsteady values, is (2λ/π) [exp(−λ) / (1 − exp(−λ))] divided by A_∈=0 (Eq. 3.7, dimensionless); subscript ox as printed; units not printed; fitted range not stated. [ACM-06 p.40 · Eq. 3.5 · MODELED; ACM-06 p.40–41 · Eq. 3.7 · MODELED]
- With nitrogen properties at 850 K (k = 0.055 W/mK, c_p = 1.126 J/gK), Fig. 3.6 shows heat flux at 80 % or more of its steady value even for the self-extinguished end points (conditions C5). [ACM-06 p.41 · Fig. 3.6 · MODELED]
- The constant-property solution needs judgement in choosing properties; near-wall and near-flame temperatures were used to relate data and theory. [ACM-06 p.41 · AUTHOR-INTERPRETATION]
- The author suggests that self-extinguished heat flux values could flag materials that move toward steady burning but die out as the flame grows; the analysis then looks mainly at the "steady" end points. [ACM-06 p.41 · AUTHOR-INTERPRETATION]
- A commercial equation solver matched computed flame height (from Eq. 3.1) and surface heat flux (Eq. 3.5) to the measured values, giving the "best" constant properties for each case. [ACM-06 p.42 · MODELED]
- Heat-flux steadiness X_q,st read from Fig. 3.6 (conditions C5; ± 0.01, burn time ± 25 s): lowest ~0.806 (SE, X_f 1, X_O2 0.265, 0.7 bar, ~14 s); highest ~0.973 (SE, X_f 0.5, X_O2 0.4, 1 bar, ~92 s); lowest FT ~0.922 (X_f 0.5, X_O2 0.265, 0.7 bar, ~120 s); longest burn ~0.967 (FT, X_f 0.5, X_O2 0.4, 1 bar, ~300 s). [ACM-06 p.41 · Fig. 3.6 · MODELED · ~fig]

### Steady heat flux to the burner (round 1 FT end points)
| Set | Platform and gravity | Burner and fuel | Groups plotted (X_f, X_O2, p in bar) | Measured quantities | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C6 | ISS, quiescent microgravity; "quasi-steady" FT end points of Table 3.1 (round 1) | 25 mm BRE burner; ethylene-nitrogen, Δh_c = X_f × 47.2 kJ/g | (1, 0.4, 1), (1, 0.34, 1), (1, 0.34, 0.56), (1, 0.265, 0.7), (0.5, 0.4, 1), (0.5, 0.34, 0.56), (0.5, 0.265, 0.7); fuel mixture mass flux 0–7 g/m2s axis | local net heat flux at centre (r = 0 mm) and offset (r = 9.5 mm), average from the corrected calorimeter | ambient diluent; ambient temperature | [ACM-06 p.29–31 · MEASURED · nominal, ctx; ACM-06 p.42 · Fig. 3.7 · MEASURED] |
- Calorimeter values are corrected to remove heating of the exposed non-flow copper edge (Appendix A), for all steady end points, using the radiative fraction predicted by the correlation (cited as Fig. 3.7b on p.144), so that all steady data could be used and not only tests with working radiometers. [ACM-06 p.42 · MEASURED; ACM-06 p.144 · MODELED · ctx]
- Fig. 3.7 holds only corrected data, fewer than all collected since radiation information was missing for some tests; the correction cut the original values by up to a factor of 3 in a few cases, and the corrected trend now agrees with the local data, which the author takes as support for the correction (conditions C6). [ACM-06 p.43 · MEASURED]
- Trends are examined against mass flux, ambient oxygen and pressure, and fuel concentration in the fuel stream, the last standing for heat of combustion. [ACM-06 p.43 · AUTHOR-INTERPRETATION]
- Local heat flux results (conditions C6): the centre flux is about 50 % above the offset flux at r = 9.5 mm; both fall as mass flux rises; they rise nearly in direct proportion to oxygen concentration (no steady data at 21 % oxygen); they rise as heat of combustion falls, nearly inversely. [ACM-06 p.42–43 · Fig. 3.7 · MEASURED]
- The author links the fall with mass flux to the flame sitting farther from the surface, and the heat-of-combustion effect to flame height. [ACM-06 p.43 · AUTHOR-INTERPRETATION]
- Average (corrected calorimeter) heat flux follows the local trends: it falls with mass flux, rises with X_O2 and falls with fuel mole fraction, and can be 20 to 70 % above the local centre flux (conditions C6). [ACM-06 p.42–43 · Fig. 3.7 · MEASURED]
- At nominal X_O2 0.34, pure fuel and fixed mass flux 2.55 g/m2s (0.56 and 1 bar), local heat flux rises very slightly and average heat flux falls very slightly with pressure; the author calls both changes insignificant and inconclusive. [ACM-06 p.43 · MEASURED; ACM-06 p.42 · Fig. 3.7 · MEASURED]

| Average heat flux read from Fig. 3.7 (conditions C6; FT tests) | ṁ'' (g/m2s, ± 0.5) | Heat flux (kW/m2, ± 1) | Citation |
|---|---|---|---|
| X_f 1, X_O2 0.4, 1 bar | ~2.55 | ~9.1 | [ACM-06 p.42 · Fig. 3.7 · MEASURED · ~fig] |
| X_f 1, X_O2 0.4, 1 bar | ~3.84 | ~7.4 | [ACM-06 p.42 · Fig. 3.7 · MEASURED · ~fig] |
| X_f 1, X_O2 0.34, 0.56 bar | ~2.55 | ~7.1 | [ACM-06 p.42 · Fig. 3.7 · MEASURED · ~fig] |
| X_f 0.5, X_O2 0.34, 0.56 bar (highest mass flux of the series) | ~4.96 | ~6.5 | [ACM-06 p.42 · Fig. 3.7 · MEASURED · ~fig] |
| X_f 0.5, X_O2 0.4, 1 bar (highest mass flux plotted) | ~6.03 | ~5.5 | [ACM-06 p.42 · Fig. 3.7 · MEASURED · ~fig] |

### Flame radiant fraction (round 1 end points)
| Set | Platform and gravity | Burner and fuel | Groups plotted (X_f, X_O2, p in bar) | End point used | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C7 | ISS, quiescent microgravity; Table 3.1 end points with usable radiometer data (round 1) | 25 mm BRE burner; ethylene-nitrogen, Δh_c = X_f × 47.2 kJ/g | FT: (1, 0.34, 0.56), (1, 0.265, 0.7), (0.5, 0.4, 1), (0.5, 0.34, 0.56), (0.5, 0.265, 0.7); SE: (1, 0.265, 0.7), (1, 0.21, 1), (0.5, 0.265, 0.7), (0.5, 0.21, 1) | radiometers +60 and offset (geometry in Fig. 2.2); data just before fuel termination, or for self-extinguished flames at the peak of the oscillation before extinction | ambient diluent; ambient temperature | [ACM-06 p.30 · MEASURED · nominal, ctx; ACM-06 p.43–44 · MEASURED; ACM-06 p.45–46 · Fig. 3.8 · MEASURED; ACM-06 p.54 · MEASURED] |
- Radiometer saturation limited their use, so not every test has radiometer results in Table 3.1. [ACM-06 p.43 · MEASURED]
- Method: the radiant energy rate comes from each radiometer's normal flux q̇''_r taken relative to the flame centroid at half the flame height, assuming an optically thin flame sheet acting as a point source of uniform intensity, justified because the radiometer is far away compared with the flame size; the reading combines flame radiation q̇''_f,r and burner-surface re-radiation q̇''_s,r, and the latter is subtracted. [ACM-06 p.43–44 · MODELED]
- Equations: Q̇_f,r = 4π d_f² q̇''_f,r (Eq. 3.8); q̇''_f,r = q̇''_r − q̇''_s,r (Eq. 3.9); q̇''_s,r = ε_s σ F_s−r A_s (T_s⁴ − T_∞⁴) cosθ_f / cosθ_r (Eq. 3.10); view factor F_r→s = (X/2) [(1 + X² + Y²) / √((1 + X² + Y²)² − 4Y²) − 1] (Eq. 3.11, refs [72,73]) with X = h/b and Y = a/b, a the burner radius, h the vertical and b the horizontal distance to the radiometer (Eq. 3.12); X_r = Q̇_f,r / (ṁ'' Δh_c π R²) = 4π d_f² (q̇''_r − q̇''_s,r) / (ṁ'' Δh_c π R²) (Eq. 3.13); fitted range not stated. [ACM-06 p.44 · Eq. 3.8 · MODELED]
- Every one of these flames is blue (Figs. 3.1, 3.3, 3.4), which is common for microgravity burning with little or no soot (conditions C7). [ACM-06 p.45 · MEASURED]
- The author infers that the radiation comes from the gases above and below the blue flame. [ACM-06 p.45 · AUTHOR-INTERPRETATION]
- In Fig. 3.8a (radiant fraction against mass flux), fuel mole fraction, i.e. heat of combustion, dominates over X_O2 and pressure: radiant fraction is nearly proportional to heat of combustion, pure fuel giving nearly twice the value of the diluted mixture (conditions C7). [ACM-06 p.45–46 · Fig. 3.8a · MEASURED]
- "Steady" flames appear unable to exceed a radiant fraction of about 60 % (Fig. 3.8), and the Chapter 3 summary states all steady-flame radiation fractions stayed below 0.6 (conditions C7). [ACM-06 p.45–46 · Fig. 3.8 · MEASURED; ACM-06 p.54 · MEASURED]
- Microgravity flame extinction has been linked to radiation loss and the resulting fall in flame temperature, a relation not examined at this point. [ACM-06 p.45 · AUTHOR-INTERPRETATION]
- Since flame height also rises directly with heat of combustion, the author suggests radiant fraction may relate more directly to flame height, and, flame height and radius being similar, that height may stand for flame volume and the radiation lost by the aggregate flame gases. [ACM-06 p.45 · AUTHOR-INTERPRETATION]
- Correlation for the "steady" (FT) data, Fig. 3.8b: X_r = 0.25 ln(y_f) − 0.18 with y_f the flame height in mm, R² = 0.84 (conditions C7); the dotted fit line spans flame heights ~6 to ~31 mm and X_r ~0.28 to ~0.67 (read from the figure, ± 10 mm, ± 0.05); fitted range not stated in the text. [ACM-06 p.45–46 · Fig. 3.8b · MODELED; ACM-06 p.46 · Fig. 3.8b · MODELED · ~fig; ACM-06 p.54 · MEASURED]
- The figure also shows data just before extinction, which roughly follow the correlation, but the author applies it only to "steady" end-point flames, not to self-extinguished ones. [ACM-06 p.45 · AUTHOR-INTERPRETATION]
- Just before self-extinction at low X_O2 (21 and 26.5 %), the radiant fraction ranges from about 0.5 to 0.8 (conditions C7). [ACM-06 p.45–46 · Fig. 3.8 · MEASURED]
- Although these loss fractions are relatively high, no critical value for extinction appears, per the author. [ACM-06 p.45 · AUTHOR-INTERPRETATION]
- Self-extinguished end points read from Fig. 3.8a (conditions C7; ± 0.05, ṁ'' ± 0.5 g/m2s): X_f 1, X_O2 0.265, 0.7 bar: ~0.76 at ~1.79 g/m2s and ~0.62 at ~2.15 g/m2s; X_f 1, X_O2 0.21, 1 bar: from ~0.48 (at ~1.43 and ~3.07 g/m2s) to ~0.59 (at ~1.16 g/m2s); at ~4.46 g/m2s, ~0.66 (X_f 0.5, X_O2 0.21, 1 bar) and ~0.62 (X_f 0.5, X_O2 0.265, 0.7 bar). [ACM-06 p.46 · Fig. 3.8a · MEASURED · ~fig]

### Steady flame shape (round 1 FT end points)
| Set | Platform and gravity | Burner and fuel | Groups plotted (X_f, X_O2, p in bar) | Not reported in the pages read | Citation |
|---|---|---|---|---|---|
| C8 | ISS, quiescent microgravity; FT end points (round 1) | 25 mm BRE burner; ethylene-nitrogen, Δh_c = X_f × 47.2 kJ/g | (1, 0.4, 1), (1, 0.34, 1), (1, 0.34, 0.56), (1, 0.265, 0.7), (0.5, 0.4, 1), (0.5, 0.34, 0.56), (0.5, 0.265, 0.7); Fig. 3.9 flame height 0–45 mm, Fig. 3.10 base radius 0–25 mm, both against mass flux 0–7 g/m2s; Fig. 3.11 base radius against flame length 0–60 mm | ambient diluent; ambient temperature | [ACM-06 p.29–31 · MEASURED · nominal, ctx; ACM-06 p.47–48 · Fig. 3.9 · MEASURED] |
- The flame shape nearly follows the half-oblate-ellipse theory shown by Markan et al. (ref [49]). [ACM-06 p.46 · CITED]
- Height and radius both grow with time (Figs. 3.9, 3.10); the radius pulls in at the burner edge, departing from the theoretical ellipse, and the flame may stand off from or reach a short way below the burner face; height is measured vertically from the burner centre and radius along the burner face (round 1, 25 mm burner, quiescent microgravity). [ACM-06 p.46 · MEASURED; ACM-06 p.29–31 · MEASURED · ctx]
- At "steady" state, flame height and radius group mainly by heat of combustion and grow with mass flux and with heat of combustion, as the radiant fraction does (conditions C8; values in Table 3.1 columns y_f and r_f). [ACM-06 p.46 · MEASURED; ACM-06 p.47 · Fig. 3.9 · MEASURED; ACM-06 p.48 · Fig. 3.10 · MEASURED; ACM-06 p.32 · Table 3.1 · MEASURED · ctx]
- Theory holds that flame radius is a single function of flame length. [ACM-06 p.46 · CITED]
- Though the elliptical theory is not followed perfectly, the "steady" data show this similarity in Fig. 3.11 (conditions C8). [ACM-06 p.46 · MEASURED; ACM-06 p.48 · Fig. 3.11 · MEASURED]

### Steady burning of a 25 mm flat surface: discussion (round 1)
- The measurements yield local and average net heat fluxes to the burner and the flame radiant fractions; the study's primary objective is to find whether, and under which conditions, steady flames can occur in microgravity. [ACM-06 p.49 · MEASURED]
- Primary conclusion: the BRE indicates that steady burning can be reached in microgravity for a 25 mm diameter flat surface; burning lasted more than 3 minutes with apparently steady, blue, hemisphere-like flames in atmospheres above 21 % oxygen (round 1, quiescent microgravity, ethylene-nitrogen fuel). [ACM-06 p.53 · MEASURED; ACM-06 p.30 · MEASURED · ctx]
- The author believes this is the first observation of steady burning of a 25 mm diameter flat surface in a quiescent atmosphere. [ACM-06 p.49 · AUTHOR-INTERPRETATION]
- Lower fuel mole fractions (heats of combustion) and higher ambient oxygen concentrations help flames burn longer (round 1). [ACM-06 p.54 · MEASURED]
- For the burner, steady burning matters because steady-burning theory ties it to condensed-fuel properties; the working hypothesis is that four fuel properties control steady condensed-phase burning. [ACM-06 p.49 · AUTHOR-INTERPRETATION]
- In 1-g experiments, burning rate, flame shape and colour of real condensed fuels were matched by a burner (refs [46,55,56]), the four matched properties being heat of combustion, heat of gasification (L), fuel surface temperature and smoke point. [ACM-06 p.49 · CITED]
- Steady end-point burner surface temperatures ranged from 40 to 120 °C (round 1 FT end points; 25 mm burner, quiescent microgravity; X_O2 0.265 to 0.4, 0.56 to 1 bar, X_f 0.5 and 1). [ACM-06 p.49 · MEASURED; ACM-06 p.42 · Fig. 3.7 · MEASURED · ctx]
- The author notes these temperatures are low for solid fuels such as non-charring plastics, but surface temperature is a weak property in steady-burning theory next to heats of combustion and gasification; the smoke point is likely irrelevant in microgravity because it governs soot radiation and no soot was present in the flames seen; so heat of combustion and heat of gasification of the steady burner flames should be the key solid-fuel properties governing steady burning in microgravity at 25 mm, with important safety implications. [ACM-06 p.49 · AUTHOR-INTERPRETATION]
- The heat of combustion in these tests is 23.6 kJ/g for X_f = 0.5 and 47.2 kJ/g for X_f = 1 (ethylene-based), a range representative of many plastics. [ACM-06 p.49 · MEASURED · nominal]

### Heat of gasification from the round 1 data
| Set | Platform and gravity | Burner and fuel | Groups plotted (X_f, X_O2, p in bar) | Not reported in the pages read | Citation |
|---|---|---|---|---|---|
| C9 | ISS, quiescent microgravity; round 1 end points, FT and SE | 25 mm BRE burner; ethylene-nitrogen, Δh_c = X_f × 47.2 kJ/g | same legend as Fig. 3.5: FT and SE (1, 0.34, 0.56), (1, 0.265, 0.7), (0.5, 0.4, 1), (0.5, 0.34, 0.56), (0.5, 0.265, 0.7); FT only (1, 0.4, 1), (1, 0.34, 1); SE only (1, 0.21, 1), (0.5, 0.21, 1); log-log axes L 0.1 to 10+ kJ/g against ṁ''_f 1 to ~30 g/m2s; Fig. 3.12 from the corrected calorimeter, Fig. 3.13 from the mean of the two gauges | ambient diluent; ambient temperature | [ACM-06 p.30 · MEASURED · nominal, ctx; ACM-06 p.52–53 · Fig. 3.12 · MEASURED] |
- Ideally, the calorimeter net heat flux is what gives the heat of gasification L. [ACM-06 p.49 · AUTHOR-INTERPRETATION]
- Lacking a clean calorimeter average because of edge heating, the average net heat flux to the burner is estimated two ways: the corrected calorimeter value, and the arithmetic mean of the two local net heat fluxes. [ACM-06 p.50 · MEASURED]
- Steady-burning theory (Eq. 3.14): L = (q̄''_convection + q̄''_f,r − q̄''_rr) / ṁ'', the bars marking burner-average convective flux, flame radiative flux back to the surface, and surface re-radiation; L in kJ/g in Figs. 3.12–3.13; fitted range not stated. [ACM-06 p.50 · Eq. 3.14 · MODELED; ACM-06 p.52 · Fig. 3.12 · MODELED; ACM-06 p.53 · Fig. 3.13 · MODELED]
- Both estimates give a decreasing, roughly inverse, asymptote-like curve of L against mass flux, the data clustering surprisingly about a nearly single trend; L is up to 20 % higher for the lower heat of combustion, 23.6 kJ/g (X_f = 0.5 against X_f = 1 at the same mass flux) (conditions C9). [ACM-06 p.50 · MEASURED; ACM-06 p.52 · Fig. 3.12 · MEASURED; ACM-06 p.53 · Fig. 3.13 · MEASURED]
- In microgravity, flames of lower heat of combustion sat closer to the burner surface, giving higher surface heat flux and correspondingly larger heats of gasification, a trend not seen in the authors' 1-g experiments (round 1 against 1-g BRE). [ACM-06 p.54 · MEASURED]
- Figs. 3.12 and 3.13 also include L derived from the self-extinguished end points; the sentence on how they compare with the steady trend is garbled as printed ("self-extinguished not data follow the same trend"), so it does not say clearly whether they follow it (conditions C9). [ACM-06 p.50 · MEASURED; ACM-06 p.52 · Fig. 3.12 · MEASURED; ACM-06 p.53 · Fig. 3.13 · MEASURED]

| Fit (L in kJ/g, ṁ''_f in g/m2s) | Equation | Extent of the drawn line (read from the figure, tolerance factor ~1.05 to ~1.4) | Citation |
|---|---|---|---|
| Microgravity, corrected calorimeter (Fig. 3.12; conditions C9) | L = 10.04 ṁ''^-1.34, R² = 0.88 | ~1.05 to ~17 g/m2s | [ACM-06 p.52 · Fig. 3.12 · MODELED; ACM-06 p.52 · Fig. 3.12 · MODELED · ~fig] |
| Microgravity, mean of the two gauges (Fig. 3.13; conditions C9) | L = 6.81 ṁ''^-1.49, R² = 0.93 | ~1 to ~22 g/m2s (from the left frame edge) | [ACM-06 p.53 · Fig. 3.13 · MODELED; ACM-06 p.53 · Fig. 3.13 · MODELED · ~fig] |
| "Normal Gravity" line in both figures: Auth's 1-g BRE results for propane-nitrogen mixtures at 25 mm diameter (refs [55,56]) | L = 82.9 ṁ''^-1.52 | ~5 g/m2s to the right frame edge at ~30 g/m2s in both figures | [ACM-06 p.50–51 · CITED; ACM-06 p.52 · Fig. 3.12 · CITED; ACM-06 p.52 · Fig. 3.12 · MODELED · ~fig; ACM-06 p.53 · Fig. 3.13 · MODELED · ~fig] |

- In 1 g, the propane-nitrogen results behave oppositely, L falling with heat of combustion at the same mass flux (refs [55,56]); they too mostly cluster about one trend except at very low heat of combustion, and lie far to the right of and below the microgravity data, e.g. (L, ṁ'') of about (2 kJ/g, 30 g/m2s) and (0.5, 10). [ACM-06 p.50 · CITED]
- The author suggests the reversal could come from soot radiation being significant in 1-g flames. [ACM-06 p.50 · AUTHOR-INTERPRETATION]
- The authors' earlier 5-s drop-facility work suggested similar trends of L against mass flux, but with an apparent vertical asymptote near 3 g/m2s rather than the 1 g/m2s seen on the ISS. [ACM-06 p.50 · MEASURED]
- The author judges the minutes-long ISS data more accurate than 5-s data, and notes theory shows the ISS heat flux data are nearly steady even at self-extinction. [ACM-06 p.50 · AUTHOR-INTERPRETATION]

| Point read from Figs. 3.12–3.13 (conditions C9; tolerance factor ~1.05 to ~1.4) | ṁ'' (g/m2s) | L (kJ/g) | Citation |
|---|---|---|---|
| Fig. 3.12 (corrected calorimeter), highest point: FT, X_f 1, X_O2 0.265, 0.7 bar | ~1.03 | ~12 | [ACM-06 p.52 · Fig. 3.12 · MEASURED · ~fig] |
| Fig. 3.12, lowest point: SE, X_f 0.5, X_O2 0.265, 0.7 bar (highest mass flux plotted); SE, X_f 0.5, X_O2 0.4, 1 bar at the same mass flux | ~12 | ~0.35; ~0.45 | [ACM-06 p.52 · Fig. 3.12 · MEASURED · ~fig] |
| Fig. 3.12, the two highest-mass-flux steady points: FT, X_f 0.5, X_O2 0.4, 1 bar | ~5.4; ~7.6 | ~2.0; ~1.3 | [ACM-06 p.52 · Fig. 3.12 · MEASURED · ~fig] |
| Fig. 3.13 (mean of two gauges), highest point: FT, X_f 1, X_O2 0.34, 0.56 bar | ~1.19 | ~6.3 | [ACM-06 p.53 · Fig. 3.13 · MEASURED · ~fig] |
| Fig. 3.13, lowest point: SE, X_f 0.5 (X_O2 0.265, 0.7 bar and X_O2 0.4, 1 bar overlapping) | ~12 | ~0.19 | [ACM-06 p.53 · Fig. 3.13 · MEASURED · ~fig] |
| Fig. 3.13, the two highest-mass-flux steady points: FT, X_f 0.5, X_O2 0.4, 1 bar | ~5.4; ~7.6 | ~1.1; ~0.58 | [ACM-06 p.53 · Fig. 3.13 · MEASURED · ~fig] |

- Typical melting plastics have heats of gasification of about 2 to 3 kJ/g, and charring plastics effective heats of gasification above 4 kJ/g. [ACM-06 p.50 · CITED]
- Literature values for materials whose heats of combustion fall in the BRE range (refs [67,74]); the text calls the list Table 3.1, while the table printed on p.52 is Table 3.2, "Materials close to BRE heats of combustion and corresponding heats of gasification". [ACM-06 p.51 · CITED; ACM-06 p.52 · Table 3.2 · CITED]

| Material (Table 3.2, refs [67,74]) | LHV (kJ/g) | L (kJ/g) | Citation |
|---|---|---|---|
| PE | 43.4 | 1.9 | [ACM-06 p.52 · Table 3.2 · CITED] |
| PP | 44 | 2.0 | [ACM-06 p.52 · Table 3.2 · CITED] |
| Nylon | 28.8 | 1.5, 2.4 | [ACM-06 p.52 · Table 3.2 · CITED] |
| PMMA | 24.2 | 1.6, 2.3 | [ACM-06 p.52 · Table 3.2 · CITED] |
| Phenolic glass fibers | 22.0 | 7.3 | [ACM-06 p.52 · Table 3.2 · CITED] |

- From Figs. 3.12–3.13 with Table 3.2, polyethylene and polypropylene would burn in microgravity at about 3 g/m2s, nylon and PMMA at about 2.5 g/m2s, and the phenolic glass-fibre composite at about 1 g/m2s (25 mm flat surface, quiescent microgravity; BRE round 1 data spanning X_O2 0.21 to 0.4 and 0.56 to 1 bar). [ACM-06 p.51 · MODELED; ACM-06 p.30–31 · MEASURED · nominal, ctx; ACM-06 p.52 · Table 3.2 · CITED]
- The author notes these burning rates are very low and, in 1 g, would lie near the critical conditions for burning (refs [75,76]). [ACM-06 p.51 · AUTHOR-INTERPRETATION]
- In 1 g at 25 mm diameter, Auth found PMMA burning steadily at 19 g/m2s, and PE and PP both at about 6 g/m2s (refs [55,56]). [ACM-06 p.51 · CITED]
- The author doubts the phenolic-glass composite could burn in 1 g without added external heating, whereas Figs. 3.12–3.13 suggest it could burn in microgravity; the implication drawn is that materials can burn more easily in microgravity than in normal gravity, but at much lower burning rates. [ACM-06 p.51 · AUTHOR-INTERPRETATION]

### Fire-safety implications drawn from round 1
- The author notes that Earth fires become large and sustained through heating from their surroundings, and that solids are generally hard to ignite on Earth because air holds only 21 % oxygen. [ACM-06 p.51 · AUTHOR-INTERPRETATION]
- In microgravity as well, 21 % oxygen did not favour "steady" burning (round 1, 25 mm flat burner, quiescent, 1 bar). [ACM-06 p.51 · MEASURED; ACM-06 p.30–31 · MEASURED · nominal, ctx]
- Open questions named by the author: whether microgravity fires can grow and be reinforced by heating their surroundings as on Earth, what controls a microgravity fire as it grows, and whether flame radiation will extinguish it; these must be answered before microgravity fire safety is understood. [ACM-06 p.51 · AUTHOR-INTERPRETATION]
- A key fire-safety finding, per the author: solids with heats of combustion of about 23.6 to 47.2 kJ/g and heats of gasification of about 1 to 10 kJ/g can burn, steadily, in microgravity (25 mm diameter flat surface, quiescent, BRE emulation, oxygen above 21 %), and many commercial materials have such properties. [ACM-06 p.51 · AUTHOR-INTERPRETATION; ACM-06 p.54 · AUTHOR-INTERPRETATION; ACM-06 p.30 · MEASURED · ctx]
- NASA's alternative flammability Test 2, the cone calorimeter, can measure these properties (refs [77,78]); the author suggests NASA may wish to give Test 2 more emphasis as this understanding matures. [ACM-06 p.51 · AUTHOR-INTERPRETATION]
- Future work is to extend the radiation-fraction relation to other parameters and use it with published theoretical models to predict steady outcomes in general, toward a fuller answer on fire growth potential in microgravity. [ACM-06 p.54 · AUTHOR-INTERPRETATION]

### Analytic steady-burning model against the steady ISS flames (Chapter 4)
| Set | Platform and gravity | Burner and fuel | Oxygen | Pressure | Flow and enclosure | Groups plotted in Figs. 4.1–4.2 (Δh_c in kJ/g, X_O2, p in bar), FT points | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|---|---|
| C10 | ISS (Table 3.1, "Summary of the ISS tests"); 29 steady flames | 25 mm BRE burner emulating a flat condensed-fuel surface; ethylene-nitrogen, Δh_c 23.6 and 47.2 kJ/g (LHV) | 21 to 40 % | 0.56 to 1 bar | quiescent chamber, nominally 100 L (p.30) | (47.2, 0.4, 1), (47.2, 0.34, 1), (47.2, 0.34, 0.56), (47.2, 0.265, 0.7), (23.6, 0.4, 1), (23.6, 0.34, 0.56), (23.6, 0.265, 0.7) | ambient temperature | [ACM-06 p.30 · MEASURED · nominal; ACM-06 p.32 · Table 3.1 · MEASURED · nominal, ctx; ACM-06 p.55 · MEASURED · nominal; ACM-06 p.60 · Fig. 4.1 · MEASURED; ACM-06 p.66 · MEASURED · nominal] |
- The measured steady flames are compared with analytic models predicting flame radiation fraction, convective and radiative heat fluxes, flame shape and heat of gasification for steady burning. [ACM-06 p.55 · MODELED]
- In the theory, steady burning is decided by the flame temperature lying above a critical value of 1100 K. [ACM-06 p.55 · AUTHOR-INTERPRETATION]
- The author reports good agreement between experiment and the predicted steady results, finds that low pressure appears to give more stable flames, and states that the results bear on how material fire safety in microgravity should be determined. [ACM-06 p.55 · AUTHOR-INTERPRETATION]
- Further computations explore ambient pressure and oxygen for heats of combustion 23.6 and 47.2 kJ/g, diameters up to 100 mm and vaporisation temperatures of 80 and 350 °C; over the conditions analysed, heats of gasification of about 1 to 5 kJ/g give steady burning over about 1 to 6 g/m2s (oxygen and pressure ranges of these computations not stated in that sentence). [ACM-06 p.55 · MODELED]

#### Model basis
- Markan et al. (ref [49]) give the complete solution for unsteady, purely diffusive burning of an oblate ellipsoidal surface with uniform surface mass flux; its formulas are used throughout, modified so the heat of combustion is reduced by the flame radiation loss fraction X_r. [ACM-06 p.55 · CITED]
- Representing flame radiation by a reduced heat of combustion essentially assumes "a transparent flame", per Jiang et al. (ref [79]). [ACM-06 p.55 · CITED]
- Mixture fraction from thin-flame theory with Schwab-Zeldovich variables (Eq. 4.1): Z = [c_p (T − T_∞) + Δh_c (Y_O − Y_O,∞)/S] / [c_p (T_s − T_∞) − Δh_c Y_O,∞/S], with Y_O the oxygen mass fraction, Δh_c the heat of combustion per mass of the prescribed fuel-diluent stream, and S the mass of oxygen consumed per unit mass of that stream; fitted range not stated. [ACM-06 p.55 · Eq. 4.1 · MODELED]
- Assumptions: Lewis number Le ≡ k/(ρ c_p 𝒟) = 1, the diffusivity 𝒟 replaced by the thermal diffusivity k/(ρ c_p); constant properties, chosen by temperature judgement, since convective heat flux depends on properties near the surface and flame shape on properties near the flame. [ACM-06 p.56 · MODELED]
- The original work defines a convective Peclet number on the total mass flow over the whole ellipsoidal surface (top and bottom), Pe_c = Ṁ / (4π c ρ 𝒟) (Eq. 4.2); fitted range not stated. [ACM-06 p.56 · Eq. 4.2 · CITED]
- For the burner, Pe_c = Ṁ/(4π R ρ 𝒟) = 2 ṁ'' π R² / (4π R k/c_p) = ṁ'' c_p R / (2k) (Eq. 4.3), and it is replaced by the dimensionless mass flux from one side of the flattened ellipsoid, λ = ṁ'' / (4k / (π c_p R)) (Eq. 4.4); in steady burning λ = ln(1 + B) (Eq. 4.5), with effective B number B = [Y_O,∞ (1 − X_r) Δh_c/S − c_p (T_s − T_∞)] / L_m (Eq. 4.6) and effective heat of gasification L_m = L − (q̇''_f,r + q̇''_e − q̇''_rr)/ṁ'' (Eq. 4.7, q̇''_e as printed); fitted range not stated. [ACM-06 p.56 · Eq. 4.3 · MODELED]
- Here λ is a prescribed constant, whereas in steady-burning theory the equivalent burning eigenvalue follows from the solid fuel properties and the B number; steady-burning solutions are usually written in fuel properties (heat of combustion, heat of gasification, vaporisation temperature) and ambient oxygen, pressure and temperature, while for the burner the solution is written in λ over L, the two forms coinciding at steady state by Eq. (5) (as printed), because L is not known beforehand in BRE tests. [ACM-06 p.56–57 · AUTHOR-INTERPRETATION]
- In the BRE, as for an evaporating liquid or solid burning steadily, the heat of gasification (a material property) is L = q̇''_net / ṁ'' with q̇''_net measured (Eq. 4.8). [ACM-06 p.57 · Eq. 4.8 · MEASURED]
- Net heat flux (Eq. 4.9): q̇''_net = q̇''_f,c + q̇''_f,r − q̇''_rr + q̇''_ext,r (flame convective, flame incident radiative, surface radiative loss, incident external radiative), and the theory splits it into a radiative and a convective (pure diffusion) component. [ACM-06 p.57 · Eq. 4.9 · MODELED]
- No external radiative heat flux was present in the experiments, though the theory could include it. [ACM-06 p.57 · MEASURED · nominal]
- External radiation is well known to play an important, perhaps essential, role in the development of room fires on Earth. [ACM-06 p.57 · AUTHOR-INTERPRETATION]
- Transient flame position: Z = {[1 − exp((2λ/π) arctan(ξ) − λ)] / [1 − exp(−λ)]} erfc(ξ/(2√τ)) (Eq. 4.10, τ = D_∞ t/R², D_∞ = k/(ρ c_p) the mass diffusivity of ambient air); ellipsoidal coordinate ξ = (1/(√2 R)) [x² + r² − R² + √((x² + r² − R²)² + (2xR)²)]^(1/2), with ξ(x, 0) = x/R on the axis (Eq. 4.11); the infinitely thin flame sheet sits where Z equals its stoichiometric value Z_f = Y_O,∞ / (S Y_Fb + Y_O,∞) (Eq. 4.12); surface fuel mass fraction Y_Fb = 1 − ((1 + α)/α) e^(−λ) with α = S/Y_O,∞ (Eq. 4.13); combining gives the complete transient flame position Z_f = {[1 − exp((2λ/π) arctan(ξ_f) − λ)] / [1 − exp(−λ)]} erfc(ξ_f/(2√τ)) (Eq. 4.14); fitted range not stated. [ACM-06 p.57 · Eq. 4.10 · MODELED; ACM-06 p.58 · Eq. 4.14 · MODELED]
- Diffusion (ρD = k/c_p) and stoichiometry S mainly set the flame position, because the heat released per unit mass of oxygen consumed, Δh_O = Δh_c/S, is generally almost constant (13.76 kJ/g used for ethylene); as a purely diffusive result, flame position is independent of flame radiation. [ACM-06 p.58 · MODELED]
- For steady burning, the measured flame radiative fraction is a strong, primary function of flame height (ref [51]). [ACM-06 p.58 · CITED; ACM-06 p.62 · CITED]
- Flame temperature (Eq. 4.15, terms reordered): c_p (T_f − T_∞) = [Y_Fb (1 − X_r) Δh_c + c_p (T_s − T_∞)] / (1 + α Y_Fb), a function of λ (via Eq. (13), as printed); average steady convective flux (Eq. 4.16): q̄''_c = (4k/(π R c_p)) [λ/(e^λ − 1)] [(1 − X_r) Δh_c Y_O,∞/S − c_p (T_s − T_∞)]; transient local convective flux (Eq. 4.17): q̇''_c(r, t) = (k/R) [(T_s − T_∞) − (1 − X_r) Δh_c Y_O,∞/(S c_p)] [(2λ/π) exp(−λ)/(1 − exp(−λ)) + 1/√(πτ)] / √(1 − (r/R)²); fitted range not stated. [ACM-06 p.59 · Eq. 4.15 · MODELED]
- The average convective heat flux is one of the terms needed to derive L in Eq. (4.8). [ACM-06 p.59 · AUTHOR-INTERPRETATION]
- The solutions are tested against the steady data of ref [51]; completing them for every quantity except flame position needs a way to predict the flame radiative fraction, developed empirically in a later section. [ACM-06 p.59 · MODELED]

#### Steady flame height and base radius
- Axial flame height (Eq. 4.18): x_f/R = tan{(π/2) [1 + ln(α/(α + 1))/λ]}; for a given mass flux, with ρD = k/c_p for nitrogen at 1400 K (Fig. 4.1 inset: k/c_p = 65 g/ms (as printed) for N2 at T_∞ = 1400 K) and S = Δh_c/Δh_O, the steady axial height is computed and compared with measurement (conditions C10); fitted range not stated. [ACM-06 p.59 · Eq. 4.18 · MODELED; ACM-06 p.60 · Fig. 4.1 · MODELED · nominal]
- The 1400 K nitrogen properties were chosen by optimising the results; the author justifies the high value because the flame position lies where flame temperature governs. [ACM-06 p.60 · MODELED]
- Fig. 4.1 shows good prediction accuracy over a wide range of mass flux, oxygen and pressure, holding for fuels of 23.6 and 47.2 kJ/g and for oxygen mole fractions 0.265 to 0.40 (conditions C10). [ACM-06 p.60 · Fig. 4.1 · MODELED]
- At an oxygen mole fraction of 0.21 the flames tended to go out before any steady state was reached (25 mm BRE burner, ethylene-nitrogen, ISS; pressure not stated in that sentence). [ACM-06 p.60 · MEASURED; ACM-06 p.55 · MEASURED · nominal; ACM-06 p.66 · MEASURED · nominal]

| Fig. 4.1 series (conditions C10; ± 2.5 mm) | Measured flame height (mm) | Calculated flame height (mm) | Citation |
|---|---|---|---|
| 47.2 kJ/g, X_O2 0.4, 1 bar (highest calculated point) | ~33.0 | ~37.7 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar (lower point) | ~23.0 | ~23.8 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar (largest measured height, below the 1:1 line) | ~42.1 | ~30.8 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar (lower point) | ~22.4 | ~21.6 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 1 bar | ~24.6 | ~28.2 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (highest) | ~27.3 | ~28.0 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (lowest) | ~10.6 | ~9.6 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (highest) | ~17.8 | ~19.4 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (lowest) | ~12.5 | ~11.7 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (highest) | ~28.3 | ~28.7 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (lowest point of the plot) | ~6.4 | ~5.3 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (below the 1:1 line) | ~9.1 | ~5.6 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (highest) | ~13.1 | ~14.3 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (lowest) | ~10.4 | ~9.0 | [ACM-06 p.60 · Fig. 4.1 · MODELED · ~fig] |

- Only limited theoretical results were examined, and they show the oblate-ellipsoid flame shape is not fully met in the experiments. [ACM-06 p.60 · MODELED]
- Images show flames growing to ellipsoidal and even spherical shapes away from the base, while the measured flame radius at the burner surface (x = 0) is over-predicted (ref [49]; 25 mm BRE, ethylene-nitrogen, ISS steady flames). [ACM-06 p.60–61 · CITED; ACM-06 p.55 · MEASURED · nominal; ACM-06 p.66 · MEASURED · nominal]
- The author concludes the ellipsoidal shape does not hold near the base, possibly because the theoretical problem is symmetric about the long axis while only one side applies for the burner. [ACM-06 p.61 · AUTHOR-INTERPRETATION]
- Base radius (Eq. 4.19): r_f/R = √(1 + (x_f/R)²); the text says the theory clearly under-predicts but that the similarity between dimensionless base radius and flame height is evident (Fig. 4.2); the modified formula r_f/R = √(1 + c (x_f/R)²) with c = 0.35 (Eq. 4.20) gives an improved result and shows the similarity clearly (conditions C10); fitted range not stated. [ACM-06 p.61 · Eq. 4.19 · MODELED]
- Fig. 4.2 is captioned measured vs. predicted flame base radius, c = 1 (left) and c = 0.35 (right), with inset k/c_p = 65 g/ms (as printed) for N2 at T_∞ = 1400 K and the Fig. 4.1 legend (conditions C10). [ACM-06 p.62 · Fig. 4.2 · MODELED]

| Fig. 4.2 series (conditions C10; ± 2.5 mm) | Panel | Measured base radius (mm) | Calculated base radius (mm) | Citation |
|---|---|---|---|---|
| 47.2 kJ/g, X_O2 0.4, 1 bar (highest; on the 40 mm axis limit) | c = 1 | ~23.4 | ~39.7 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar (lower) | c = 1 | ~19.9 | ~27.1 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar (highest) | c = 1 | ~21.3 | ~33.2 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (largest measured) | c = 1 | ~23.1 | ~30.5 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (highest) | c = 1 | ~18.5 | ~23.1 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (highest) | c = 1 | ~20.5 | ~28.2 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (lowest point of the plot) | c = 1 | ~13.1 | ~13.7 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (highest) | c = 1 | ~15.0 | ~19.2 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (lowest measured of the plot) | c = 1 | ~12.5 | ~15.6 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar (highest of the panel) | c = 0.35 | ~23.1 | ~25.7 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar (highest) | c = 0.35 | ~20.9 | ~22.3 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (largest measured, below the 1:1 line) | c = 0.35 | ~22.8 | ~20.8 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (lowest of the panel) | c = 0.35 | ~12.8 | ~12.8 | [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] |

### Radiant fraction model, absorption coefficient and emissivity (Chapter 4)
| Set | Platform and gravity | Burner and fuel | Groups (Δh_c in kJ/g, X_O2, p in bar), steady FT flames | Radiation modelling inputs | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C11 | ISS steady flames (Table 3.1 conditions) | 25 mm BRE burner; ethylene at fuel mole fraction X_f in nitrogen | Figs. 4.3–4.4: (47.2, 0.4, 1), (47.2, 0.34, 1), (47.2, 0.34, 0.56), (47.2, 0.265, 0.7), (23.6, 0.4, 1), (23.6, 0.34, 0.56), (23.6, 0.265, 0.7); Figs. 4.5–4.6 show five of them: (47.2, 0.34, 0.56), (47.2, 0.265, 0.7), (23.6, 0.4, 1), (23.6, 0.34, 0.56), (23.6, 0.265, 0.7) | RADCAL at radiating-gas temperature T_g = 1400 K, surroundings 300 K, no soot, CO2 and H2O partial pressures from Eq. 4.26 | ambient flow on these pages; ambient temperature of the tests | [ACM-06 p.32 · Table 3.1 · MEASURED · nominal, ctx; ACM-06 p.55 · MEASURED · nominal; ACM-06 p.64 · MEASURED · nominal; ACM-06 p.66 · Fig. 4.3 · MODELED · nominal; ACM-06 p.67 · Fig. 4.3 · MODELED; ACM-06 p.68 · Fig. 4.4 · MODELED; ACM-06 p.69 · Fig. 4.5 · MODELED; ACM-06 p.70 · Fig. 4.6 · MODELED] |
- Prompted by the flame-height dependence of the measured radiant fraction, a dimensionless theoretical basis for the radiant fraction is sought; it leads to a more general correlation with more variables than flame height, and a predicted X_r then gives steady flame temperature, flame convective heat flux and modelled radiative heat flux from initial information, an approximate complete steady solution. [ACM-06 p.62 · MODELED]
- Radiation from the soot-free flame is attributed to combustion products at a distributed temperature in a volume around the flame, radiating through an enclosing surface, and represented by a temperature, a gas emissivity and the enveloping area; the dimensionless form rests on homogeneous grey-gas radiation over a representative path height. [ACM-06 p.62–63 · MODELED]
- Equations: X_r = Q̇_r / Q̇_c (Eq. 4.21); Q̇_c = ṁ'' π R² Δh_c (Eqs. 4.22, 4.28); Q̇_r ≈ ε_f σ T_f⁴ A_f (Eq. 4.23, refs [80–82]), ε_f the gas emissivity, T_f a representative flame temperature, A_f the enclosing area; scale approximations path length l = x_f and A_f ≈ x_f² (Eq. 4.24); ε_f = 1 − e^(−κ_f x_f) (Eq. 4.27); hence X_r ≈ σ T_f⁴ (1 − e^(κ_f x_f)) x_f² / (ṁ'' π R² Δh_c) (Eq. 4.29, exponent printed without the minus sign). [ACM-06 p.63 · Eq. 4.21 · MODELED; ACM-06 p.63 · Eq. 4.23 · CITED; ACM-06 p.64 · Eq. 4.27 · MODELED]
- The author calls Eq. 4.23 approximate, standing for the maximum temperature and gas concentrations over the region around the flame, scaled by flame length; an integrated form would carry distributions and stretched geometry, and, hoping for similar distributions, the results may be general for this fuel. [ACM-06 p.63 · AUTHOR-INTERPRETATION]
- Complete-combustion stoichiometry is justified because no soot is observed (ethylene-nitrogen flames on the ISS). [ACM-06 p.64 · MEASURED; ACM-06 p.66 · MEASURED · nominal]
- Reaction (Eq. 4.25): (C2H4 + ((1 − X_C2H4)/X_C2H4) N2) + 3 (O2 + ((1 − X_O)/X_O) N2) → 2 CO2 + 2 H2O + (3 (1 − X_O)/X_O + (1 − X_C2H4)/X_C2H4) N2, X_C2H4 being the ethylene mole fraction of the supply and X_O the ambient oxygen mole fraction; equal partial pressures p_H2O = p_CO2 = {2 / [2 + 2 + 3 ((1 − χ_O2)/X_O2) + (1 − X_C2H4)/X_C2H4]} p (Eq. 4.26; χ in the numerator term as printed); in general the radiating-species partial pressures follow from total pressure, fuel mole fraction of the supply and ambient oxygen; flame radiation is represented by the stoichiometric H2O and CO2 over a path length equal to flame height x_f, possibly extremes but representative scales given the theoretical similarity of these flames. [ACM-06 p.64 · Eq. 4.25 · MODELED]
- Only ethylene is considered, so a fuel effect is implicit, and any radiation from the fuel itself is assumed to be absorbed into the correlation with the BRE ethylene data. [ACM-06 p.64 · AUTHOR-INTERPRETATION]
- Flame temperature, from Eq. 4.15 or (terms reordered) T_f/T_∞ = 1 + [(1 − X_r) Y_F,b Δh_c/(c_p T_∞) + (T_s/T_∞ − 1)] / (1 + α Y_Fb) (Eq. 4.30), depends on X_r, which makes the dimensionless form implicit: X_r = g[(T_f/T_∞)⁴ (x_f/R)² (1 − e^(κ_f x_f)) σ T_∞⁴ / (π ṁ'' Δh_c)], g unknown (Eq. 4.31, exponent printed without the minus sign); a known characteristic temperature with no radiation loss is used instead, T_f,o/T_∞ = 1 + [Y_F,b Δh_c/(c_p T_∞) + (T_s/T_∞ − 1)] / (1 + α Y_F,b) (Eq. 4.32), so that X_r = f(Ω) with Ω = (T_f,o/T_∞)⁴ (x_f/R)² (1 − e^(−κ_f x_f)) σ T_∞⁴ / (ṁ'' Δh_c) (Eq. 4.33, printed without the 1/π of Eq. 4.31); only the emissivity or absorption coefficient then remains to be found, the rest being known or computable (e.g. Eq. 4.18). [ACM-06 p.64–65 · Eq. 4.30 · MODELED; ACM-06 p.65 · Eq. 4.33 · MODELED]
- Substituting the flame temperature would give an implicit theoretical X_r, which the author judges tedious and possibly inaccurate in the end. [ACM-06 p.65 · AUTHOR-INTERPRETATION]
- Hottel's charts (refs [82,83]) are a common way to get CO2 and H2O emissivity, requiring a path length for a given partial pressure and temperature, after which Eq. 4.27 gives the absorption coefficient; deRis (ref [84]) notes that for soot-free flames the absorption coefficient depends on path length and tends to the Planck value in the small limit, and a single relationship of the modified absorption coefficient with path length results, as deRis indicated; Chapter 5 repeats that for sootless flames the absorption coefficient depends on path length and approaches the Planck limit at zero path length (refs [74,83,84]). [ACM-06 p.65–66 · CITED; ACM-06 p.97 · CITED]
- Planck absorption coefficients at 1400 K are about 10 (m-bar)^-1 for CO2 and 2 (m-bar)^-1 for H2O (refs [74,83]), comparable in order of magnitude with the 8.5 (m-bar)^-1 at a path length of 10^-6 m in Fig. 4.3 (conditions C11). [ACM-06 p.65 · CITED; ACM-06 p.66–67 · Fig. 4.3 · MODELED]
- The Eq. 4.27 absorption coefficient can be obtained by multiplying the Planck value by the gas partial pressure, and the aim is a relation in terms of the CO2 and H2O partial pressures; the modified absorption coefficient κ̃ = κ / (p_CO2 + p_H2O) (Eq. 4.34) resembles the Planck mean in form without being identical, and is motivated by the absorption coefficient's dependence on partial pressure. [ACM-06 p.65–66 · AUTHOR-INTERPRETATION; ACM-06 p.66 · Eq. 4.34 · MODELED]
- After encouraging Hottel-chart estimates, RADCAL (refs [58,59]), a narrow-band model often used for these gases, computed the mixture emissivity: the received intensity at distance l from gas at T_g with 300 K blackbody surroundings gives a total emissivity and an effective absorption coefficient defined as in Eq. 4.27; runs for the ISS fuel, pressure and oxygen conditions (conditions C11) gave a general relationship for κ̃ mainly as a function of path length; Fig. 4.3 shows the steady data set with 9 conditions treated this way (its legend lists 7 groups). [ACM-06 p.66–67 · Fig. 4.3 · MODELED]
- The single curve is empirical and holds only for the BRE ethylene data examined, though it can be computed for other fuels, for which single κ̃(l) curves have been shown to hold; several points overlap in Fig. 4.3 and hide the collapse. [ACM-06 p.66–67 · AUTHOR-INTERPRETATION]
- Fits printed on Fig. 4.3 (conditions C11), giving Eqs. 4.35: κ̃ = 7.96 e^(−9.85 x_f) m⁻¹bar⁻¹ for x_f ≤ 0.1 m (dashed, R² = 0.97, drawn from 10^-6 m to about 0.1 m) and κ̃ = 0.94 x_f^(−0.54) m⁻¹bar⁻¹ for x_f > 0.1 m (dotted, R² = 1.00, drawn from about 0.1 to 10 m), x_f the flame height (path length) in m; then κ (m⁻¹) = {4 / [2 + 2 + 3 ((1 − X_O)/X_O) + (1 − X_C2H4)/X_C2H4]} p(bar) κ̃ (Eq. 4.36, numerator printed as 4); fitted range not stated in the text. [ACM-06 p.67 · Fig. 4.3 · MODELED; ACM-06 p.68 · Eq. 4.35 · MODELED]

| Modified absorption coefficient read from Fig. 4.3 (conditions C11; ± 0.5 m⁻¹bar⁻¹, path length ± factor 3.2 where not on a decade) | Path length (m) | κ̃ (m⁻¹bar⁻¹) | Citation |
|---|---|---|---|
| RADCAL point (lower of two; upper black marker ~8.55; text prints 8.5) | 0.000001 | ~8.1 | [ACM-06 p.67 · Fig. 4.3 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (top of the cluster between 0.001 and 0.01 m) | ~0.001 | ~8.4 | [ACM-06 p.67 · Fig. 4.3 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar (bottom of the cluster, below the dashed fit) | ~0.01 | ~6.3 | [ACM-06 p.67 · Fig. 4.3 · MODELED · ~fig] |
| RADCAL point (a filled square just above at ~3.3) | 0.1 | ~3.1 | [ACM-06 p.67 · Fig. 4.3 · MODELED · ~fig] |
| RADCAL point | ~0.3 | ~1.9 | [ACM-06 p.67 · Fig. 4.3 · MODELED · ~fig] |
| RADCAL point | 1 | ~1.05 | [ACM-06 p.67 · Fig. 4.3 · MODELED · ~fig] |
| RADCAL point (largest path length plotted) | 10 | ~0.27 | [ACM-06 p.67 · Fig. 4.3 · MODELED · ~fig] |

- Fig. 4.3 gives an empirical, convenient way to compute the emissivity term of Eq. 4.23, using flame height as the path length; BRE flame heights of about 5 to 50 mm imply κ̃ of about 7.5 to 4.5 (m-bar)^-1 and emissivities of 0.01 to 0.1 (Fig. 4.4, steady data, conditions C11). [ACM-06 p.67–68 · Fig. 4.4 · MODELED]
- Fig. 4.4 holds all the steady data of Fig. 4.3, overlapping, as emissivities computed from the Fig. 4.3 correlation; its caption reads "BRE flames emissivity vs. fuel mixture mass flux" while its x-axis is flame height (mm), y-axis flame emissivity on a log scale 0.01–0.1, inset T_g = 1400 K, legend as Fig. 4.1. [ACM-06 p.67 · AUTHOR-INTERPRETATION; ACM-06 p.68 · Fig. 4.4 · MODELED]
- At high oxygen and pressure the flames survive with emissivities up to 0.09 and flame heights of 40 mm, while at lower oxygen and pressure emissivities are lower, 0.01 to 0.04 (conditions C11). [ACM-06 p.67–68 · Fig. 4.4 · MODELED]

| Flame emissivity read from Fig. 4.4 (conditions C11; height ± 2.5 mm, emissivity ± factor 1.06 to 1.41) | Flame height (mm) | Emissivity | Citation |
|---|---|---|---|
| 47.2 kJ/g, X_O2 0.4, 1 bar (highest of series) | ~33.0 | ~0.086 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar (lower) | ~22.9 | ~0.066 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar (highest of the plot) | ~42.0 | ~0.090 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar (lower) | ~22.3 | ~0.058 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 1 bar | ~24.4 | ~0.060 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (highest of series) | ~27.1 | ~0.037 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (highest of series) | ~28.1 | ~0.034 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (lowest of the plot) | ~8.6 | ~0.0126 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (highest of series) | ~17.6 | ~0.0265 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (lowest of series) | ~12.5 | ~0.0198 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (lowest of series) | ~10.3 | ~0.0156 | [ACM-06 p.68 · Fig. 4.4 · MODELED · ~fig] |

- With every term of Ω (Eq. 33, as printed) now computable, Fig. 4.5 shows the steady flame radiation fraction approximating a single function of Ω; best fit X_r = 0.0633 ln(Ω) + 0.452 (Eq. 4.37; on the figure R² = 0.8723), plotted points spanning Ω about 0.07 to 20 (read from the figure); fitted range not stated in the text (conditions C11). [ACM-06 p.69 · Eq. 4.37 · MODELED; ACM-06 p.69 · Fig. 4.5 · MODELED · ~fig]
- The author holds that this result with Fig. 4.3 now allows a full prediction of steady burning in microgravity. [ACM-06 p.69 · AUTHOR-INTERPRETATION]
- Prediction route: steady theory (ref [49], Eq. 4.18) gives flame height for a burner radius from k/c_p, S and the ambient oxygen mass fraction (nitrogen properties at 1400 K), and Fig. 4.3 with Eq. 4.37 gives the radiation fraction; Fig. 4.6 shows the predicted radiation fraction within 10 % of the measurements (conditions C11). [ACM-06 p.69 · AUTHOR-INTERPRETATION; ACM-06 p.70 · Fig. 4.6 · MODELED]

| Point read from Fig. 4.5 (conditions C11; ± 0.025, Ω ± factor 3.2) | Ω | Measured radiation fraction | Citation |
|---|---|---|---|
| 23.6 kJ/g, X_O2 0.4, 1 bar (largest Ω, right of the fit) | ~20 | ~0.580 | [ACM-06 p.69 · Fig. 4.5 · MEASURED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (highest fraction plotted) | ~10 | ~0.616 | [ACM-06 p.69 · Fig. 4.5 · MEASURED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (smallest Ω, left of the fit) | ~0.072 | ~0.330 | [ACM-06 p.69 · Fig. 4.5 · MEASURED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (highest of series) | ~6.3 | ~0.604 | [ACM-06 p.69 · Fig. 4.5 · MEASURED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (lowest of series) | ~0.71 | ~0.440 | [ACM-06 p.69 · Fig. 4.5 · MEASURED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (highest of series, left of the fit) | ~2.5 | ~0.546 | [ACM-06 p.69 · Fig. 4.5 · MEASURED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (highest of series) | ~0.49 | ~0.426 | [ACM-06 p.69 · Fig. 4.5 · MEASURED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (lowest of series) | ~0.30 | ~0.358 | [ACM-06 p.69 · Fig. 4.5 · MEASURED · ~fig] |

| Point read from Fig. 4.6 (conditions C11; ± 0.05) | Measured radiation fraction | Calculated radiation fraction | Citation |
|---|---|---|---|
| 23.6 kJ/g, X_O2 0.4, 1 bar (highest calculated, above parity) | ~0.577 | ~0.642 | [ACM-06 p.70 · Fig. 4.6 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (largest measured of series) | ~0.616 | ~0.599 | [ACM-06 p.70 · Fig. 4.6 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (lowest of the plot) | ~0.344 | ~0.361 | [ACM-06 p.70 · Fig. 4.6 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (furthest below parity) | ~0.590 | ~0.514 | [ACM-06 p.70 · Fig. 4.6 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (largest measured of series) | ~0.605 | ~0.570 | [ACM-06 p.70 · Fig. 4.6 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (largest measured of series) | ~0.545 | ~0.510 | [ACM-06 p.70 · Fig. 4.6 · MODELED · ~fig] |

### Flame temperature as the extinction criterion, and predicted heat fluxes (Chapter 4)
| Set | Platform and gravity | Burner and fuel | Groups (Δh_c in kJ/g, X_O2, p in bar), steady FT flames | Not reported in the pages read | Citation |
|---|---|---|---|---|---|
| C12 | ISS steady flames (ref [51] data) | 25 mm BRE burner; ethylene-nitrogen | Figs. 4.7–4.11 legends: Δh_c 47.2 and 23.6, X_O2 0.265–0.4, p 0.56–1 bar; groups read: (47.2, 0.4, 1), (47.2, 0.34, 1), (47.2, 0.34, 0.56), (47.2, 0.265, 0.7), (23.6, 0.4, 1), (23.6, 0.34, 0.56), (23.6, 0.265, 0.7) | ambient flow on these pages; ambient temperature of the tests | [ACM-06 p.55 · MEASURED · nominal; ACM-06 p.71–72 · Fig. 4.7 · MODELED; ACM-06 p.73 · Fig. 4.8 · MODELED; ACM-06 p.75 · Fig. 4.9 · MODELED; ACM-06 p.77 · Fig. 4.10 · MODELED; ACM-06 p.78 · Fig. 4.11 · MODELED · ctx] |
- With X_r known, flame temperature (Eq. 4.15) and convective heat flux (Eqs. 4.16, 4.17) can be computed, and a flame radiative heat flux estimate is also needed to complete the theoretical heats of gasification for steady microgravity burning. [ACM-06 p.70 · MODELED]
- The author treats the flame temperature from Eq. 4.15, given X_r, as the key to whether the flame can survive; diffusion-flame extinction is commonly governed by the Damkohler number (diffusion time over chemical reaction time), and more fully by reaction energy release against heat loss by diffusion and radiation, flame temperature being most critical since it governs all of these; flame temperature thus stands in for the Damkohler number and covers both diffusive and radiative losses, as described by Eq. (4.13) (as printed). [ACM-06 p.70–71 · AUTHOR-INTERPRETATION]
- A flame is well known to be unable to survive below a critical temperature (refs [67,75,76,85–91]), examined in refs [75,76] with the same type of burner in normal gravity for several gaseous fuels, predicting extinction from flame temperature. [ACM-06 p.70–71 · CITED]
- For buoyancy-driven 1-g flames the literature accepts a critical temperature of 1600 K (refs [67,75,76]); critical flame temperature depends on local strain rate, 1600 K matching about 10 s⁻¹ and 1100 K about 1 s⁻¹ (refs [85,90,91]); 1600 K is used for purely buoyant 1-g flames and 1100 K is the usual extinction criterion in microgravity (refs [85–91]); Chapter 5 restates the 1-g critical temperature of 1600 K (refs [75,85–88,91,91] as printed). [ACM-06 p.71 · CITED; ACM-06 p.96 · CITED]
- Fig. 4.7 ("Flame temperature as a measure of extinction based on calculated radiant fraction", against fuel mixture mass flux) gives the computed flame temperatures of the ISS steady data with the radiation fraction predicted for every steady point (Fig. 4.6); points with lower heat of combustion have higher flame temperature, and every steady result corresponds theoretically to a flame temperature above 1100 K (conditions C12). [ACM-06 p.71–72 · Fig. 4.7 · MODELED]
- The author explains the higher temperature at lower heat of combustion by the flame radiation fraction varying inversely with heat of combustion, to be examined later in a more suitable display, and calls the result a straightforward predictive tool for whether steady microgravity burning can occur. [ACM-06 p.71 · AUTHOR-INTERPRETATION]

| Computed flame temperature read from Fig. 4.7 (conditions C12; ± 50 K, ṁ'' ± 0.5 g/m2s) | ṁ'' (g/m2s) | T_f (K) | Citation |
|---|---|---|---|
| 23.6 kJ/g, X_O2 0.4, 1 bar (lowest temperature, largest mass flux plotted) | ~6.0 | ~1190 | [ACM-06 p.72 · Fig. 4.7 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar | ~3.8 | ~1372 | [ACM-06 p.72 · Fig. 4.7 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 1 bar | ~2.5 | ~1446 | [ACM-06 p.72 · Fig. 4.7 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (highest temperature plotted) | ~2.2 | ~1711 | [ACM-06 p.72 · Fig. 4.7 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (largest mass flux of series) | ~5.0 | ~1477 | [ACM-06 p.72 · Fig. 4.7 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (highest of series) | ~1.2 | ~1689 | [ACM-06 p.72 · Fig. 4.7 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (lowest of series, overlapping another marker) | ~2.5 | ~1503 | [ACM-06 p.72 · Fig. 4.7 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (lowest of series; series spans about 1.0–1.5 g/m2s) | ~1.2 | ~1441 | [ACM-06 p.72 · Fig. 4.7 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (highest of series) | ~2.3 | ~1475 | [ACM-06 p.72 · Fig. 4.7 · MODELED · ~fig] |

#### Convective heat flux
- With X_r computable from known fuel and atmosphere quantities, the convective and radiative parts of the flame heat flux (printed "hat flux") can be estimated; the convective flux (Eq. 4.38) repeats Eq. 4.16 for continuity: the purely diffusive solution with the heat of combustion cut to the fraction of energy left in the flame, (1 − X_r); fitted range not stated. [ACM-06 p.72 · Eq. 4.38 · MODELED; ACM-06 p.59 · Eq. 4.16 · MODELED]
- It depends mainly on k/c_p, the radiant fraction, the mass flux and the ambient oxygen concentration, and on pressure through X_r; properties are taken for nitrogen at 350 K (Fig. 4.8 inset: k/c_p = 21.5 g/ms for N2 at T = 350 K), chosen by optimisation and judgement and justified because convective flux comes from the temperature gradient at the relatively cold burner wall. [ACM-06 p.73 · Fig. 4.8 · MODELED · nominal]
- Fig. 4.8 ("Calculated convective heat flux compared to the average net flame heat flux based on calculated radiant fraction"; x measured average heat flux, y calculated convective heat flux, both kW/m2) compares the computed convective flux with the measured net flame heat flux of the steady set, the measurement being the arithmetic mean of the two burner-surface points (ref [51]). [ACM-06 p.73 · Fig. 4.8 · MEASURED]
- Most convective predictions are about 50 % below the total measured net heat flux (conditions C12). [ACM-06 p.73 · Fig. 4.8 · MODELED]
- The author attributes the difference to the flame's radiative component. [ACM-06 p.73 · AUTHOR-INTERPRETATION]

| Fig. 4.8 point (conditions C12; x ± 1, y ± 0.5 kW/m2) | Measured average net heat flux (kW/m2) | Calculated convective heat flux (kW/m2) | Citation |
|---|---|---|---|
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (highest and right-most) | ~9.0 | ~4.16 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (highest of series) | ~7.5 | ~3.89 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (lowest of series) | ~3.7 | ~1.89 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar (lowest of the plot) | ~3.5 | ~0.51 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar | ~5.0 | ~1.18 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar | ~4.05 | ~1.14 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar | ~5.0 | ~1.90 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 1 bar | ~4.0 | ~1.79 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (highest of series) | ~5.6 | ~3.25 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (lowest of series) | ~4.6 | ~2.59 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (lowest of series) | ~3.5 | ~0.97 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (highest of series; series about 2.4–3.0 kW/m2 calculated at 5.3–5.7 measured) | ~5.5 | ~2.99 | [ACM-06 p.73 · Fig. 4.8 · MODELED · ~fig] |

#### Radiative heat flux to the burner
- Model consistent with the predicted X_r: half of the radiation leaving the gases around the flame heads toward the burner and half away; although it comes from a gas volume, exchange with the surface is treated by view-factor algebra and reciprocity as if emitted from the flame surface (optically thin flame sheet), giving the average radiative flux on the burner; the view factor F_s→f is close to unity because the flame mostly covers the surface, slightly reduced when the flame stands off a distance δ_f, here taken as small and negligible. [ACM-06 p.74 · MODELED]
- Equations: F_s→f = 1 − arctan(δ_f/r_f)/π (Eq. 4.39); reciprocity F_f→s = F_s→f A_s/A_f (Eq. 4.40); half-ellipsoid flame-sheet area A_f = (2π (r_f^3.2 + 2 (r_f x_f)^1.6) / 3)^(1/1.6) (Eq. 4.41); incident radiative flux over the burner of radius R, q̄''_f,r = (F_f→s Q̇_r/2)/(π R²) = F_f→s X_r ṁ'' Δh_c / 2 (Eq. 4.42). [ACM-06 p.74 · Eq. 4.39 · MODELED]
- Fig. 4.9 ("Calculated flame radiative heat flux compared to the average net flame heat flux based on calculated radiant fraction"; x measured average, y calculated radiative heat flux, kW/m2) compares the computed radiative flux with the mean of the two heat flux sensors. [ACM-06 p.75 · Fig. 4.9 · MEASURED]
- The computed radiative flux to the burner is nearly equal to the measured total heat flux at low flux, but as low as 1/3 of it at higher overall fluxes (conditions C12). [ACM-06 p.75 · Fig. 4.9 · MODELED]

| Fig. 4.9 point (conditions C12; x ± 1, y ± 0.5 kW/m2) | Measured average net heat flux (kW/m2) | Calculated radiative heat flux (kW/m2) | Citation |
|---|---|---|---|
| 23.6 kJ/g, X_O2 0.4, 1 bar (highest of the plot) | ~5.0 | ~5.74 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar | ~3.5 | ~4.68 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar | ~4.0 | ~5.71 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar | ~5.0 | ~5.46 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 1 bar | ~4.0 | ~4.73 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (largest measured of series) | ~7.5 | ~4.32 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (lowest of series) | ~3.7 | ~3.75 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (lowest of the plot) | ~5.2 | ~3.10 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (right-most) | ~9.0 | ~3.52 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (highest of series) | ~5.4 | ~4.57 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (highest of series) | ~5.6 | ~3.66 | [ACM-06 p.75 · Fig. 4.9 · MODELED · ~fig] |

#### Net heat flux to the burner
- Net flame heat flux follows Eq. 4.9 with re-radiation q̇''_rr = ε_s σ (T_s⁴ − T_∞⁴) and ε_s = 1 (Eq. 4.43, ref [61]); it depends mainly on flame height, mass flux and heat of combustion, with a pressure effect through flame emissivity. [ACM-06 p.76 · Eq. 4.43 · MODELED]
- From the directly measured surface temperature, q̇''_rr ranges from 0.14 to 1 kW/m2 over all the data, and measured surface temperatures are generally below 100 °C (25 mm BRE, ethylene-nitrogen, ISS steady flames). [ACM-06 p.76 · MEASURED; ACM-06 p.55 · MEASURED · nominal; ACM-06 p.71 · MEASURED]
- Figs. 4.10 and 4.11 compare the predicted net flux (q̄''_conv + q̄''_f,r − q̇''_rr) with the measured calorimeter net flux (ref [48]) and with the arithmetic mean of the two local sensors (ref [51]) respectively; the calorimeter values exceed the two-point means (Fig. 4.10 inset k/c_p = 21.5 g/ms for N2 at 350 K, parity line drawn). [ACM-06 p.76 · MEASURED; ACM-06 p.77 · Fig. 4.10 · MODELED; ACM-06 p.78 · Fig. 4.11 · MODELED · ctx]
- The calorimeter was meant to capture the true integrated average heat transfer, but its operation was compromised and a theoretical correction had to be applied, so its confidence is lower than that of the point sensors. [ACM-06 p.76 · MEASURED]
- The author has high confidence in the point values while noting that an arithmetic average is assumed. [ACM-06 p.76 · AUTHOR-INTERPRETATION]
- Against the averaged point data (Fig. 4.11), the prediction is within about 20 % for most points (conditions C12; k/c_p = 21.5 g/ms for N2 at 350 K). [ACM-06 p.76 · MODELED; ACM-06 p.78 · Fig. 4.11 · MODELED · ctx]
- The author considers that the essence of the flame radiative and convective components is understood on this basis. [ACM-06 p.76 · AUTHOR-INTERPRETATION]

| Fig. 4.10 point, calorimeter basis (conditions C12; ± 1 kW/m2) | Measured calorimeter average (kW/m2) | Calculated average net heat flux (kW/m2) | Citation |
|---|---|---|---|
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (right-most) | ~14.5 | ~6.09 | [ACM-06 p.77 · Fig. 4.10 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (highest calculated) | ~12.1 | ~6.42 | [ACM-06 p.77 · Fig. 4.10 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (lowest calculated) | ~6.8 | ~3.77 | [ACM-06 p.77 · Fig. 4.10 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.34, 0.56 bar (smallest measured, closest to parity) | ~5.5 | ~4.30 | [ACM-06 p.77 · Fig. 4.10 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (lowest of series; series about 4.4–5.3 calculated at 10–12 measured) | ~10.2 | ~4.43 | [ACM-06 p.77 · Fig. 4.10 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar (smallest measured of series) | ~8.5 | ~5.39 | [ACM-06 p.77 · Fig. 4.10 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar (smallest measured of series) | ~9.9 | ~4.58 | [ACM-06 p.77 · Fig. 4.10 · MODELED · ~fig] |

### Steadiness of the expanded flame set (Chapter 5)
| Set | Platform and gravity | Burner and fuel | Oxygen | Pressure | Flames | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|---|
| C13 | microgravity (BRE), quiescent ambient | flat 25 mm diameter porous gas burner with two embedded heat flux sensors (centre and 9.5 mm offset); ethylene and ethylene-nitrogen, heats of combustion 12 to 47.2 kJ/g (figure legends: 11.8, 15.6, 23.6, 32.1, 35.9, 47.2 kJ/g) | nominal X_O2 0.21, 0.265, 0.34 and 0.40 (the Fig. 5.2 legend also lists 0.25) | 0.56, 0.7 and 1 bar in the figure legends | 103 ignited, 49 fuel-terminated (FT), the rest self-extinguished (SE) | ambient temperature | [ACM-06 p.96 · MEASURED · nominal; ACM-06 p.99–100 · Fig. 5.2 · MEASURED; ACM-06 p.103 · MEASURED · nominal; ACM-06 p.107 · MEASURED · nominal] |
- The data set is much larger than in previous work, per the author. [ACM-06 p.96 · AUTHOR-INTERPRETATION]
- Of the 103 flames ignited, 49 burned for the whole test until the fuel supply was cut, while the rest self-extinguished (conditions C13). [ACM-06 p.96 · MEASURED]
- An analytic solution, based on classical diffusion-flame theory (refs [49,51,52]), is used to compute steadiness, flame-sheet temperatures and sizes. [ACM-06 p.96–97 · MODELED]
- All 49 fuel-terminated flames reached at least 90 % of their asymptotic heights, on average 0.953 of it before fuel termination (standard deviation 0.019; refs [49,51,52]), and the theoretical steady height agrees with transient data extrapolated to 1/t ≈ 0 (conditions C13; specific heat 1.23 kJ/kg K used). [ACM-06 p.96–97 · MODELED]
- Predicted flame height does not depend on radiation, but other quantities such as flame temperature do (ref [52]). [ACM-06 p.97 · MODELED]
- An estimated critical steady flame temperature of 1100 to 1200 K separates sustained from self-extinguished flames: the 49 terminated flames lie above it, indicating steady burning, and the flames below it self-extinguished; extinction cases never become steady because their computed steady temperature is below the critical value (Fig. 5.2; conditions C13). [ACM-06 p.96 · AUTHOR-INTERPRETATION; ACM-06 p.99 · AUTHOR-INTERPRETATION; ACM-06 p.100 · Fig. 5.2 · MODELED]
- Measured flame sizes and radiative loss fractions are reported at the end point of the terminated tests; per-test values (X_r "before oscillations", y_f, r_f, centre and offset heat fluxes, ṁ'', Δh_c, p, X_O2 before and after the test, end condition; dashes where no radiation data exist) are tabulated in Table 6.1. [ACM-06 p.96 · MEASURED; ACM-06 p.110 · Table 6.1 · MEASURED · ctx]
- An empirical correlation of radiative loss fraction with the dimensionless parameter Ω allows prediction for real fuels burning steadily in microgravity. [ACM-06 p.96 · MODELED]
- A flammability diagram (emulated-fuel heat of gasification against burning mass flux) for the steady data compares how real fuels might burn steadily in normal and in microgravity, and heats of gasification and combustion of some real fuels are compared with the burner flames. [ACM-06 p.96 · MEASURED; ACM-06 p.96 · CITED]
- In the author's reading, burning rates (as fuel mass flux) in 1 g would be roughly 3 to 4 times those in microgravity (25 mm flat burner). [ACM-06 p.96 · AUTHOR-INTERPRETATION]

#### Radiative loss fraction correlation (Chapter 5)
- A dimensional analysis of the steady-flame radiation data (ref [52]) yields an empirical correlation of X_r with Ω; because the flames are blue and sootless, Ω depends on the CO2 and H2O partial pressures of complete combustion, flame size and oxygen. [ACM-06 p.97 · MODELED; ACM-06 p.97 · MEASURED]
- The correlation reduces the heat-of-combustion term of the theory for radiative loss when computing flame temperature (Eq. 5.3); in Ω the second term is the flame emissivity, κ being the absorption coefficient of the radiating product gases, the third group is the normalised flame height squared (x_f/R)², and the last is (T_f,o/T_∞)⁴, T_f,o being the flame temperature of Eq. (3) (as printed) without the radiative-loss factor (1 − X_r); using T_f instead would make X_r = f(Ω(X_r)) implicit, so the loss term is removed to make X_r an explicit function of known or computable quantities. [ACM-06 p.97–98 · MODELED]
- RADCAL (refs [58,59]) was run for stoichiometric ethylene combustion, Eq. 5.1: C2H4 + ((1 − X_C2H4)/X_C2H4) N2 + 3 O2 + ((3 − 3X_O2)/X_O2) N2 → 2 CO2 + 2 H2O + ((3 − 3X_O2)/X_O2 + (1 − X_C2H4)/X_C2H4) N2, whose product partial pressures p_H2O = p_CO2 = 2p / (3/X_O2 + 1/X_C2H4) (Eq. 5.2) are the radiating inputs. [ACM-06 p.97 · MODELED; ACM-06 p.99 · Eq. 5.1 · MODELED]
- Emissivity for ethylene is 1 − e^(−κ_f x_f), with κ̃ the normalised absorption coefficient (κ divided by p_H2O + p_CO2; ref [52]); for sootless BRE flames κ̃ depends only on path length, taken as flame height, κ̃ = 7.96 e^(−9.85 x_f) for x_f < 0.1 m (shown in ref [23], as printed); κ = {4 / (4 + 3 ((1 − X_O2)/X_O2) + (1 − X_C2H4)/X_C2H4)} p κ̃; fitted ranges not stated beyond x_f < 0.1 m. [ACM-06 p.97–98 · MODELED]
- X_r from remote radiometry (ref [51]) and Ω are the inputs examined for a correlation (the text points to "Fig. 3"); based on radiation theory, a least-squares power-law fit gives a general predictive tool: Ω = (σ T_∞⁴/(ṁ'' Δh_c)) (1 − e^(−κ_f x_f)) (x_f/R)² (T_f,0/T_∞)⁴ (printed in Fig. 5.1), and X_r = 0.49 Ω^0.12 (R² = 0.87); fitted range not stated in the text, the drawn fit spanning Ω ~0.01 to ~11 (read from the figure, ×/÷ 1.41). [ACM-06 p.98 · MEASURED; ACM-06 p.98–99 · Fig. 5.1 · MODELED; ACM-06 p.99 · Fig. 5.1 · MODELED · ~fig]
- Fig. 5.1 ("Radiative loss fraction empirical correlation resulted from a dimensional analysis of radiometry") plots FT flames only; heats of combustion (kJ/g) by atmosphere: X_O2 0.4 at 1 bar: 35.9, 23.6, 15.6; X_O2 0.34 at 1 bar: 35.9, 15.6; X_O2 0.34 at 0.56 bar: 47.2, 23.6, 15.6, 11.8; X_O2 0.265 at 0.7 bar: 47.2, 23.6, 15.6. [ACM-06 p.99 · Fig. 5.1 · MEASURED]
- Points read from Fig. 5.1 (conditions C13; ×/÷ 1.15 to 1.41): lowest Ω ~0.011 with X_r ~0.28 (11.8 kJ/g, X_O2 0.34, 0.56 bar); highest Ω ~11 with X_r ~0.62 (23.6 kJ/g, X_O2 0.4, 1 bar); highest X_r ~0.65 at Ω ~3.1 (35.9 kJ/g, X_O2 0.4, 1 bar). [ACM-06 p.99 · Fig. 5.1 · MEASURED · ~fig]
- Chapter 4 fits X_r = 0.0633 ln(Ω) + 0.452 (R² = 0.8723) to five steady groups of 23.6 and 47.2 kJ/g fuel, while Chapter 5 fits X_r = 0.49 Ω^0.12 (R² = 0.87) to twelve fuel-terminated groups of 11.8 to 47.2 kJ/g; the two fits come from different data sets of the same burner. [INFERRED from: ACM-06 p.55; ACM-06 p.69; ACM-06 p.96; ACM-06 p.98–99]

#### Flame-sheet temperature and the critical range (Chapter 5)
- Eq. 5.3 gives the steady flame-sheet temperature, with X_r from the Fig. 5.1 correlation and Ω built from the theoretical steady flame height, the estimated end-point oxygen concentration, and the prescribed mass flux and heat of combustion (ref [52]; parameter details in refs [49,52]). [ACM-06 p.99 · MODELED; ACM-06 p.99 · CITED]
- Eq. 5.3 as printed: c_p (T_f − T_∞) = 1/(α Y_Fb + 1 [c_p (T_s − T_∞) + Y_Fb (1 − X_r) Δh_c]); Y_Fb = 1 − e^(−λ) (1 + α)/α (Eq. 5.4); λ = ṁ'' / (4k/(π c_p R)) (Eq. 5.5); α = S/Y_O2,∞ and S = Δh_c/Δh_c,O2; fitted range not stated. [ACM-06 p.100 · Eq. 5.3 · MODELED]
- Fig. 5.2 ("Calculated flame temperature at flame sheet, c_p = 1.24 J/g K") plots calculated flame temperature (K) against fuel mixture mass flux (g/m2s) with a shaded "Critical Temperature range"; heats of combustion (kJ/g) by atmosphere and end condition: X_O2 0.4 at 1 bar: SE and FT 47.2, 32.1, 23.6, 15.6, FT only 35.9; X_O2 0.34 at 1 bar: SE and FT 47.2, FT only 35.9 and 15.6, SE only 32.1 and 23.6; X_O2 0.34 at 0.56 bar: SE and FT 47.2, 23.6, 15.6, 11.8; X_O2 0.265 at 1 bar: SE only 47.2, 23.6; X_O2 0.265 at 0.7 bar: SE and FT 47.2, 23.6, 15.6, SE only 32.1; X_O2 0.25 at 1 bar: SE only 47.2, 32.1, 23.6, 15.6; X_O2 0.21 at 1 bar: SE only 47.2, 23.6, 15.6. [ACM-06 p.100 · Fig. 5.2 · MODELED · nominal]

| Point read from Fig. 5.2 (conditions C13; ṁ'' ± 0.5 g/m2s, T ± 50 K) | End | ṁ'' (g/m2s) | Calculated T_f (K) | Position relative to the shaded 1100–1200 K band | Citation |
|---|---|---|---|---|---|
| 15.6 kJ/g, X_O2 0.34, 1 bar (highest temperature plotted) | FT | ~1.45 | ~1395 | above | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.4, 1 bar (lowest temperature, highest mass flux plotted) | SE | ~12.1 | ~607 | below | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (lowest-mass-flux FT point) | FT | ~1.0 | ~1213 | above | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| 32.1 kJ/g, X_O2 0.4, 1 bar (highest-mass-flux FT point) | FT | ~6.4 | ~1006 | below | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar | FT | ~2.5 | ~1155 | inside | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar | FT | ~3.8 | ~833 | below | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| 23.6 kJ/g, X_O2 0.265, 0.7 bar | FT | ~1.7 | ~1147 | inside | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.34, 0.56 bar | FT | ~1.7 | ~1131 | inside | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| light-green filled circle, shade not matched to a legend entry | FT | ~3.9 | ~1102 | lower edge | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| dark-red filled triangle, partly hidden, shade not matched with certainty (the legend's red filled triangle is FT 35.9 kJ/g, X_O2 0.34, 1 bar) | FT | ~3.9 | ~1000 | below | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.265, 0.7 bar (highest SE point; other points of the series ~1232 and ~1207 K near ~1.6–1.8 g/m2s) | SE | ~1.4 | ~1280 | above | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |
| 15.6 kJ/g, X_O2 0.265, 0.7 bar | SE | ~3.9 | ~1240 | above | [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] |

#### Flame size at the end points (Chapter 5)
- The 49 terminated flames are still treated as steady and their end-point data explored: measured flame height and aspect ratio (height over radius) are compared with computed values, and a flammability diagram (heat of gasification against fuel mixture mass flux) with micro- and normal-gravity data follows. [ACM-06 p.101 · MEASURED]
- Flame height and radius are measured from the burner centre to the edge of the flame sheet at the end of each test point. [ACM-06 p.101 · MEASURED]
- End-point height and radius are computed with Eqs. 5.6 and 5.7, using nitrogen properties at 1400 K as representative of these flames: x_f/R = tan{(π/2) (1 + ln(α/(α + 1))/λ)} (Eq. 5.6) and r_f/R = √(1 + c (x_f/R)²) (Eq. 5.7), where the empirical constant c adjusts the calculated radius to the measured one, a correction needed because the model allows no flame below the burner surface while in the tests the flame could spread down the burner side; fitted range not stated. [ACM-06 p.101–103 · MODELED; ACM-06 p.103 · Eq. 5.6 · MODELED]
- Fig. 5.3 ("Calculated vs. measured, flame heights (top) and flame aspect ratio (bottom)"; top axes 0–40 mm, bottom 0–2, dotted 1:1 line) plots FT flames; heats of combustion (kJ/g) by atmosphere: X_O2 0.4 at 1 bar: 47.2, 35.9, 32.1, 23.6, 15.6; X_O2 0.34 at 1 bar: 47.2, 35.9, 15.6; X_O2 0.34 at 0.56 bar: 47.2, 23.6, 15.6, 11.8; X_O2 0.265 at 0.7 bar: 47.2, 23.6, 15.6. [ACM-06 p.102 · Fig. 5.3 · MEASURED; ACM-06 p.102 · MODELED]
- The author takes the agreement of calculated and measured flame dimensions, aided by the dashed line in Fig. 5.3, as justifying the accuracy of the analytic model (refs [49,52]). [ACM-06 p.102–103 · AUTHOR-INTERPRETATION]

| Point read from Fig. 5.3 (conditions C13; FT flames) | Quantity | Measured | Calculated | Citation |
|---|---|---|---|---|
| 47.2 kJ/g, X_O2 0.4, 1 bar (largest flame, above the 1:1 line) | x_f (mm, ± 5) | ~33 | ~38 | [ACM-06 p.102 · Fig. 5.3 · MODELED · ~fig] |
| 11.8 kJ/g, X_O2 0.34, 0.56 bar (below the 1:1 line) | x_f (mm, ± 5) | ~7.5 | ~4.7 | [ACM-06 p.102 · Fig. 5.3 · MODELED · ~fig] |
| 47.2 kJ/g, X_O2 0.4, 1 bar (highest aspect ratio) | x_f/r_f (± 0.1) | ~1.42 | ~1.5 | [ACM-06 p.102 · Fig. 5.3 · MODELED · ~fig] |
| 11.8 kJ/g, X_O2 0.34, 0.56 bar (farthest below the 1:1 line) | x_f/r_f (± 0.1) | ~0.68 | ~0.33 | [ACM-06 p.102 · Fig. 5.3 · MODELED · ~fig] |
| 35.9 kJ/g, X_O2 0.4, 1 bar (below the 1:1 line) | x_f/r_f (± 0.1) | ~1.09 | ~0.93 | [ACM-06 p.102 · Fig. 5.3 · MODELED · ~fig] |

#### Surface heat flux sensors (Chapter 5)
- Typical transient heat fluxes of one test ending in fuel termination (steady) and one ending in self-extinction are shown and discussed in ref [51]. [ACM-06 p.103 · CITED]
- The centre sensor always read higher, and the centre-to-offset ratio rises with mass flux (25 mm flat porous burner, ethylene-nitrogen, microgravity; conditions C13). [ACM-06 p.103 · MEASURED]
- The author reads the rising ratio as radiation dominating over conduction as the flame grows. [ACM-06 p.103 · AUTHOR-INTERPRETATION]

## Supersessions
<!-- None: this part curates one final document (ACM-06); no preliminary version of it is in the register. -->

## Conflicts
| Quantity | Source A: value · conditions · citation | Source B: value · conditions · citation | Reason for the difference |
|---|---|---|---|
| Lead time for sending the BRE parameter sheet to the NASA operations team | two business days before each test point day [ACM-06 p.24 · MEASURED; ACM-06 p.24 · MEASURED · ctx, nominal] | three business days before each test point day (Appendix D) [ACM-06 p.152 · Table D.1 · MEASURED · ctx; ACM-06 p.152 · MEASURED · nominal] | not stated in the sources |
| Pressure range of the round 1 tests | Table 2.1 design parameters for round 1: p 0.56–1 bar [ACM-06 p.30 · Table 2.1 · MEASURED · nominal] | round 1 summary: pressures of 1 to about 0.4 bar [ACM-06 p.31 · MEASURED · nominal] | not stated in the sources |
| Number of BRE flames in the ISS campaign | 149 successful ignitions, 29 of them steady for 120 s or more [ACM-06 p.29–30 · MEASURED]; 122 ethylene-mixture flames, 49 not self-extinguished before fuel cut-off [ACM-06 p.20 · MEASURED] | 103 flames ignited at nominal X_O2 0.21–0.40, 49 fuel-terminated (Chapter 5) [ACM-06 p.96 · MEASURED] | not stated in the sources |
| Lowest heat of combustion of the fuel mixtures | 15 kJ/g (range 15–47.2 kJ/g) [ACM-06 p.1 · MEASURED · nominal; ACM-06 p.30 · CITED · nominal] | 12 kJ/g (range 12–47.2 kJ/g, Chapter 5) [ACM-06 p.96 · MEASURED · nominal]; Figs. 5.1–5.3 legends include 11.8 kJ/g [ACM-06 p.99 · Fig. 5.1 · MEASURED; ACM-06 p.100 · Fig. 5.2 · MEASURED; ACM-06 p.102 · Fig. 5.3 · MEASURED] | not stated in the sources |
| Direction of the c = 1 flame base-radius prediction error | the measured radius at the burner surface (x = 0) is over-predicted (ref [49]) [ACM-06 p.60–61 · CITED]; Fig. 4.2 (c = 1) reads put calculated above measured, e.g. ~39.7 vs ~23.4 mm [ACM-06 p.62 · Fig. 4.2 · MODELED · ~fig] | "the theory clearly under-predicts" [ACM-06 p.61 · MODELED] | not stated in the sources |
| How the flame radiant fraction varies with heat of combustion | nearly directly related, pure fuel nearly twice the diluted mixture (round 1 end points, Fig. 3.8a) [ACM-06 p.45–46 · Fig. 3.8a · MEASURED] | lower heat of combustion gives higher flame temperature "because the flames radiation fraction varies inversely with the heat of combustion" (Chapter 4 steady set) [ACM-06 p.71 · AUTHOR-INTERPRETATION] | not stated in the sources |
| Critical flame temperature for steady burning in microgravity | a single critical value of 1100 K [ACM-06 p.55 · AUTHOR-INTERPRETATION; ACM-06 p.71 · CITED] | a critical range of 1100 to 1200 K [ACM-06 p.21 · MODELED; ACM-06 p.96 · AUTHOR-INTERPRETATION; ACM-06 p.99–100 · Fig. 5.2 · MODELED] | not stated in the sources |
| Where the fuel-terminated (FT) and self-extinguished (SE) flames sit against the 1100–1200 K critical band (ACM-06 internal) | text: the band separates sustained from self-extinguished flames; the 49 fuel-terminated flames lie above it [ACM-06 p.96 · AUTHOR-INTERPRETATION; ACM-06 p.99 · AUTHOR-INTERPRETATION; ACM-06 p.108 · AUTHOR-INTERPRETATION] | Fig. 5.2 reads: FT points below the band at ~1006 K (~6.4 g/m2s) and ~833 K (~3.8 g/m2s); SE points above it at ~1280 K (~1.4 g/m2s) and ~1240 K (~3.9 g/m2s) [ACM-06 p.100 · Fig. 5.2 · MODELED · ~fig] | not stated in the sources |
| Heat-flux steadiness of the round 1 end points (ACM-06 internal) | all test end points "more than 94 % of steady state in flame heat flux" [ACM-06 p.31 · MODELED] | "even for the unsteady self-extinguished data, the heat flux is 80% or more of its steady value"; Fig. 3.6 reads lowest ~0.806 (SE) and lowest FT ~0.922 [ACM-06 p.41 · MODELED; ACM-06 p.41 · Fig. 3.6 · MODELED · ~fig] | not stated in the sources |

## Open items / gaps
<!-- No gap claims in this part. -->

# FILE: BURNER_EMULATION_2
# BURNER_EMULATION_2 — Burning rate emulation on the ISS: flammability maps, real materials, conclusions, appendices and the PSI-20 record

## Scope
Covers: ACM-06 (Dehghani 2022, burning rate emulation dissertation) from the Chapter 5 flammability diagram on (pages 103–165): heat of gasification against mass flux in microgravity and 1-g with real-material lines (Fig. 5.4), the pressure effect, measurement uncertainty and the Chapter 5 summary; Chapter 6 (Table 6.1 end points, flame steadiness, surface heat flux and heat of gasification, flammability-map method and sub-models, maps at X_O2 0.4, 0.34 and 0.265, real materials of Table 6.2 on the maps, critical flame temperature, critical heat release rate and mass flux, chapter summary); Chapter 7 conclusions (Table 7.1 trends); Appendices A–F (calorimeter edge-heating correction, transient data of single tests, parameter sheet Tables D.1–D.2, methane and 50 mm burner tests, Fig. F.1); and the PSC-01 record PSI-20 (ACME BRE) with its links, people, publications, files and stated impacts.
Not here: ACM-06 pages 1–103 (aim, hardware, round 1 results, Chapter 4 model, first half of Chapter 5): see BURNER_EMULATION_1; the PSI-20 identity and conditions as part of the full catalogue of 24 records: see PSI_CATALOGUE. Real solid samples burned in flow: see BASS_ISS_SOLIDS_1 to BASS_ISS_SOLIDS_4, NEWER_ISS_SOLID_FUEL_1 and NEWER_ISS_SOLID_FUEL_2, LARGE_SCALE_FIRES_1 and LARGE_SCALE_FIRES_2. The NASA Test 1 and Test 2 procedures themselves: see MATERIAL_ACCEPTANCE_1 and MATERIAL_ACCEPTANCE_2. Cabin atmospheres: see CABIN_ATMOSPHERES_1 and CABIN_ATMOSPHERES_2. Earth-versus-space limit comparisons outside the BRE study: see EARTH_VS_LOW_G_LIMITS_1 and EARTH_VS_LOW_G_LIMITS_2.

## Conditions covered
| Source | Campaign / test family | Platform and gravity | Burner and fuel | Oxygen (nominal X_O2) | Pressure | Flow | Ignition and enclosure | Duration | Tests | Citation |
|---|---|---|---|---|---|---|---|---|---|---|
| ACM-06 | ISS BRE tests with ethylene-nitrogen on the 25 mm burner (Chapters 5–6, Table 6.1) | ISS, microgravity; CIR rack under ACME | 25 mm porous flat burner; ethylene and nitrogen-diluted ethylene, Δh_c 10–47.2 kJ/g (LHV; about 12–47.2 kJ/g in Chapter 5) | 0.4, 0.34, 0.265, 0.25, 0.21 | 1, 0.7, 0.56 bar | quiescent ambient | flames ignited in a chamber with a controlled environment | three minutes in most full-duration tests; SE flames at 0.25 and 0.21 out within 90 s | 146 ignited, 46 burned to fuel shut-off (Chapter 6); 103 ignited, 49 fuel-terminated (Chapter 5); 126 rows in Table 6.1 | [ACM-06 p.24 · MEASURED · ctx, nominal; ACM-06 p.107 · MEASURED · nominal; ACM-06 p.110–112 · Table 6.1 · MEASURED; ACM-06 p.138–139 · MEASURED · nominal] |
| ACM-06 (citing ref. [55]) | 1-g BRE data on Fig. 5.4 | normal gravity | 25 mm surface; legend Δh_c 17.5–43.7 kJ/g | 0.21 | 1 bar | not given | not given | not given | not given | [ACM-06 p.104–105 · Fig. 5.4 · CITED] |
| ACM-06 | ISS BRE tests with methane-nitrogen (Appendix E, Table E.1) | ISS, microgravity | 25 mm burner; methane-nitrogen | per test in Table E.1 | per test in Table E.1 | not given | not given | all SE within 45 s | 30 rows | [ACM-06 p.163 · Table E.1 · MEASURED] |
| ACM-06 | ISS BRE tests on the 50 mm burner (Appendix F, Table F.1) | ISS, microgravity | 50 mm burner; ethylene-nitrogen | per test in Table F.1 | per test in Table F.1 | not given | not given | some burned the whole test with oscillations | 24 rows, FTO or SE | [ACM-06 p.164 · Table F.1 · MEASURED] |
| ACM-06 | Parameter-sheet example, test points 21028A1 and 21028B1 (Table D.1) | ISS | 21028A1: fuel not named; 21028B1: 50 mm burner, ethylene-nitrogen, Δh_c 23.60 kJ/g (Table F.1); fuel and nitrogen flows in SLPM (N2 basis) | chamber fill O2 40 % (21028A1) | chamber fill 14.7 psia (21028A1) | constant flow 90 s; flow timeout 160 s | igniter at position 2300, 3.75 V for 3000 ms | estimated burn time 90 s | 2 | [ACM-06 p.24 · MEASURED · ctx; ACM-06 p.152–154 · Table D.1 · MEASURED · nominal; ACM-06 p.164 · Table F.1 · MEASURED] |
| ACM-06 | Flammability-map model (Chapters 6–7) | microgravity, quiescent | BRE emulation; Δh_c swept 0–47.2 kJ/g; k and c_p of N2 at 1400 K; surface 353.15 K, emissivity 1 | 0.4, 0.34, 0.265 (0.15 also computed) | maps drawn per X_O2 only | quiescent | not applicable | steady state | not applicable; T_cr 1100–1400 K | [ACM-06 p.109 · MODELED · ctx; ACM-06 p.123–124 · MODELED · nominal; ACM-06 p.126 · MODELED · nominal; ACM-06 p.135 · MODELED] |
| PSC-01 | PSI-20 ACME BRE record | ISS; CIR, ACME; also normal-gravity and drop-facility work | CH4/N2 and C2H4/N2 on porous circular burners of 25 and 50 mm | O2/N2 at various O2 levels; planned 21 %, 26.5 %, 34 %; O2/CO2 desired | planned 14.7, 10.2, 8.2 psia | quiescent; no air flow | ignition after fuel flow starts | long-duration microgravity; investigation 01-01-2010 to 02-08-2025 | not given | [PSC-01 p.6–8 · AUTHOR-INTERPRETATION · nominal] |
## Findings

### Flammability diagram: heat of gasification against mass flux, microgravity and 1-g (Chapter 5, Fig. 5.4)
| Set | Burner and fuel | Platform and gravity | Oxygen (X_O2), pressure | Flow | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C1 | BRE gas burner, flat porous surface 25 mm in diameter; ethylene and nitrogen-diluted ethylene, legend Δh_c 11.8–47.2 kJ/g | ISS, microgravity, second round of ISS tests | X_O2 0.265, 0.34, 0.4; p 0.56, 0.7, 1 bar (Fig. 5.4 "0-g" legend) | quiescent ambient | ambient temperature | [ACM-06 p.96 · MEASURED · nominal; ACM-06 p.104–105 · Fig. 5.4 · MEASURED; ACM-06 p.107 · MEASURED · nominal] |
| C2 | 1-g data of ref. [55]: surface diameter 25 mm; legend Δh_c 17.5–43.7 kJ/g | normal gravity | X_O2 0.21; p 1 bar (Fig. 5.4 "1-g" legend) | not given | fuel, flow, ignition, enclosure, ambient temperature, duration | [ACM-06 p.104–105 · Fig. 5.4 · CITED] |
- The diagram's heats of gasification come from the measured net heat fluxes: q̇''_net = 0.5 q̇''_ctr + 0.5 q̇''_r=9.5 mm, the arithmetic mean of the burner-centre sensor and the offset sensor at r = 9.5 mm (Eq. 5.8), then ṁ''L = q̇''_net with ṁ'' the mass flux and L the heat of gasification (Eq. 5.9); the 1-g measured heats of gasification were added to the same plot (conditions C1). [ACM-06 p.13–14 · MEASURED · ctx; ACM-06 p.103 · Eq. 5.8 · MEASURED; ACM-06 p.104 · Eq. 5.9 · MEASURED; ACM-06 p.108 · MEASURED]
- In general the net heat flux has four terms (Eq. 5.10): flame convective flux + flame radiative flux incident on the surface − surface radiative loss + incident external radiative flux, the last absent in this analysis; this would allow a theoretical derivation of L (ref. [52]) that the chapter does not show. [ACM-06 p.104 · Eq. 5.10 · MODELED]
- The diagram updates the one in ref. [51] with the second round of ISS tests. [ACM-06 p.104 · MEASURED]
- Fig. 5.4 plots heat of gasification (kJ/g, log axis labelled 0.1, 1, 10) against fuel-mixture mass flux (g/m²s, log axis labelled 1, 10, 100) for a 25 mm surface, with a "µ-g data" line on the left and a "1-g data" line on the right; it shows how fuels of given heats of combustion and gasification would burn on a 25 mm flat disk at ambient X_O2 and p. [ACM-06 p.104–105 · Fig. 5.4 · MEASURED]
- Fig. 5.4 "0-g" legend (filled markers; Δh_c kJ/g, X_O2, p bar): circles 47.2, 35.9, 32.1, 23.6, 15.6 at 0.4, 1 (black, red, yellow, green, blue); triangles 47.2, 35.9, 15.6 at 0.34, 1 (black, red, yellow); triangles 47.2, 23.6, 15.6, 11.8 at 0.34, 0.56 (green, blue, purple, grey); squares 47.2, 23.6, 15.6 at 0.265, 0.7 (black, red, yellow). [ACM-06 p.105 · Fig. 5.4 · MEASURED]
- Fig. 5.4 "1-g" legend (open circles, X_O2 0.21, p 1 bar): Δh_c 43.7 (black), 35 (red), 26.2 (green), 17.5 kJ/g (blue). [ACM-06 p.105 · Fig. 5.4 · CITED]

| Quantity | Set | Value | Citation |
|---|---|---|---|
| Mass-flux range of the steady microgravity data | C1 | 1 to 6.4 g/m²s | [ACM-06 p.104 · MEASURED] |
| Microgravity fit printed on Fig. 5.4 (y = L in kJ/g, x = fuel-mixture mass flux in g/m²s), fitted over 1–6.4 g/m²s | C1 | y = 7.07x^-1.26, R² = 0.81 | [ACM-06 p.104–105 · Fig. 5.4 · MODELED] |
| Mass-flux range of the 1-g trendline | C2 | from 2.1 up to 30.6 g/m²s | [ACM-06 p.104 · CITED] |
| 1-g fit printed on Fig. 5.4 (same axes), fitted over 2.1–30.6 g/m²s | C2 | y = 39.533x^-1.291, R² = 0.9973 | [ACM-06 p.104–105 · Fig. 5.4 · MODELED] |

- In both gravity conditions the heat of gasification falls with burner gas flow rate along a similar-looking trend (conditions C1 and C2). [ACM-06 p.104–105 · MEASURED]
- The author reads this as larger flow giving larger flames whose flame sheet stands farther from the surface, so less convective heat reaches the fuel (also discussed in Fig. 9 and Eqs. 8–10 of ref. [51]). [ACM-06 p.105 · AUTHOR-INTERPRETATION]
- At a constant heat of gasification (a horizontal line on Fig. 5.4) and heat of combustion that could stand for real material properties, the 1-g burning rate is approximately 3 to 4 times the microgravity one (conditions C1 against C2). [ACM-06 p.105 · Fig. 5.4 · AUTHOR-INTERPRETATION]
- The author concludes from Fig. 5.4 that, for the 25 mm flat disk, materials burn about 3 to 4 times faster on the ground than in microgravity. [ACM-06 p.104 · AUTHOR-INTERPRETATION; ACM-06 p.108 · AUTHOR-INTERPRETATION]
- The author explains the gap by buoyancy: on the ground it drives strong radially inward velocities that push the flame close to the surface and give far higher convective heat flux than the pure conduction of microgravity, where natural convection is absent and hot products move by thermal expansion and diffusion; the higher 1-g surface heat flux gives a higher vaporization rate for a given material. [ACM-06 p.105–106 · AUTHOR-INTERPRETATION]
- The microgravity flames are hemispherical, against tall vertical flames in 1-g. [ACM-06 p.106 · MEASURED]
- The author holds that the steady-burning data give the heat of gasification at which a real fuel with matching heats of combustion and gasification would burn steadily, and that many real fuels meet this theoretical steady-burning result while others come close to it. [ACM-06 p.104 · AUTHOR-INTERPRETATION]
- If the small effect of fuel vaporization temperature is neglected, real fuels with given heats of combustion and gasification can be located among the BRE data of Fig. 5.4 (author's stated limitation). [ACM-06 p.104 · AUTHOR-INTERPRETATION]
- The author places liquid-like fuels at heats of gasification of 0.5–1.5 kJ/g and solids above 1.5 kJ/g. [ACM-06 p.104 · AUTHOR-INTERPRETATION]
- The author states that liquid fuels burning in microgravity should be absorbed into an inert matrix. [ACM-06 p.104 · AUTHOR-INTERPRETATION]

- The horizontal black dashed lines carry heats of gasification and combustion of real fuels taken from ref. [68]; the dashed lines ending in red crosses are real materials listed in refs. [55,56]. [ACM-06 p.106 · CITED]
- Where a real-fuel line crosses the microgravity or 1-g trendline at a data point of the same heat of combustion, the two key emulation properties are matched. [ACM-06 p.106 · AUTHOR-INTERPRETATION]
- For PMMA (line from refs. [55,56]) the 1-g burning rate is 18.5 g/m²s, the heat of gasification 1.6 kJ/g and the heat of combustion 24.2 kJ/g; sample size, oxygen and pressure of that 1-g measurement are not stated in the pages read. [ACM-06 p.106 · CITED]
- The green open circle (1-g, 21 % oxygen) and the blue triangle (microgravity, 34 % oxygen) are the emulated flames closest to PMMA burning under those two conditions. [ACM-06 p.106 · MEASURED]

Values read from Fig. 5.4 (L = heat of gasification; read tolerance as a factor, ×/÷; 1-g burning rates at the red crosses, test conditions not stated in the pages read): [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig]

| Material line | Line | Legend Δh_c (kJ/g) | L read (kJ/g) | 1-g burning rate at red cross (g/m²s) | Citation |
|---|---|---|---|---|---|
| Epoxy/glass fiber (69 %) | black | 27.5 | ~13.7 (1.41) | — | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| Phenolic/glass fiber (45 %) | black | 22 | ~7.3 (1.07) | — | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| Wallpaper on rigid PU | black | 18.9 | ~5.5 (1.10) | — | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| Acrylic fiber | black | 27.5 | ~4.6 (1.12) | — | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| Wool | black | 19.5 | ~3.9 (1.15) | — | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| Polyester/glass fiber (30 %) | black | 19.5 | ~2.7 (1.22) | — | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| Epoxy | black | 25 | ~2.3 (1.22) | — | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| PS | red | 35.8 | ~1.8 (1.41) | ~12 (1.41) | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| PMMA | red | 24.2 | — | — | [ACM-06 p.105 · Fig. 5.4 · CITED] |
| Nylon 6 | black | 28.8 | ~1.5 (1.41) | — | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| Methanol | red | 19.8 | ~1.0 (1.41) | ~19 (1.41) | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| Ethanol | red | 26.8 | ~0.77 (1.07) | ~33 (1.15) | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |
| Acetone | red | 30.8 | ~0.58 (1.10) | ~37 (1.15) | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig] |

Individual points read from Fig. 5.4; series named by legend Δh_c (kJ/g), X_O2 and p (bar); read tolerance as a factor (×/÷); microgravity points are conditions C1, 1-g points conditions C2. [ACM-06 p.105 · Fig. 5.4 · MEASURED · ~fig]

| Point | Series (marker) | ṁ'' read (g/m²s) | L read (kJ/g) | Citation |
|---|---|---|---|---|
| Highest-L microgravity point | 0-g 35.9, 0.34, 1 (red filled triangle) | ~1.24 (1.41) | ~7.1 (1.07) | [ACM-06 p.105 · Fig. 5.4 · MEASURED · ~fig, single-test] |
| Lowest-mass-flux microgravity point (text: data from 1 g/m²s) | 0-g 47.2, 0.265, 0.7 (black filled square) | — | ~5.4 (1.10) | [ACM-06 p.104–105 · Fig. 5.4 · MEASURED · ~fig, single-test] |
| Lowest-L, highest-mass-flux microgravity point (text: up to 6.4 g/m²s) | 0-g 23.6, 0.4, 1 (green filled circle) | — | ~0.54 (1.10) | [ACM-06 p.104–105 · Fig. 5.4 · MEASURED · ~fig, single-test] |
| Left end of the 1-g data (text: from 2.1 g/m²s) | 1-g 26.2, 0.21, 1 (green open circle) | — | ~14 (1.41) | [ACM-06 p.104–105 · Fig. 5.4 · CITED · ~fig, single-test] |
| Right end of the 1-g data (text: up to 30.6 g/m²s) | 1-g 17.5, 0.21, 1 (blue open circle) | — | ~0.44 (1.12) | [ACM-06 p.104–105 · Fig. 5.4 · CITED · ~fig, single-test] |
| Microgravity point nearest the PMMA line, taken by the reader as the flame the text names closest to PMMA | 0-g 23.6, 0.34, 0.56 (blue filled triangle) | ~3.4 (1.15) | ~1.57 (1.41) | [ACM-06 p.105 · Fig. 5.4 · MEASURED · ~fig, single-test] |
| 1-g point nearest the PMMA line, taken by the reader as the flame the text names closest to PMMA | 1-g 26.2, 0.21, 1 (green open circle) | ~11.5 (1.41) | ~1.66 (1.41) | [ACM-06 p.105 · Fig. 5.4 · CITED · ~fig, single-test] |
| One of the two points the text places near L = 1.6, ṁ'' = 2.6 | 0-g 47.2, 0.34, 1 (black filled triangle) | ~2.5 (1.22) | ~1.58 (1.41) | [ACM-06 p.105–106 · Fig. 5.4 · MEASURED · ~fig, single-test] |
| The other of those two points | 0-g 47.2, 0.34, 0.56 (green filled triangle) | ~2.5 (1.22) | ~1.46 (1.41) | [ACM-06 p.105–106 · Fig. 5.4 · MEASURED · ~fig, single-test] |

### Ambient pressure, 0.56–1 atm (Chapter 5)
- Model view: higher ambient pressure raises the partial pressures of the combustion products, so the absorption coefficient κ and flame emissivity ϵ rise, radiative loss and flame luminosity grow, and flame temperature drops. [ACM-06 p.106 · MODELED]
- The author draws from this that lower ambient pressure raises the fire hazard in a quiescent microgravity ambient. [ACM-06 p.106 · AUTHOR-INTERPRETATION]
- D, α, 1/ρ, ν and κ scale with 1/p, while ρD does not depend on p. [ACM-06 p.106 · AUTHOR-INTERPRETATION]
- In the experiments (BRE 25 mm flat burner, microgravity, quiescent ambient) the effect of pressure over 0.56 to 1 atm appears negligible, as discussed in refs. [21,23]; example: the two points near L = 1.6 kJ/g and ṁ'' = 2.6 g/m²s share all conditions except p = 0.56 and 1 atm (values read in the table above). [ACM-06 p.106 · MEASURED]
- Ref. [23]'s theoretical analysis found little difference from pressure and showed that lowering p widens the flammable range of ṁ'': the highest flammable ṁ'' rises as p falls. [ACM-06 p.106 · CITED]

### Measurement uncertainty of the microgravity data (Chapter 5)
- Method: uncertainty analysis of the microgravity data points of the flammability diagram; the inputs to Eqs. 5.8–5.9 that carry uncertainty are the measured heat flux and the flow rates; heat-flux sensors by Medtherm, flow meters Teledyne Hastings HFC-302D; manufacturers' raw-measurement uncertainties were propagated to L and ṁ'' with the formulation of refs. [93,94]; the same approach gave the uncertainty of the heat of combustion (varied through the fuel-nitrogen dilution) and of the measured radiative loss fraction X_r; radiative flux by Dexter Research 2M wide-angle radiometers, whose raw uncertainty came from NASA's error analysis. [ACM-06 p.106–107 · MEASURED]
- A representative uncertainty covering 95 % of the errors of all data points is ω% = ω̄% ± 2σ, ω the normalised uncertainty of each measurand, ω̄ its mean and σ its standard deviation (Eq. 5.11). [ACM-06 p.107 · Eq. 5.11 · MEASURED]

| Normalised uncertainty (microgravity BRE data, 25 mm burner) | Range | Mean | Standard deviation | Citation |
|---|---|---|---|---|
| δL/L | 4.5 % to 17.5 % | 5.7 % | 2.9 % | [ACM-06 p.107 · MEASURED] |
| δṁ''/ṁ'' | 1.3 % to 17 % | 3.1 % | 3.6 % | [ACM-06 p.107 · MEASURED] |
| δX_r/X_r | — | 10.11 % ± 9.6 % as printed | — | [ACM-06 p.107 · MEASURED] |
| δΔh_c/Δh_c | — | 3.68 % ± 6.86 % as printed | — | [ACM-06 p.107 · MEASURED] |

### Chapter 5 summary
| Set | Burner and fuel | Platform and gravity | Oxygen, pressure | Flow | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C3 | BRE, 25 mm diameter flat disk; ethylene and nitrogen-diluted ethylene, Δh_c about 12 to 47.2 kJ/g of fuel mixture | microgravity (ISS), steady burning studied | nominal X_O2 0.21, 0.26, 0.34, 0.40 | quiescent ambient | ambient temperature | [ACM-06 p.104 · MEASURED; ACM-06 p.107 · MEASURED · nominal] |
- 103 flames were ignited (conditions C3); 49 burned for the whole test until the fuel was shut off on purpose, and the rest self-extinguished, among them every flame in air (nominal X_O2 0.21). [ACM-06 p.107 · MEASURED]
- A steady critical flame temperature range of 1100 to 1200 K separates the conditions of steady and self-extinguished flames, and the computed flame temperatures of the 49 fuel-terminated flames lie above it (conditions C3). [ACM-06 p.108 · AUTHOR-INTERPRETATION]
- Flame size and radiative loss fraction are reported at the end point of each test. [ACM-06 p.108 · MEASURED]
- A dimensional analysis of the radiation data gave an empirical correlation of X_r with Ω, a dimensionless radiation parameter. [ACM-06 p.108 · MODELED]
- Author's conclusions: the BRE, a gas-fed burner with two embedded heat-flux sensors, is an efficient way to study burning in microgravity; an analytical solution computed the flames' steadiness, temperatures and heights with good accuracy; ambient oxygen above normal air raises material flammability; the theoretical method could predict the burning rate of flat surfaces in microgravity. [ACM-06 p.107–108 · AUTHOR-INTERPRETATION]
- Ambient pressure, not discussed in the chapter, had a negligible effect (refs. [21,23]). [ACM-06 p.107 · CITED]
- The author recommends exploring the effect of burning diameter and external radiation for various real fuels in steady burning under different ambient conditions. [ACM-06 p.108 · AUTHOR-INTERPRETATION]

### Chapter 6 aim: flammability maps from Δh_c and L, set against NASA Test 1
- Symbols (ACM-06 list): heat of gasification L; enthalpy of combustion Δh_c; mass flux ṁ''; ambient pressure p; heat flux q̇''; flame radius at its base r_f; flame height y_f; radiant fraction X_r; mole fraction X; burn time t_b; fuel terminated FT; self-extinguished SE; dimensionless mass flux λ = ṁ''/(4k/(π c_p R_b)); stoichiometric molar air-fuel ratio S; F_s→f, the view factor of the flame sheet seen from the burner surface; F_f→s defined as "AAA" in the list as printed; also ṁ mass flow rate, r radial location on the burner surface, T temperature, ε emissivity, σ Stefan-Boltzmann constant. Subscripts: centre of the burner surface ctr; offset position at r = 9.5 mm off; convective c; radiation r; re-radiation rr; external ext; burner surface s; steady state st; flame sheet or fuel f; fuel mixture mix; oxygen O2; calorimeter (average flux to the burner surface) cal; ambient ∞. [ACM-06 p.13–15 · AUTHOR-INTERPRETATION · ctx]
- Spacecraft material selection currently rests on NASA Test 1, upward flame spread over a real material sample in a controlled 1-g environment. [ACM-06 p.109 · AUTHOR-INTERPRETATION]
- The author states there is no scientific basis for extrapolating that test's results to microgravity, because buoyancy-induced flow in 1-g favours steady flames, a condition that does not hold for microgravity flames. [ACM-06 p.109 · AUTHOR-INTERPRETATION]
- The author holds that the inherent material properties governing flammability should not change with the gravity field, and that this is essential for carrying 1-g results over to microgravity. [ACM-06 p.109 · AUTHOR-INTERPRETATION]
- The author notes that Δh_c and L can be measured effectively in the cone calorimeter, NASA Test 2, which is not currently used to judge flammability hazard in space. [ACM-06 p.109 · AUTHOR-INTERPRETATION]
- The BRE emulates condensed-phase fuels by matching four properties, Δh_c, L, l_s and T_b; the first two are the ones used to analyse BRE results in microgravity (refs. [50–54,60]); for the BRE, T_b, the material burning temperature, is tied to the uncontrolled burner-surface temperature T_s, and the author's theory can include T_b in predictions (ref. [52]). [ACM-06 p.109 · AUTHOR-INTERPRETATION; ACM-06 p.119 · AUTHOR-INTERPRETATION; ACM-06 p.131 · AUTHOR-INTERPRETATION]
- The flames of this study are sootless (no soot was seen at steady state), so the laminar smoke point does not apply to the microgravity results (BRE ethylene-diluent flames, 25 mm burner). [ACM-06 p.109 · MEASURED; ACM-06 p.113 · Fig. 6.1 · MEASURED · ctx; ACM-06 p.131 · MEASURED]
- In 1-g, burner emulations of real fuels were very good when L, Δh_c and l_s were matched, with T_b not matched (refs. [4,10,46,47,55,56]). [ACM-06 p.109 · CITED; ACM-06 p.131 · CITED]
- Method: one flammability map, Δh_c plotted against L, for each nominal ambient X_O2 used (0.4, 0.34, 0.265); the extinction limits are set by a critical flame temperature range of 1100 K to 1200 K, the flammable zone being where the flame temperature exceeds that range; two extinction limits come from theory (refs. [52,60]): radiative extinction and small-flame (convective) extinction. [ACM-06 p.109–110 · MODELED · nominal]

### ISS end-point results (Table 6.1, ethylene-nitrogen flames) and flame steadiness (Fig. 6.1)
| Set | Burner and fuel | Platform and gravity | Oxygen, pressure | Flow | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C4 | 25 mm BRE burner, flat disk; ethylene-nitrogen (ethylene-diluent) mixture | flames ignited aboard the ISS (146 ignitions), microgravity | per test (Table 6.1) or per figure legend | quiescent ambient | ambient temperature | [ACM-06 p.109 · MEASURED · nominal; ACM-06 p.113 · Fig. 6.1 · MEASURED · nominal; ACM-06 p.139 · MEASURED · nominal] |
- Table 6.1 lists, per test, the measured heat fluxes, flame height and radius, radiative loss fraction, oscillation onset time (self-extinguished points) and burn time (all tests) (conditions C4). [ACM-06 p.110 · MEASURED · nominal]
- Table 6.1, "Summary of the endpoint results ordered by XO2 for ethylene-nitrogen flames", has 126 test-ID rows (27 on p.110, 53 on p.111, 46 on p.112) with columns: test ID, X_O2 before test, X_O2 after test, Δh_c (kJ/g), p (bar), ṁ'' (g/m2-s), q̇''_CTR (kW/m2), q̇''_off (kW/m2), y_f (mm), r_f (mm), X_r before oscillations (no unit printed), oscillation time (s), extinction or end time (s), end condition (conditions C4). [ACM-06 p.110–112 · Table 6.1 · MEASURED]
- In Table 6.1 a dash marks missing radiation data, and the end conditions are SE (self-extinguished), FT (fuel terminated) and FTO (fuel terminated with oscillations). [ACM-06 p.110 · Table 6.1 · MEASURED]
- Test IDs follow the parameter-sheet convention "YYGMTxx", 7 characters: YY the last two digits of the year, GMT the GMT day, xx a letter-digit pair (A1, B1, C1 …). [ACM-06 p.155 · Table D.2 · AUTHOR-INTERPRETATION · ctx]

| Table 6.1 row(s) | As printed | Citation |
|---|---|---|
| 20346H5 (BRE:20346H5) | X_O2 before 0.2457, after 0.3874; Δh_c 13.2; p blank; ṁ'' 2.23; other cells blank except the entry "not useful"; no end condition | [ACM-06 p.112 · Table 6.1 · MEASURED · single-test] |
| 20279J3, 20279J4, 20279J5 | Δh_c and ṁ'' blank; p 1.033, 1.032, 1.033; end condition SE | [ACM-06 p.112 · Table 6.1 · MEASURED] |
| 21020B2, 21020C1, 20261G1 (p.111); 20358G5, 20358G3 (p.112) | end condition blank | [ACM-06 p.111–112 · Table 6.1 · MEASURED] |
| 20261G1 (p.111), 21020D3 (p.112) | y_f and r_f blank | [ACM-06 p.111–112 · Table 6.1 · MEASURED] |

- Purpose: the maps rest on the material properties L and Δh_c, and with a constant-mass-flux burner L can only come from steady flames, which can only be among the fuel-terminated tests; their steadiness is estimated with the analytical solution based on classical diffusion-flame theory. [ACM-06 p.113 · MODELED]
- Fig. 6.1 plots l_f/l_f,st against burn time (s); its legend gives Δh_c = X_f (47.2 kJ/g) as printed. [ACM-06 p.113 · Fig. 6.1 · MEASURED]
- The 49 fuel-terminated flames had reached 0.953 of their asymptotic height (95.3 % of the asymptotic value) before the fuel was shut off, standard deviation 0.019 (conditions C4; FT series at X_O2 0.4, 0.34, 0.265 and p 1, 0.56, 0.7 bar per the Fig. 6.1 legend). [ACM-06 p.107–108 · MODELED; ACM-06 p.113 · Fig. 6.1 · MODELED]
- The self-extinguished flames stood at about 0.5 to 0.9 of their computed steady value (conditions C4; SE series at X_O2 0.4 to 0.21 and p 1, 0.56, 0.7 bar per the Fig. 6.1 legend). [ACM-06 p.113 · Fig. 6.1 · MODELED]
- The author takes this to mean the self-extinguished flames were relatively far from steady when they went out. [ACM-06 p.113 · AUTHOR-INTERPRETATION]

Fig. 6.1 legend: end-condition series present for each fuel fraction X_f (conditions C4; "N/A" in the legend = no series of that end condition): [ACM-06 p.113 · Fig. 6.1 · MEASURED]

| X_O2, p (bar) | SE and FT | FT only | SE only | Citation |
|---|---|---|---|---|
| 0.4, 1 | X_f 1, 0.68, 0.5, 0.33 | 0.76 | — | [ACM-06 p.113 · Fig. 6.1 · MEASURED] |
| 0.34, 1 | 1 | 0.76, 0.33 | 0.68, 0.5 | [ACM-06 p.113 · Fig. 6.1 · MEASURED] |
| 0.34, 0.56 | 1, 0.5, 0.33 | 0.25 (SE cell blank, not N/A) | — | [ACM-06 p.113 · Fig. 6.1 · MEASURED] |
| 0.265, 1 | — | — | 1, 0.5 | [ACM-06 p.113 · Fig. 6.1 · MEASURED] |
| 0.265, 0.7 | 1, 0.5, 0.33 | — | 0.68 | [ACM-06 p.113 · Fig. 6.1 · MEASURED] |
| 0.25, 1 | — | — | 1, 0.68, 0.5, 0.33 | [ACM-06 p.113 · Fig. 6.1 · MEASURED] |
| 0.21, 1 | — | — | 1, 0.5, 0.33 | [ACM-06 p.113 · Fig. 6.1 · MEASURED] |

Points read from Fig. 6.1 (conditions C4; read tolerance ±50 s and ±0.05): [ACM-06 p.113 · Fig. 6.1 · MODELED · ~fig]

| Point | Series (X_f, X_O2, p bar; marker) | Burn time read (s) | l_f/l_f,st read | Citation |
|---|---|---|---|---|
| Lowest point plotted | SE 0.5, 0.265, 1 (open red square) | ~28 | ~0.555 | [ACM-06 p.113 · Fig. 6.1 · MODELED · ~fig, single-test] |
| Highest SE point | SE 0.33, 0.25, 1 (open green diamond) | ~50 | ~0.95 | [ACM-06 p.113 · Fig. 6.1 · MODELED · ~fig, single-test] |
| Highest FT point | FT 1, 0.34, 0.56 (filled green triangle) | ~180 | ~0.98 | [ACM-06 p.113 · Fig. 6.1 · MODELED · ~fig, single-test] |
| Lowest FT point at end of burn | FT 0.68, 0.4, 1 (filled orange circle) | ~180 | ~0.91 | [ACM-06 p.113 · Fig. 6.1 · MODELED · ~fig, single-test] |

### Steady-flame surface heat flux and heat of gasification (Figs. 6.2–6.6)
| Set | Burner and fuel | Platform and gravity | Series plotted (Δh_c kJ/g; X_O2; p bar), all FT | Flow | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C5 | 25 mm BRE burner, flat disk; ethylene-diluent mixture; end points of the 49 steady flames | ISS, microgravity | 47.2, 35.9, 32.1, 23.6, 15.6 at 0.4, 1; 47.2, 35.9, 15.6 at 0.34, 1; 47.2, 23.6, 15.6, 11.8 at 0.34, 0.56; 47.2, 23.6, 15.6 at 0.265, 0.7 (legend of Figs. 6.2–6.6) | quiescent ambient | ambient temperature | [ACM-06 p.109 · MEASURED · nominal; ACM-06 p.114 · Fig. 6.2 · MEASURED; ACM-06 p.116 · Fig. 6.3 · MEASURED; ACM-06 p.139 · MEASURED · nominal] |
- Surface heat fluxes at the centre (r = 0) and the offset (r = 9.5 mm) were measured at the end point of the steady flames, corrected for the temperature difference between sensor and burner surface, and plotted against burner mass flux; Fig. 6.2 shows both local net fluxes for all 49 steady flames (solid symbols centre, open symbols offset; heat flux in "kw/m2s" as printed against fuel-mixture mass flux in g/m2s), complementing the same figure in refs. [4,10,30,81,82] (conditions C5). [ACM-06 p.114 · Fig. 6.2 · MEASURED]
- As mass flux increases the flame grows and moves away from the surface, so the surface heat flux decreases, and the centre-to-offset heat-flux ratio increases (conditions C5). [ACM-06 p.114 · Fig. 6.2 · MEASURED]
- The author reads the rising ratio as a sign that surface radiative heat flux dominates as the flames grow. [ACM-06 p.114 · AUTHOR-INTERPRETATION]
- L is the arithmetic mean of the two measured net surface heat fluxes of Fig. 6.2 divided by the fuel-mixture mass flux (conditions C5). [ACM-06 p.115 · MEASURED]
- Equations (no units printed with them, fitted range not stated): L = q̇''_net/ṁ'' (Eq. 6.1); q̇''_net = q̇''_f,c + q̇''_f,r − q̇''_rr + q̇''_ext,r, i.e. flame convective + flame radiative incident on the surface − surface radiative loss + incident external radiation, the last absent in this analysis (Eq. 6.2); average q̇''_c = (4k/(π R c_p)) {λ/(e^λ − 1)} [Δh_c (1 − X_r) Y_O,∞/S − c_p (T_s − T_∞)] with S = Δh_c/Δh_O2 (Eq. 6.3); average q̇''_f,r = F_f→s (Q̇_r/2)/(π R²) = F_f→s X_r ṁ'' Δh_c/2, F_f→s the geometric view factor of the burner surface with respect to the flame sheet (Eq. 6.4); q̇''_rr = ε_s σ (T_s⁴ − T_∞⁴) (Eq. 6.5); k thermal conductivity, R burner-surface radius, c_p gas specific heat, Y mass fraction, ε emissivity, σ Stefan-Boltzmann constant. [ACM-06 p.13–14 · MODELED · ctx; ACM-06 p.115 · Eq. 6.1 · MODELED; ACM-06 p.116 · Eq. 6.3 · MODELED]
- The computation algorithm first given in ref. [52] obtains L by calculating the flux components of Eqs. 6.2–6.5: average convective flux from the analytical solution of refs. [10,46–48,55]; average radiative flux to the surface from the view factor of the fuel source with respect to the flame sheet, which sets the share of total flame radiation reaching the surface; re-radiation from Eq. 6.5 with surface emissivity of unity. [ACM-06 p.115 · MODELED · nominal; ACM-06 p.117 · MODELED · nominal]
- Total radiative loss is measured by remote radiometers, and the radiative loss fraction, correlated with the dimensionless parameter Ω, gives the average radiative flux to the surface (ref. [52]). [ACM-06 p.117 · MEASURED]
- Fig. 6.3 ("Calculated radiative and convective heat flux for steady flames", 25 mm BRE burner, ethylene-diluent mixture) has panels for average q̇''_f,r, q̇''_f,c and q̇'', average steady heat flux (kW/m²) against fuel-mixture mass flux (g/m²s), comparing the calculated radiative and convective trends with the average heat flux (conditions C5). [ACM-06 p.116 · Fig. 6.3 · MODELED · nominal; ACM-06 p.117 · MODELED · nominal]
- Model trend: with rising mass flux the flame gets larger and the share of total radiative heat reaching the surface generally grows (conditions C5). [ACM-06 p.117 · MODELED]
- The author takes this as the reason radiative heat flux comes to dominate at the surface as mass flux increases, and takes the agreement of calculated and measured values in Fig. 6.4 as support for the algorithm's accuracy. [ACM-06 p.117 · AUTHOR-INTERPRETATION]
- Fig. 6.4 plots calculated against measured average heat flux (both kW/m²) for the steady flames, with an unlabelled dotted diagonal from the origin (conditions C5). [ACM-06 p.117 · Fig. 6.4 · MEASURED · nominal]

Points read from Figs. 6.3 and 6.4 (conditions C5; series Δh_c kJ/g, X_O2, p bar; read tolerance ±1 g/m²s and ±0.5 kW/m² on Fig. 6.3, ±1 kW/m² on both axes of Fig. 6.4): [ACM-06 p.116–117 · Fig. 6.3 · MODELED · ~fig]

| Figure, quantity | Point | Series (marker) | Mass flux read (g/m²s) | Value read (kW/m²) | Citation |
|---|---|---|---|---|---|
| Fig. 6.3, average q̇''_f,r | highest | 23.6, 0.4, 1 (green circle) | ~3.0 | ~6.5 | [ACM-06 p.116 · Fig. 6.3 · MODELED · ~fig, single-test] |
| Fig. 6.3, average q̇''_f,r | highest mass flux | 23.6, 0.4, 1 (green circle) | ~6.4 | ~2.65 | [ACM-06 p.116 · Fig. 6.3 · MODELED · ~fig, single-test] |
| Fig. 6.3, average q̇''_f,c | highest | 35.9, 0.34, 1 (red triangle) | ~1.3 | ~3.0 | [ACM-06 p.116 · Fig. 6.3 · MODELED · ~fig, single-test] |
| Fig. 6.3, average q̇''_f,c | lowest | 23.6, 0.4, 1 (green circle) | ~6.4 | ~0.15 | [ACM-06 p.116 · Fig. 6.3 · MODELED · ~fig, single-test] |
| Fig. 6.3, average q̇'' | highest | 23.6, 0.34, 0.56 (blue triangle) | ~1.7 | ~8.6 | [ACM-06 p.116 · Fig. 6.3 · MODELED · ~fig, single-test] |
| Fig. 6.3, average q̇'' | lowest | 23.6, 0.4, 1 (green circle) | ~6.4 | ~2.05 | [ACM-06 p.116 · Fig. 6.3 · MODELED · ~fig, single-test] |
| Fig. 6.4, calculated vs measured | lowest | 23.6, 0.4, 1 (green circle) | — | calculated ~2.1, measured ~3.4 | [ACM-06 p.117 · Fig. 6.4 · MODELED · ~fig, single-test] |
| Fig. 6.4, calculated vs measured | highest | 23.6, 0.34, 0.56 (blue triangle) | — | calculated ~8.6, measured ~9.0 | [ACM-06 p.117 · Fig. 6.4 · MODELED · ~fig, single-test] |
| Fig. 6.4, calculated vs measured | farthest below the diagonal | 11.8, 0.34, 0.56 (grey triangle) | — | calculated ~5.9, measured ~8.1 | [ACM-06 p.117 · Fig. 6.4 · MODELED · ~fig, single-test] |
- Dividing the Fig. 6.3 flux components by mass flux gives their contribution to L (Fig. 6.5, "Contribution of heat flux components to calculated heat of gasification": panels q̇''_f,r/ṁ'', q̇''_f,c/ṁ'' and L, ordinate in kJ/g on a log axis labelled 0.1, 1, 10 on the left panel only, abscissa fuel-mixture mass flux in g/m²s); the computed L is compared with the measured L in Fig. 6.6 to show the accuracy of the algorithm of ref. [52] (conditions C5). [ACM-06 p.118 · Fig. 6.5 · MODELED · nominal]
- The surface heat flux shows a descending trendline for each Δh_c (conditions C5). [ACM-06 p.118 · MEASURED]
- Dividing by mass flux sharply reduces the scatter of radiative heat flux against mass flux, removes the effect of Δh_c and collapses the data into a narrower region (conditions C5). [ACM-06 p.118–119 · Fig. 6.5 · MODELED]
- The author attributes the Fig. 6.3 scatter of radiative flux to the spread of Δh_c among the steady data, and states that X_O2 and X_r (and slightly p) still affect the Fig. 6.5 trends. [ACM-06 p.118–119 · AUTHOR-INTERPRETATION]
- Fig. 6.6 plots calculated against measured L (both kJ/g) for the steady flames of the 25 mm BRE burner with ethylene-diluent mixture, with an unlabelled dotted diagonal from the origin. [ACM-06 p.119 · Fig. 6.6 · MEASURED · nominal]

Points read from Figs. 6.5 and 6.6 (conditions C5; series Δh_c kJ/g, X_O2, p bar; read tolerance on Fig. 6.5 ±2.5 g/m²s and ×/÷1.12 on L, on Fig. 6.6 ±1 kJ/g measured and ±0.5 kJ/g calculated): [ACM-06 p.118 · Fig. 6.5 · MODELED · ~fig; ACM-06 p.119 · Fig. 6.6 · MEASURED · ~fig]

| Figure, quantity | Point | Series (marker) | Read | Citation |
|---|---|---|---|---|
| Fig. 6.5, q̇''_f,r/ṁ'' | highest | 35.9, 0.34, 1 (red triangle) | ~4.5 kJ/g at ~1.2 g/m²s | [ACM-06 p.118 · Fig. 6.5 · MODELED · ~fig, single-test] |
| Fig. 6.5, q̇''_f,r/ṁ'' | lowest | 23.6, 0.4, 1 (green circle) | ~0.42 kJ/g at ~6.4 g/m²s | [ACM-06 p.118 · Fig. 6.5 · MODELED · ~fig, single-test] |
| Fig. 6.6, measured vs calculated L | highest measured L | 35.9, 0.34, 1 (red triangle) | measured ~7.1, calculated ~6.3 kJ/g | [ACM-06 p.119 · Fig. 6.6 · MEASURED · ~fig, single-test] |
| Fig. 6.6, measured vs calculated L | — | 35.9, 0.4, 1 (red circle) | measured ~6.2, calculated ~5.6 kJ/g | [ACM-06 p.119 · Fig. 6.6 · MEASURED · ~fig, single-test] |
| Fig. 6.6, measured vs calculated L | lowest | 23.6, 0.4, 1 (green circle) | measured ~0.5, calculated ~0.3 kJ/g | [ACM-06 p.119 · Fig. 6.6 · MEASURED · ~fig, single-test] |
| Fig. 6.6, measured vs calculated L | farthest below the diagonal | 11.8, 0.34, 0.56 (grey triangle) | measured ~3.0, calculated ~2.1 kJ/g | [ACM-06 p.119 · Fig. 6.6 · MEASURED · ~fig, single-test] |

### Flammability maps: concept and extinction-limit method (Section 6.7)
- Earlier diagrams (ref. [51]) plotted L against fuel-mixture mass flux, read Δh_c from the legend, and emulated a fuel by drawing a horizontal line at its L and matching it to a data point of similar Δh_c at the crossing. [ACM-06 p.119 · AUTHOR-INTERPRETATION · nominal]
- In Chapter 6 both properties are the plot axes, so a real material appears as a point, and emulation holds when a burner flame point and the material point fall reasonably close together. [ACM-06 p.119–120 · AUTHOR-INTERPRETATION · nominal]
- One map is built per nominal ambient X_O2, and the data points fall between two extinction limits; the trends are discussed before real materials are added (Figs. 6.7–6.9). [ACM-06 p.120 · MODELED · nominal]
- Radiative extinction limit, as the author defines it: seen for large flames, where raising the mass flux raises radiative heat loss (or the radiative fraction grows with mass flux) and the flame grows until the chemical reaction stops (ref. [51]); in the middle plots of Figs. 6.9–6.11, moving left means higher mass flux. [ACM-06 p.120 · AUTHOR-INTERPRETATION]
- Map curves: the two red curves are the radiative extinction limit range for critical temperatures of 1100 and 1200 K (ref. [60]; theory in ref. [52]); the two light-blue curves are the small-flame extinction limit range; the pure convective extinction limit is an ideal case of flames so small that their radiative loss is negligible; dashed horizontal lines and dashed or solid coloured lines are theoretical predictions of the flammable range for each Δh_c and of the general trend, using the calculated L of the previous section, with steady flames identified by the same 1100–1200 K critical range as in the previous chapters. [ACM-06 p.120 · MODELED; ACM-06 p.125–126 · MODELED]
- Radiative-limit procedure: Δh_c and Y_O2 are given and varied over the experimental range; T_f in the steady flame-temperature formula (Eq. 6.18) is set to 1100 or 1200 K and the matching L and Δh_c are solved for a given Y_O2; Eqs. 6.6–6.18 are implicit and solved numerically: set Y_O2, sweep Δh_c from 0 to 47.2 kJ/g, and find the steady mass flux giving T_f = T_cr, using the Microsoft Excel Solver to minimise (T_f − T_cr)²; assuming steady state, the iteration gives L at the high-mass-flux (radiative) limit for each X_O2. [ACM-06 p.120 · MODELED · nominal; ACM-06 p.124 · MODELED · nominal]
- System solved: inputs X_O2, p, T_s and Δh_c; thirteen equations (flame height, X_r, T_f, average q̇''_f,c, average q̇''_f,r, q̇''_rr, L …, with T_f = 1100 K or 1200 K) for thirteen unknowns (x_f, r_f, κ, F_f→s, Ω, A_f, X_r, T_f, average q̇''_f,c, average q̇''_f,r, q̇''_rr, ṁ'', L); Eqs. 6.6–6.18 hold enough information to solve the nonlinear algebraic set for the mass fluxes. [ACM-06 p.124 · MODELED · nominal]
- Eq. 6.18: c_p (T_f − T_∞) = [1/(1 + a Y_Fb)] [c_p (T_s − T_∞) − Y_Fb Δh_c (1 − X_r)], with T_∞ ambient temperature, T_s burner-surface temperature, Y_Fb fuel mass fraction at the burner surface and a = Δh_c/Δh_c,o Y_o,∞ as printed (no units printed, fitted range not stated). [ACM-06 p.13–15 · MODELED · ctx; ACM-06 p.124 · Eq. 6.18 · MODELED]
- Small-flame extinction limit: same procedure through Eqs. 6.6–6.17; flames can go out from radiative heat loss and from heat loss to the burner surface, both limits meaning the flame cools to the critical range; the optimiser therefore returns two mass fluxes, the maximum ṁ'' (radiative limit) and the minimum ṁ'' (small-flame limit). [ACM-06 p.125 · MODELED]
- Pure convective extinction limit: a hypothetical ideal case (refs. [67,76]) in which small flames lose no heat by radiation (so send none to the fuel) and conductive loss to the fuel cools them until the reaction stops; found by putting T_cr = 1100 K into the analytic flame-temperature solution and neglecting X_r, q̇''_rr and c_p (T_s − T_∞) (Eqs. 6.19–6.21). [ACM-06 p.125 · MODELED · nominal]
- Equations (no units printed, fitted range not stated): L_m = L + q̇''_rr/ṁ'' (Eq. 6.19); c_p (T_f − T_∞) = [Δh_c − L_m − c_p (T_s − T_∞)]/[1 + Δh_c/(Y_O2 Δh_c,O2)] (Eq. 6.20); Δh_c = [c_p (T_f − T_∞) + L]/[1 − c_p (T_f − T_∞)/(Y_O2 Δh_c,O2)] (Eq. 6.21); Δh_c,O2 = Δh_c/S = 13.76 kJ/g. [ACM-06 p.125 · Eq. 6.19 · MODELED; ACM-06 p.126 · MODELED]
- Model predictions: a critical flame temperature of 1100 K gives a larger flammable zone (the region between the two outer limits) and 1200 K a smaller one; lowering ambient X_O2 shrinks the flammable zone and widens the critical extinction range (the sentence that follows breaks off as printed). [ACM-06 p.125–126 · MODELED]

### Map sub-models: flame size, absorption, radiative fraction and surface fluxes (Eqs. 6.6–6.17)
| Set | Burner and fuel | Platform and gravity | Series (Δh_c kJ/g; X_O2; p bar), all FT | Flow | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C6 | 25 mm BRE burner, flat disk; ethylene-diluent mixture; steady flames at their end points | ISS, microgravity | Fig. 6.7: 47.2 at (0.4, 1), (0.34, 1), (0.34, 0.56), (0.265, 0.7); 23.6 at (0.4, 1), (0.34, 0.56), (0.265, 0.7). Fig. 6.8: 35.9, 23.6, 15.6 at (0.4, 1); 35.9, 15.6 at (0.34, 1); 47.2, 23.6, 15.6, 11.8 at (0.34, 0.56); 47.2, 23.6, 15.6 at (0.265, 0.7) | quiescent ambient | ambient temperature | [ACM-06 p.109 · MEASURED · nominal; ACM-06 p.121 · Fig. 6.7 · MODELED · nominal; ACM-06 p.123 · Fig. 6.8 · MEASURED · nominal; ACM-06 p.139 · MEASURED] |
- Flame height and radius (Eqs. 6.6–6.7): x_f/R = tan{(π/2)(1 + ln(α/(α + 1))/λ)}, with λ = ṁ''/(4k/(π c_p R)) and α = Δh_c/Δh_c,O2 Y_O,∞ as printed, x_f the flame height (x the vertical distance from the burner centre) and R the burner-surface radius; r_f/R = √(1 + c (x_f/R)²), where the correction factor c, set so that the computed flame radius matches the measured one (ref. [34]), is 0.35. [ACM-06 p.13 · MODELED · ctx; ACM-06 p.120 · Eq. 6.6 · MODELED; ACM-06 p.124 · MODELED]
- X_r was taken from the steady data at their end points and correlated with a dimensionless parameter Ω based on radiation theory (Eq. 6.8), with a least-squares power fit of X_r against Ω (conditions C6). [ACM-06 p.120 · MEASURED]
- Ω = (σ T_∞⁴/(ṁ'' Δh_c)) (1 − e^(−κ_f x_f)) (x_f/R)² (T_f,o/T_∞)⁴ (Eq. 6.8; Ω the dimensionless radiation-fraction variable), with κ_f from ref. [52], x_f from Eqs. 6.6–6.7, and T_f,o the computed flame temperature with no radiative loss, c_p (T_f,o − T_∞) = 1/1 + aY_Fb [c_p (T_s − T_∞) − Y_Fb Δh_c] as printed; no units printed, fitted range not stated. [ACM-06 p.14 · MODELED · ctx; ACM-06 p.120–121 · Eq. 6.8 · MODELED]
- Fig. 6.7 gives absorption coefficients normalised by the partial pressures of ethylene combustion products, κ̃ (m⁻¹bar⁻¹), against path length (m) on a log axis from 0.000001 to 10, boxed label T_g = 1400 K, grey circles not in the legend; the path length is the flame height, and the figure yields κ and then the emissivity term in Ω (conditions C6). [ACM-06 p.121 · Fig. 6.7 · MODELED · nominal]
- Fits printed on Fig. 6.7: y = 7.96e^(−9.85x), R² = 0.97 (dashed black, drawn from the left edge to about 0.1 m) and y = 0.94x^(−0.54), R² = 1.00 (dotted blue, about 0.1 m to 10 m), y = κ̃ (m⁻¹bar⁻¹), x = path length (m); as Eq. 6.9 they apply for x_f ≤ 0.1 m and x_f > 0.1 m respectively. [ACM-06 p.121 · Fig. 6.7 · MODELED; ACM-06 p.122 · Eq. 6.9 · MODELED]
- For the BRE data the flame height (path length) runs from about 5 to 50 mm, giving a modified absorption coefficient of about 7.5 to 4.5 (m-bar)⁻¹ respectively and an emissivity of 0.01 to 0.1 (conditions C6). [ACM-06 p.121 · Fig. 6.7 · MODELED]
- Eq. 6.10: κ (m⁻¹) = {4/[2 + 2 + 3((1 − X_O)/X_O) + (1 − X_C2H4)/X_C2H4]} p (bar) κ̃ (m⁻¹bar⁻¹), which carries the summed partial pressures of water vapour and CO2, printed as p_H2O = p_CO2 = {2/2 + 2 + 3(1 − XO2/XO2) + 1 − XC2H4/XC2H4} p (fitted range not stated). [ACM-06 p.122 · Eq. 6.10 · MODELED]
- Eq. 6.11: X_r = 0.49 Ω^0.12, read with Fig. 6.8 (fitted range not stated in the text). [ACM-06 p.122 · Eq. 6.11 · MODELED]
- Fig. 6.8, "Radiative loss fraction empirical correlation resulted from a dimensional analysis of radiometry": fit y = 0.49x^0.12, R² = 0.87, X_r against Ω on a log axis 0.01 to 100, ordinate labels 0.2, 0.4, 0.8 (conditions C6). [ACM-06 p.123 · Fig. 6.8 · MEASURED · nominal]

| Fig. 6.8 point (conditions C6) | Series (marker) | Ω read | X_r read | Citation |
|---|---|---|---|---|
| Lowest-Ω point of the fitted data | 11.8, 0.34, 0.56 (grey triangle) | ~0.011 (×/÷1.41) | ~0.28 (×/÷1.41) | [ACM-06 p.123 · Fig. 6.8 · MEASURED · ~fig, single-test] |
| Highest-Ω point of the fitted data | 23.6, 0.4, 1 (green circle) | ~12 (×/÷1.41) | ~0.62 (×/÷1.41) | [ACM-06 p.123 · Fig. 6.8 · MEASURED · ~fig, single-test] |
| Highest-X_r point | 35.9, 0.4, 1 (red circle) | ~3.2 (×/÷1.15) | ~0.65 (×/÷1.41) | [ACM-06 p.123 · Fig. 6.8 · MEASURED · ~fig, single-test] |

- Surface-flux terms for L: Eqs. 6.12, 6.13, 6.14 and 6.17 repeat Eqs. 6.2, 6.3, 6.4 and 6.5 (net flux, with no external radiation in these experiments; average convective flux from the analytical solution of refs. [49,52]; average flame radiative flux to the surface; surface re-radiation). [ACM-06 p.122–124 · MODELED · nominal]
- Model settings: k and c_p are those of nitrogen at 1400 K; the radiative flux uses the view factor of the burner surface with respect to the flame sheet, F_f→s = F_s→f A_s/A_f (Eq. 6.15, A_s burner-surface area, A_f flame-sheet area), with F_s→f = 1 and A_f from a half-ellipsoid flame, A_f = (2π(r_f^3.2 + 2(r_f x_f)^1.6)/3)^(1/1.6) (Eq. 6.16); re-radiation uses surface emissivity of unity and a representative surface temperature of 353.15 K. [ACM-06 p.13–15 · MODELED · ctx; ACM-06 p.123 · Eq. 6.15 · MODELED · nominal]

### Flammability maps at nominal X_O2 0.4, 0.34 and 0.265 (Figs. 6.9–6.11)
| Set | Burner and fuel | Platform and gravity | Oxygen | Pressure | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C7 | 25 mm burner; ethylene-diluent mixture; steady (solid) and SE (open) points | ISS, microgravity, quiescent ambient | nominal X_O2 0.4 (Fig. 6.9), 0.34 (Fig. 6.10), 0.265 (Fig. 6.11), the three conditions at which steady flames were seen in the experiments | not separated on the maps; shown to have minimal effect on burning (refs. [51,52]) | ambient temperature | [ACM-06 p.109 · MEASURED · nominal; ACM-06 p.126 · MEASURED · nominal; ACM-06 p.128–130 · Fig. 6.9 · MEASURED · nominal; ACM-06 p.139 · MEASURED] |
- Pressure was shown to have minimal effect on burning conditions (refs. [51,52]). [ACM-06 p.126 · CITED]
- Each figure stacks three panels against heat of gasification (kJ/g): heat of combustion (kJ/g) on top, X_r in the middle, calculated flame temperature (K) at the bottom; legend: dashed = extinction-limit temperature 1200 K, solid = 1100 K, curves "Rad. Ext. Limit Range", "Small Flame Ext. Limit Range", "Pure Conv. Ext. Limit", an arrow "Flame Size"; colours black Δh_c 47.2, blue 35.6 (as printed), red 23.6, green 15.6 kJ/g; Figs. 6.10–6.11 add open = SE, solid = steady (conditions C7). [ACM-06 p.128–130 · Fig. 6.9 · MODELED]
- Model: the radiative extinction limit moves to higher L (lower mass burning rate) as Δh_c increases, giving a sloped line on the maps (conditions C7). [ACM-06 p.126 · MODELED]
- The author's reason: a higher Δh_c makes a larger flame at the same mass burning rate, so radiative extinction sets in at a higher L. [ACM-06 p.126 · AUTHOR-INTERPRETATION]
- X_r is predicted with the correlation of ref. [52], adjusted with more data (ref. [60]); the middle plots give X_r against L for each Δh_c, i.e. along each horizontal (constant heat of combustion) line of the map. [ACM-06 p.126 · MODELED · nominal]
- At low L only self-extinguished points appear, until the first steady flames at X_r of ~0.65 (X_O2 0.4), ~0.6 (0.34) and ~0.55 (0.265) (conditions C7). [ACM-06 p.126 · MEASURED]
- X_r falls monotonically with L and rises with Δh_c, and the modelled X_r (coloured lines) follows the same trends (conditions C7). [ACM-06 p.126 · MEASURED]
- The bottom plots give flame-sheet temperatures T_f computed assuming complete reaction (refs. [49,52]); they scatter more, which shows the limits of a constant-property model (c_p and k of nitrogen at 1400 K) (conditions C7). [ACM-06 p.127 · MODELED]
- The author still finds them informative about how flame temperature responds to the two key emulation properties, Δh_c and L. [ACM-06 p.127 · AUTHOR-INTERPRETATION]
- Model: computed T_f rises with Δh_c, and against L it first rises to a peak and then falls (a parabola-like curve), the peak moving to higher L as Δh_c increases; lowering nominal X_O2 lowers the steady flame temperature, as the solid-line predictions also show (conditions C7). [ACM-06 p.127 · MODELED]
- The author explains the dome by a trade-off between heat losses: at low L the flames sit near the radiative limit and cool by radiation, at higher L small flames cool mainly by heat loss to the fuel source, and in between the two losses leave the flame temperature high enough for steady burning. [ACM-06 p.127 · AUTHOR-INTERPRETATION]

Extinction-limit curves read from the top panels (conditions C7; L and Δh_c in kJ/g; solid = 1100 K, dashed = 1200 K; read tolerance ±0.5 kJ/g on L, ±5 kJ/g on Δh_c for Fig. 6.9 and ±2.5 kJ/g for Figs. 6.10–6.11): [ACM-06 p.128–130 · Fig. 6.9 · MODELED · ~fig]

| Figure (X_O2) | Radiative limit, upper end | Radiative limit, lower end | Small-flame limit | Pure convective limit | Citation |
|---|---|---|---|---|---|
| 6.9 (0.4) | L ~1.25 (solid), ~1.64 (dashed) at Δh_c ~46 | both start near L ~0 at Δh_c ~6 | Δh_c ~26.6 (solid), ~30.1 (dashed) at L = 8 (right edge); left ends at L ~0.5 (solid), ~0.3 (dashed), Δh_c ~5.7 | Δh_c ~1.7 at L ~0.1 to ~12.0 at L = 8 | [ACM-06 p.128 · Fig. 6.9 · MODELED · ~fig] |
| 6.10 (0.34) | L ~1.19 (solid), ~1.62 (dashed) at Δh_c ~45.5 | near L ~0.1 at Δh_c ~6.3 | Δh_c ~30.4 (solid), ~34.1 (dashed) at L = 8; left ends at L ~0.4, Δh_c ~5.5 (solid), ~7.5 (dashed) | Δh_c ~1.7 at L ~0.1 to ~12.8 at L = 8 | [ACM-06 p.129 · Fig. 6.10 · MODELED · ~fig] |
| 6.11 (0.265) | L ~1.15 (solid), ~2.3 (dashed) at Δh_c ~45–46.5 | solid near L ~0.1 at Δh_c ~8; dashed near L ~0.9 at Δh_c ~21 | solid from L ~0.5 at Δh_c ~7.2 to L ~7.2 at Δh_c ~37.4; dashed from L ~0.9 at Δh_c ~15.8 to L ~5.7 at Δh_c ~42 (curves end at the legend box) | Δh_c ~2.0 at L ~0.1 to ~14.8 at L = 8 | [ACM-06 p.130 · Fig. 6.11 · MODELED · ~fig] |

Peak calculated flame temperature of the model curves and highest data points, read from the bottom panels (conditions C7; read tolerance ±0.5 kJ/g and ±50 K): [ACM-06 p.128–130 · Fig. 6.9 · MODELED · ~fig]

| Figure (X_O2) | Green, Δh_c 15.6 | Red, 23.6 | Blue, 35.6 | Black, 47.2 | Highest data point | Citation |
|---|---|---|---|---|---|---|
| 6.9 (0.4) | ~1375 K at L ~1.5 | ~1398 K at L ~2.7 | ~1413 K at L ~4.5 | ~1421 K at L ~6.5 | — | [ACM-06 p.128 · Fig. 6.9 · MODELED · ~fig] |
| 6.10 (0.34) | ~1300 K at L ~1.2 | ~1320 K at L ~2.4 | ~1330 K at L ~4.7 (flat from about 3.5) | ~1337 K at L ~5.3 | ~1395 K at L ~3.8, steady (solid) black triangle | [ACM-06 p.129 · Fig. 6.10 · MODELED · ~fig] |
| 6.11 (0.265) | ~1191 K at L ~1.0 | ~1206 K at L ~1.8 | ~1215 K at L ~3.3 | ~1221 K at L ~4.5 | ~1280 K at L ~2.4, SE (open) black square | [ACM-06 p.130 · Fig. 6.11 · MODELED · ~fig] |
- After the per-X_O2 trends of Figs. 6.9–6.11, the effect of X_O2 on T_f is shown on its own (the text cites Fig. 6.10 at this point); to damp the effect of Δh_c, the abscissa of Fig. 6.12 is L/Δh_c, which collapses the T_f curves into a narrower band (conditions C7). [ACM-06 p.131 · MODELED · nominal]
- Fig. 6.12 plots calculated T_f (K, 1100–1500) against L/Δh_c (0–0.3) in one panel per nominal X_O2 (0.4, 0.34, 0.265), with labels "Rad. Ext." and "Kinetic Ext." and a "Flame size" arrow; open = SE, solid = steady; colours black 47.2, blue 35.6, red 23.6, green 15.6 (Δh_c, kJ/g). [ACM-06 p.131 · Fig. 6.12 · MODELED · nominal]
- The author notes that oxygen-enriched environments generally raise the flame temperature, which is more hazardous, and that Δh_c still shifts the curves slightly sideways through its effect on X_r. [ACM-06 p.131 · AUTHOR-INTERPRETATION]

Model-curve peaks read from Fig. 6.12 (conditions C7; read tolerance ±0.025 on L/Δh_c and ±25 K): [ACM-06 p.131 · Fig. 6.12 · MODELED · ~fig]

| Fig. 6.12 panel | Black, Δh_c 47.2: model peak | Green, Δh_c 15.6: model peak | Citation |
|---|---|---|---|
| X_O2 0.4 | ~1422 K at L/Δh_c ~0.14 | ~1373 K at L/Δh_c ~0.10 | [ACM-06 p.131 · Fig. 6.12 · MODELED · ~fig] |
| X_O2 0.34 | ~1337 K at L/Δh_c ~0.11 | ~1300 K at L/Δh_c ~0.10 | [ACM-06 p.131 · Fig. 6.12 · MODELED · ~fig] |
| X_O2 0.265 | ~1221 K at L/Δh_c ~0.095 | ~1191 K at L/Δh_c ~0.05 | [ACM-06 p.131 · Fig. 6.12 · MODELED · ~fig] |

### Real materials on the microgravity flammability maps (Table 6.2, Fig. 6.13)
| Set | Burner and fuel | Platform and gravity | Oxygen, pressure | Flow | Not reported in the pages read | Citation |
|---|---|---|---|---|---|---|
| C8 | burner flames: 25 mm BRE burner, ethylene-diluent mixture; materials: Table 6.2 properties (refs. [67,74]) | ISS, microgravity, quiescent ambient | nominal X_O2 0.4, 0.34, 0.265; p per the Fig. 6.13 legend | quiescent ambient | ambient temperature, material sample size | [ACM-06 p.109 · MEASURED · nominal; ACM-06 p.128–130 · MEASURED · nominal; ACM-06 p.131–132 · MODELED · nominal; ACM-06 p.133 · Table 6.2 · CITED; ACM-06 p.134 · Fig. 6.13 · MEASURED · nominal; ACM-06 p.139 · MEASURED] |
- Table 6.2 lists L and Δh_c of some widely used materials; being material properties, they can be measured in normal gravity with the cone calorimeter. [ACM-06 p.131 · CITED]
- Emulation on the maps matches the two main properties, L and Δh_c, used as the map axes for X_O2 0.265, 0.34 and 0.4, so materials appear as crosses and burner flames as coloured symbols, all in Fig. 6.13. [ACM-06 p.131 · AUTHOR-INTERPRETATION · nominal]

Table 6.2, "Some of the commonly used materials heats of combustion and heats of gasification [67,74]" (11 rows in three groups): [ACM-06 p.133 · Table 6.2 · CITED]

| Group | Material | Δh_c (kJ/g) | L (kJ/g) | Citation |
|---|---|---|---|---|
| Liquids | Acetone | 30.8 | 0.63 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Liquids | Ethanol | 26.8 | 1.00 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Liquids | Methanol | 19.8 | 0.74 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Ordinary polymers | Epoxy | 25 | 2.3 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Ordinary polymers | PE, polyethylene | 43.4 | 1.9 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Ordinary polymers | HDPE, high density polyethylene | 40 | 2.0, 2.2 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Ordinary polymers | PP, polypropylene | 44 | 2.0 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Ordinary polymers | Nylon 6 | 28.8 | 1.4 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Ordinary polymers | PMMA | 24.2 | 1.6 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Textiles | Acrylic fiber | 27.5 | 4.6 | [ACM-06 p.133 · Table 6.2 · CITED] |
| Textiles | Wool | 19.5 | 3.9 | [ACM-06 p.133 · Table 6.2 · CITED] |

- Fig. 6.13 shows the flammability maps for nominal X_O2 0.4, 0.34 and 0.265 with real-material properties as coloured crosses labelled PP, PE, HDPE, Acetone, Nylon 6, Acrylic fiber, Epoxy, PMMA, Wool and Methanol; Ext. Limit Temp.: dashed 1200 K, solid 1100 K. [ACM-06 p.134 · Fig. 6.13 · MODELED · nominal]

Fig. 6.13 legend: end-condition series present for each burner-flame Δh_c (kJ/g) ("N/A" in the legend = no series of that end condition): [ACM-06 p.134 · Fig. 6.13 · MEASURED]

| X_O2, p (bar) | SE and FT | FT only | SE only | Citation |
|---|---|---|---|---|
| 0.4, 1 | Δh_c 47.2, 32.1, 23.6, 15.6 | 35.9 | — | [ACM-06 p.134 · Fig. 6.13 · MEASURED] |
| 0.34, 1 | 47.2 | 35.9, 15.6 | 32.1, 23.6 | [ACM-06 p.134 · Fig. 6.13 · MEASURED] |
| 0.34, 0.56 | 47.2, 23.6, 15.6, 11.8 | — | — | [ACM-06 p.134 · Fig. 6.13 · MEASURED] |
| 0.265, 1 | — | — | 47.2, 23.6 | [ACM-06 p.134 · Fig. 6.13 · MEASURED] |
| 0.265, 0.7 | 47.2, 23.6, 15.6 | — | 32.1 | [ACM-06 p.134 · Fig. 6.13 · MEASURED] |

- PMMA (Δh_c 24.2 kJ/g, L 1.6 kJ/g from Table 6.2) lies near a yellow circle (X_O2 0.4), a green triangle (0.34) and a red square (0.265); at 0.4 and 0.34 the matching emulated flame falls in the flammable zone, between the radiative and pure convective limits drawn as sloped lines, which suggests PMMA burns steadily there; at 0.265 the PMMA point falls in the extinction zone, left of the radiative extinction limit (that sentence is incomplete as printed) (conditions C8; microgravity, quiescent, 25 mm BRE emulation). [ACM-06 p.128–130 · MEASURED · nominal; ACM-06 p.131–132 · MODELED; ACM-06 p.133 · Table 6.2 · CITED; ACM-06 p.134 · Fig. 6.13 · MODELED]
- The author judges that materials in the Fig. 6.13 flammable region with high Δh_c and low L, such as PE and PP, pose more risk to spacecraft fire safety: higher heat release rate, and larger flames that reach the surroundings more easily and emit more radiation, a key factor in fire growth and spread. [ACM-06 p.132 · AUTHOR-INTERPRETATION]
- The minimum Δh_c needed for ignition seen in the experiments (horizontal double solid line) rises slightly from 10 to 12 and 13 (axis in kJ/g; no unit in the sentence) as X_O2 drops from 0.4 to 0.34 and 0.265 (BRE ethylene-diluent mixture, 25 mm burner, microgravity). [ACM-06 p.109 · MEASURED · ctx; ACM-06 p.128–130 · MEASURED · nominal; ACM-06 p.132 · MEASURED; ACM-06 p.134 · Fig. 6.13 · MEASURED]
- Stated limitations: the radiative, small-flame and pure convective limits come from theory (ref. [52]) and some steady flames lie inside the extinction region, which the author puts down to the approximate calculated values, above all the average surface radiative heat flux. [ACM-06 p.132 · AUTHOR-INTERPRETATION]
- The model holds Y_O2 constant at nominal values printed as "0.43, 27, and 29", while the actual values drift up to 10 % from nominal by the end of each test, which explains the inaccuracy of the map extinction limits. [ACM-06 p.132 · AUTHOR-INTERPRETATION]

### Critical flame temperature and oxygen: size of the flammable region (Figs. 6.14, 6.15)
- Fig. 6.14 ("Flammability regions dependency on the nominal XO2") shows all extinction limits per X_O2 for critical flame temperatures from 1100 K to 1400 K: panels T_cr = 1100 K and 1200 K (X_O2 0.265, 0.34, 0.4), 1300 K (0.34, 0.4) and 1400 K (0.4); axes heat of combustion 0–60 kJ/g against heat of gasification 0–18 kJ/g; no colour legend. [ACM-06 p.134–135 · Fig. 6.14 · MODELED · nominal]
- The choice of critical temperature shapes the flammable region; 1100 to 1200 K is the widely used range, but the algorithm accepts any given T_cr, and maps are shown for 1100, 1200, 1300 and 1400 K. [ACM-06 p.135 · MODELED · nominal]
- Model predictions: the flammable region generally shrinks as X_O2 falls, the limits drawing together; the radiative limit changes little at T_cr = 1100 K but markedly at 1200 K and the lowest X_O2; the small-flame limit always narrows the region as X_O2 falls, so it depends more strongly on ambient oxygen; a theoretical region computed the same way for X_O2 = 0.15 confirmed no flammable region at that condition. [ACM-06 p.135 · MODELED]
- Model predictions: the limits draw together as T_cr rises; no flammable zone was found at X_O2 = 0.265 for T_cr = 1300 K, nor at X_O2 = 0.265 and 0.34 for T_cr = 1400 K; the highest attainable flame temperature at X_O2 = 0.4 was 1420 K, so flame temperatures did not exceed 1420 K for the ambient conditions of the study. [ACM-06 p.135 · MODELED]
- Fig. 6.15 ("The effect of Tcr on flammability maps for XO2 = 0.265, 0.34, and 0.4") has panels X_O2 = 0.4 (T_cr 1100 to 1400 K), 0.34 (1100 to 1300 K) and 0.265 (1100 to 1200 K); curves are not labelled one by one, and curved arrows point right across the left (radiative) group and left across the right group. [ACM-06 p.135–136 · Fig. 6.15 · MODELED · nominal]

Upper ends of the Fig. 6.15 extinction-limit curves at Δh_c ~47 kJ/g, heat of gasification L in kJ/g (read tolerance ±1.5 kJ/g on L, ±5 kJ/g on Δh_c): [ACM-06 p.136 · Fig. 6.15 · MODELED · ~fig]

| Panel | T_cr range | Left (radiative) group | Right group | Citation |
|---|---|---|---|---|
| X_O2 0.4 | 1100–1400 K | L ~1.0, ~1.6, ~2.4, ~3.9 | L ~8.1, ~11.2, ~13.4, ~15.3 | [ACM-06 p.136 · Fig. 6.15 · MODELED · ~fig] |
| X_O2 0.34 | 1100–1300 K | L ~1.1, ~1.7, ~2.8 | L ~8.1, ~11.0, ~13.2 | [ACM-06 p.136 · Fig. 6.15 · MODELED · ~fig] |
| X_O2 0.265 | 1100–1200 K | L ~1.1, ~2.3 | L ~6.3, ~9.6 (inner curves start near Δh_c ~21) | [ACM-06 p.136 · Fig. 6.15 · MODELED · ~fig] |

### Critical heat release rate and critical mass flux at the extinction limits (Figs. 6.16, 6.17)
- Section 6.8 plots the critical heat release rate ṁ''Δh_c at the critical flame temperatures of 1100 K or 1200 K against heat of combustion (Fig. 6.16: panels T_cr = 1100 K and 1200 K; black X_O2 0.4, blue 0.34, red 0.265; solid curves radiative extinction, dashed curves small-flame extinction; critical heat release rate 0–160 kW/m² against heat of combustion 0–60 kJ/g). [ACM-06 p.137 · Fig. 6.16 · MODELED · nominal]
- Model: at the small-flame limit the critical heat release rate tends to ~40 kW/m² for both critical temperatures, while at the radiative limit it rises markedly with X_O2. [ACM-06 p.137 · Fig. 6.16 · MODELED]
- A critical heat release rate at extinction was also reported in refs. [75,95]. [ACM-06 p.137 · CITED]

Critical heat release rate read from Fig. 6.16 (kW/m²; read tolerance ±10 kJ/g and ±10 kW/m²): [ACM-06 p.137 · Fig. 6.16 · MODELED · ~fig]

| Limit, T_cr | X_O2 0.4 | X_O2 0.34 | X_O2 0.265 | Citation |
|---|---|---|---|---|
| Radiative, 1100 K: plateau at Δh_c ~47 kJ/g (curve start at Δh_c ~5–8 kJ/g) | ~141 (start ~122) | ~129 (start ~98) | ~105 (start ~80) | [ACM-06 p.137 · Fig. 6.16 · MODELED · ~fig] |
| Radiative, 1200 K: at Δh_c ~47 kJ/g | ~125 | ~110 | ~76 (red curve starts at Δh_c ~21 kJ/g) | [ACM-06 p.137 · Fig. 6.16 · MODELED · ~fig] |
| Small flame, 1100 K: from ~39 at Δh_c ~5 kJ/g to, at Δh_c ~47 kJ/g | ~45 | — | ~40 | [ACM-06 p.137 · Fig. 6.16 · MODELED · ~fig] |
| Small flame, 1200 K: across Δh_c | about 45–49 (all X_O2) | — | — | [ACM-06 p.137 · Fig. 6.16 · MODELED · ~fig] |

- Fig. 6.17 plots critical burner mass flux (g/m²s, log axis 0.3–30) against heat of combustion (kJ/g, 0–60) for each X_O2 and both limits, panels T_cr = 1100 K and 1200 K (black 0.4, blue 0.34, red 0.265); the fit drawn is for the small-flame limit. [ACM-06 p.137–138 · Fig. 6.17 · MODELED · nominal]
- Model: at the small-flame limit the critical mass flux does not change with X_O2, except that the combustible range of Δh_c shrinks as X_O2 falls, so a single power-law fit in Δh_c describes it, as in ref. [75]; at the radiative limit the critical mass flux rises with oxygen for a given Δh_c, and the flammable Δh_c range widens with X_O2. [ACM-06 p.137 · Fig. 6.17 · MODELED]
- The author puts it as: higher oxygen lets materials of lower heat of combustion burn. [ACM-06 p.137 · AUTHOR-INTERPRETATION]
- Small-flame-limit fits printed on Fig. 6.17 (y = critical mass flux in g/m²s, x = heat of combustion in kJ/g; fitted range not stated, small-flame curves drawn over Δh_c ~5 to ~47 kJ/g): T_cr = 1100 K, y = 35.87x^(−0.96), R² = 1.00; T_cr = 1200 K, y = 41.87x^(−0.97), R² = 1.00. [ACM-06 p.138 · Fig. 6.17 · MODELED · ~fig]
- Read from Fig. 6.17, panel T_cr = 1100 K (tolerance ±10 kJ/g on Δh_c, ×/÷1.15 on mass flux): radiative-limit critical mass flux at Δh_c ~47 kJ/g ~3.0 (X_O2 0.4), ~2.7 (0.34) and ~2.2 g/m²s (0.265); radiative curves start at ~26 g/m²s at Δh_c ~4.6 kJ/g (0.4) and ~11 g/m²s at Δh_c ~7 kJ/g (0.265); small-flame curves end at ~0.96 (0.4) and ~0.82 g/m²s (0.265) at Δh_c ~47 kJ/g. [ACM-06 p.138 · Fig. 6.17 · MODELED · ~fig]

### Chapter 6 summary: the ISS BRE campaign
- A gas-fed burner (BRE) with a porous surface, through which the gas mixture flows in place of a real material's gasification, emulated the burning of real solid and liquid fuels in microgravity, to address spacecraft fire-safety concerns. [ACM-06 p.138 · MEASURED · nominal]
- Fuels: ethylene and nitrogen-diluted ethylene, giving heats of combustion (LHV) from 10 kJ/g to 47.2 kJ/g. [ACM-06 p.138 · MEASURED]
- The BRE sat inside a chamber that allowed flames to be ignited in a controlled environment, with oxygen mole fraction and pressure varied to study their effect on flammability. [ACM-06 p.138 · MEASURED · nominal]
- Nominal ambient X_O2 were 0.4, 0.34, 0.265, 0.25 and 0.21, at ambient pressures of 1, 0.7 and 0.56 bar; three of these atmospheres are conditions NASA is considering for crew habitats in spacecraft. [ACM-06 p.138 · MEASURED]
- Instruments: several cameras (stills and video); two heat-flux sensors and two K-type thermocouples embedded in the burner surface, at the centre and about 10 mm from it, for surface heat flux and temperature; several remote radiometers for the flame radiative flux, from which the radiative loss fractions were computed and used to correct the heat of combustion in the analytical solution. [ACM-06 p.138–139 · MEASURED · nominal]
- A critical temperature range of 1100 to 1200 K was chosen to separate self-extinguished from steady flames. [ACM-06 p.139 · MODELED · nominal]
- 146 flames were ignited aboard the ISS; 46 burned for the entire duration, three minutes in most cases, until the fuel supply was shut off on purpose. [ACM-06 p.139 · MEASURED]
- Every flame ignited at nominal X_O2 0.25 or 0.21 self-extinguished within 90 seconds; in the Fig. 6.1 legend all of those series (X_f 1, 0.68, 0.5, 0.33 at 0.25; X_f 1, 0.5, 0.33 at 0.21) are at p = 1 bar with SE only (BRE ethylene or ethylene-nitrogen, porous burner, ISS microgravity). [ACM-06 p.113 · Fig. 6.1 · MEASURED · nominal; ACM-06 p.138 · MEASURED; ACM-06 p.139 · MEASURED]
- The analytical solution showed the 46 flames that burned for the entire duration close to steady, their size on average 94 % of the steady value, standard deviation 1.9 %. [ACM-06 p.139 · MODELED]
- Method recap: the average measured heat flux gave the heats of gasification; a dimensional analysis of X_r based on radiation theory gave an empirical correlation; a geometric model estimated the average surface radiative flux, which, added to the calculated convective and re-radiative fluxes, gave the computed heat of gasification. [ACM-06 p.139 · MEASURED]
- Author's conclusions: computed and measured heats of gasification of the steady flames agree well, supporting the model; one flammability map of Δh_c against L was built per nominal X_O2 from the experimental data, with theoretical trends added, and two extinction limits bound the flammable region; properties of some real solids and liquids were placed on the maps to study their flammability. [ACM-06 p.139 · AUTHOR-INTERPRETATION]
- As the summary defines them, the radiative extinction limit was obtained empirically, by a line through the range separating self-extinguished and steady flames, and the kinetic extinction limit theoretically, for small flames with little radiative loss. [ACM-06 p.139 · AUTHOR-INTERPRETATION]

### Thesis conclusions (Chapter 7)
| Set | Burner and fuel | Platform and gravity | Design parameters | Not reported in the pages read | Citation |
|---|---|---|---|---|---|
| C9 | BRE in two sizes, porous flat surfaces 25 mm and 50 mm in diameter; ethylene and ethylene-nitrogen mixtures of various concentrations, heats of combustion up to LHV 50 kJ/g | ISS test series, microgravity, quiescent atmosphere; aim: flammability of condensed-phase materials, for spacecraft fire safety | fuel-mixture mass flux, ambient mixture, ambient pressure | ambient temperature | [ACM-06 p.140 · MEASURED · nominal] |
- Radiation measurements gave the flame radiative loss fractions (conditions C9). [ACM-06 p.140 · MEASURED]
- Modelling: a dimensional analysis of the radiation fraction gave an empirical correlation; the narrow-band radiation model RADCAL gave flame emissivity from product partial pressures, flame length, flame temperature and ambient pressure; the correlation corrected the total heat release rate for radiative loss and, with the analytical solution, predicted flame height and radius and average convective and radiative heat flux, from which heats of gasification were calculated. [ACM-06 p.140 · MODELED]
- The author frames the inverse problem: in the emulation the mass flux is set and L is derived, while for a real material L is given and the question is whether it burns, which is settled by assuming a flame extinction temperature. [ACM-06 p.140 · AUTHOR-INTERPRETATION]
- More than half of the tests produced long burns, of at least 2 and up to 5 minutes (conditions C9). [ACM-06 p.140 · MEASURED]
- In general, nominal oxygen mole fractions of 26 % and above can give steady flames, thin and blue, that grow slowly over minutes (conditions C9; ambient diluent and pressure not stated for this statement). [ACM-06 p.140 · MEASURED]
- Theory showed the shut-down flames were effectively steady in size, and every test end point was above 94 % of steady state in flame heat flux, by the theoretical estimate of steadiness (conditions C9). [ACM-06 p.140 · MODELED]
- The author takes the heat of gasification as the key property of the steady state, exact for vaporizing solids and approximate under real pyrolysis. [ACM-06 p.140 · AUTHOR-INTERPRETATION]
- Surface heat flux at a set mass flux allowed heats of gasification to be estimated and related to steady solid materials that might burn in microgravity. [ACM-06 p.140 · MODELED]
- The author reports that PMMA and POM were successfully emulated on the resulting flammability map. [ACM-06 p.140 · AUTHOR-INTERPRETATION]
- The radiometer-based radiative fraction appeared to correlate well with measured flame height, leading to a more accurate dimensional-analysis correlation that also takes in the fuel and ambient mixtures and ambient pressure; heat flux, flame height and base radius, and radiative fraction against fuel-mixture mass flux for several ambient mixtures and pressures are the experimental findings (conditions C9). [ACM-06 p.140–141 · MEASURED]
- For all steady flames the radiation fraction stayed below 0.6 and correlated with flame height (conditions C9). [ACM-06 p.141 · MEASURED]
- The dimensional analysis shows the radiation parameter Ω (dimensionless radiation-fraction variable) depends on the fuel. [ACM-06 p.14 · AUTHOR-INTERPRETATION · ctx; ACM-06 p.141 · MODELED]
- For this Ω analysis, only ethylene-nitrogen mixtures were examined. [ACM-06 p.141 · MEASURED]
- Dividing the RADCAL absorption coefficients by the summed partial pressures of water vapour and CO2 collapses all data onto one empirical curve, suggesting dependence on path length only for a given hydrocarbon (ethylene-nitrogen BRE flames in microgravity). [ACM-06 p.141 · MODELED]
- Model chain: the radiation fraction gives the flame temperature, with 1100 K taken as the extinction criterion; radiative flux to the surface comes from a view-factor analysis on the calculated flame size with the correlated X_r; the net heat flux, the algebraic sum of convective, radiative and surface re-radiation terms, gives L. [ACM-06 p.141 · MODELED · nominal]
- The effects of burner size and of surface temperature (350 ºC, representing real burning fuels) on the theoretical flammability map (L against ṁ''_mix) were also examined; predicted: a larger burner diameter raises flame radiant fraction and lowers heats of gasification; surface temperature changes L substantially, its re-radiation loss lowering burning rates, while external radiation can offset this and raise the mass flux (external flux level not stated). [ACM-06 p.141 · MODELED]
- The author notes that, as in fires on Earth, external radiation drives massive fire growth and is likely to matter in microgravity too. [ACM-06 p.141 · AUTHOR-INTERPRETATION]
- The analytical algorithm was shown to predict steady burning conditions for a 25 mm diameter surface and was examined for larger diameters. [ACM-06 p.141 · MODELED]
- The author regards it as a powerful tool for predicting steady burning in microgravity from fuel properties and ambient conditions. [ACM-06 p.141 · AUTHOR-INTERPRETATION]

Table 7.1, "Effect of atmosphere, heat of combustion and mass flux on burning parameters": predicted trends for BRE microgravity flames (+ increase, − decrease; "expands" printed without a legend; the text refers to it as Table 6.1): [ACM-06 p.142 · Table 7.1 · AUTHOR-INTERPRETATION]

| Parameter | Pressure | Ambient oxygen mole fraction | Fuel heat of combustion | Burning mass flux | Citation |
|---|---|---|---|---|---|
| Flame radiation fraction | + and expands | + | + | + | [ACM-06 p.142 · Table 7.1 · MODELED] |
| Flame size | expands | − | + | + | [ACM-06 p.142 · Table 7.1 · MODELED] |
| Convective heat flux | expands | + | − | − | [ACM-06 p.142 · Table 7.1 · MODELED] |
| Radiation heat flux | expands | + | − | − | [ACM-06 p.142 · Table 7.1 · MODELED] |
| Heat of gasification | expands | + | − | − | [ACM-06 p.142 · Table 7.1 · MODELED] |

- Model: lowering atmospheric pressure extends the burning range to higher burning rates (pressure values not stated for this statement). [ACM-06 p.142 · MODELED]
- The author states that NASA is seeking habitable atmospheres of lower pressure and higher oxygen, and that such a move will worsen the burning conditions. [ACM-06 p.142 · AUTHOR-INTERPRETATION]
- Model: the steady flame temperature does not depend on L but on the mass flux; the mass flux depends on L, the steady flame temperature, surface radiative and convective flux, re-radiation and external radiant flux; surface radiative flux varies inversely with mass flux (and so flame size) but falls faster than convection and re-radiation, and it is the only flux component affected by ambient mixture and pressure as well as by hydrocarbon properties. [ACM-06 p.142 · MODELED]
- The author concludes that radiative heat transfer decides extinction and, when burning is sustained, the mass flux, so the algorithm should be cast in terms of the ambient conditions, external radiation included, and hydrocarbon properties to tell whether burning is possible and at what rate. [ACM-06 p.142 · AUTHOR-INTERPRETATION]
- Main theoretical result: a flammability map giving the burning conditions of a fuel from its heat of combustion, heat of gasification and burning temperature; built from measurement and theory as heat of gasification against heat of combustion for nominal ambient X_O2 0.265, 0.34 and 0.4 (BRE microgravity flames), bounded by the radiative and small-flame extinction limits, obtained theoretically with a critical flame temperature of 1100 K or 1200 K; the flammable zone holds flames hotter than these values. [ACM-06 p.142–143 · MODELED · nominal]
- Author's conclusions: several real materials were emulated by matching their properties on the maps; because the maps rest on Δh_c and L, which the cone calorimeter measures effectively, the author suggests NASA use Test 2 to determine flammability hazard in space; external radiation and real material chemistry are proposed for future studies. [ACM-06 p.143 · AUTHOR-INTERPRETATION]

### Appendix A: calorimeter heat flux corrected for burner edge heating
- The exposed side of the copper burner top was an unwanted heat-flux surface that should have been insulated; this design fault exposed the edges to the flame and made the direct heat-flux measurement over the projected burner face area significantly uncertain, and a correction procedure improved it. [ACM-06 p.26 · MEASURED · ctx; ACM-06 p.144 · MEASURED]
- The calorimeter flux q''_cal from the Eq. 2.1 reduction includes heat absorbed at the bevel edge of the top surface, which has to be removed to leave only the average face-area flux; the burner face area A_s is 573 mm². [ACM-06 p.26 · Eq. 2.1 · MEASURED · ctx, nominal; ACM-06 p.27 · MEASURED · ctx]
- The author notes that the calorimeter can give a valid average flux over the top flat flow area of the copper only once edge heating is removed, which the appendix analysis does. [ACM-06 p.144 · AUTHOR-INTERPRETATION]
- The correction was applied to all steady end points using the radiative fraction predicted by the Fig. 3.7b correlation, so all steady data could be used, not only those with working radiometers. [ACM-06 p.144 · MODELED · nominal]
- Table 3.1 shows very good agreement between measured radiation fractions and those from the correlation. [ACM-06 p.144 · MEASURED]
- Radiation is treated with view factors, the flame being surface 2 (Fig. A.1: surface 1 burner surface, surface 2 flame sheet, surface 3 burner bevel edge; r_f, y_f and a marked on the small flame, y_f, r_f, H and b on the large flame); two cases: (a) the flame extends below the flow area (surface 1), (b) the flame stands off surface 1. [ACM-06 p.144 · Fig. A.1 · MODELED · nominal]
- Video images gave the dimensions a and b and the flame height and radius, listed in Table 3.1. [ACM-06 p.144 · MEASURED]
- Symbols (ACM-06 list): A surface area; b copper-plate diameter at its half thickness; H copper-plate thickness; Q̇ heat-loss rate; R burner-surface radius; S stoichiometric molar air-fuel ratio; α absorptivity or fuel-ambient air mass ratio; β radiative flux to the top surface divided by radiative flux to the burner bevel edge; μ radiative flux divided by convective flux to the burner top surface; λ = ṁ''/(4k/(π c_p R_b)); subscripts cal calorimeter average flux to the burner surface, crc corrected calorimeter, s burner surface, ∞ ambient. [ACM-06 p.13–15 · AUTHOR-INTERPRETATION · ctx]
- Convective scaling (proportionalities, fitted range not stated): to surface 1, mean q̇''_1,c ∝ (1/y_f)(λ/(e^λ − 1)), inversely related to distance from the flame (Eq. A.1); to the bevel edge with the flame below, q̇''_3,c ∝ (b/H)/(r_f − R), adjusted for incomplete coverage over H (Eq. A.2); with the flame above, q̇''_3,c ∝ 1/(a + H/2), from the average distance of surface 3 from the flame (Eq. A.3). [ACM-06 p.144 · Eq. A.1 · MODELED; ACM-06 p.145 · Eq. A.2 · MODELED]
- Radiation to the bevel edge (fitted range not stated): q̇''_3 = (X_r Q̇_c/2) F_23 (Eq. A.4; Q̇_c is not separately defined in the pages read); F_23 = (A_3/A_2) F_32 with A_2 the flame area and A_3 the bevel-edge area (Eq. A.5); q̇''_3,r = X_r Q̇_c F_32/(2A_2) (Eq. A.6); F_32 ≈ 1 − R/r_f < 1 (Eq. A.7). [ACM-06 p.13–14 · MODELED · ctx; ACM-06 p.145 · Eq. A.4 · MODELED]
- Surface 1 (fitted range not stated): theoretical convection q̇''_1,c = (4k/(π R c_p))(λ/(e^λ − 1)) times Δh_c(1 − X_r)Y_O,∞ divided by (S − c_p(T_s − T_∞)) as transcribed (Eq. A.8); theoretical radiation q̇''_1,r = X_r Q̇_c F_12/(2A_2), A_2 the surface of a semi-ellipse with semi-major axis y_f and semi-minor axis r_f (Eq. A.9); F_12 ≈ 1 − arctan(a/r_f)/π when the flame sits above the burner surface (Eq. A.10) and F_12 = 1 when it is below (Eq. A.11); μ = q̇''_1,r/q̇''_1,c (Eq. A.12). [ACM-06 p.145 · Eq. A.8 · MODELED; ACM-06 p.146 · Eq. A.12 · MODELED]
- Correction (fitted range not stated): q̇''_1 = δ q̇''_cal (Eq. A.13); δ = (1 + μ)(A_1 + A_3)/[(A_1 + αA_3) + μ(A_1 + βA_3)], A_1 the burner-surface area (Eq. A.14); α = q̇''_3,c/q̇''_1,c = [1/(α + H/2)]/[(1/y_f)(λ/(e^λ − 1))] for flames above the burner (Eq. A.15, α in the first denominator as printed) and [(b/H)/(r_f − R)]/[(1/y_f)(λ/(e^λ − 1))] for flames below (Eq. A.16); β = q̇''_3,r/q̇''_1,r (Eq. A.17); μ = (q̇''_1,r/q̇''_1,c)_theory (Eq. A.18). [ACM-06 p.146 · Eq. A.13 · MODELED]
- Table 3.1 ("Summary of the ISS tests") gives both the corrected surface-1 flux q̇''_cal,crc and the original calorimeter flux q̇''_cal, in kW/m², with a dash where no value is given and footnote 1 "Radiometer data not available"; Fig. A.2 also plots the calorimeter data of the tests with radiation measurements. [ACM-06 p.32 · Table 3.1 · MEASURED · ctx; ACM-06 p.146 · MEASURED]
- Fig. A.2, "Calorimeter vs. corrected calorimeter": y axis calorimeter (kW/m2), x axis corrected calorimeter (kW/m2), both linear 0–16; legend (FT): filled triangle X_f 1, X_O2 0.34, p 0.56 bar; filled square 1, 0.265, 0.7; open circle 0.5, 0.4, 1; open triangle 0.5, 0.34, 0.56; open square 0.5, 0.265, 0.7; Δh_c = X_f (47.2 kJ/g). [ACM-06 p.147 · Fig. A.2 · MEASURED · nominal]
- FT is "Fuel Terminated" in the abbreviation list, while Table 3.1 footnote 2 prints "Flow-Terminated (considered as steady)". [ACM-06 p.13 · AUTHOR-INTERPRETATION · ctx; ACM-06 p.32 · Table 3.1 · AUTHOR-INTERPRETATION · ctx]

Points read from Fig. A.2 (ISS microgravity BRE, FT tests with radiation data; burner diameter, ignition, enclosure and ambient temperature not stated in Fig. A.2; read tolerance ±1 kW/m²): [ACM-06 p.32 · Table 3.1 · MEASURED · ctx; ACM-06 p.146 · MEASURED; ACM-06 p.147 · Fig. A.2 · MEASURED · ~fig]

| Point | Series (X_f, X_O2, p bar) | Corrected calorimeter read (kW/m²) | Calorimeter read (kW/m²) | Citation |
|---|---|---|---|---|
| leftmost | open square: 0.5, 0.265, 0.7 | ~1.0 | ~10.2 | [ACM-06 p.147 · Fig. A.2 · MEASURED · ~fig, single-test] |
| middle | open square: 0.5, 0.265, 0.7 | ~2.0 | ~9.9 | [ACM-06 p.147 · Fig. A.2 · MEASURED · ~fig, single-test] |
| rightmost | open square: 0.5, 0.265, 0.7 | ~3.0 | ~9.5 | [ACM-06 p.147 · Fig. A.2 · MEASURED · ~fig, single-test] |

### Appendix B: transient growth of test point 66D5 (Fig. B.1)
- To show how BRE microgravity steady flames approach their asymptote, Appendix B (Fig. B.1) gives the transient flame length, base radius and photomultiplier (PMT) signal with an OH* filter assembly (ref [71]), which stands for flame luminosity, for test point 66D5 (BRE:19066D5). [ACM-06 p.36 · MEASURED · single-test; ACM-06 p.148 · MEASURED · single-test]
- PMT calibration details and schematic are in ref. [55]. [ACM-06 p.148 · CITED]
- Table 3.1 ("Summary of the ISS tests") row 66D5 (key BRE:19066D5): X_O2 0.34; X_f 0.5; p 0.58 bar; ṁ'' 1.76 g/m2s; q̇''_ctr 11.2, q̇''_off 6.81, q̇''_cal 13.2, q̇''_cal,crc 15.65 kW/m2; y_f 6.3 mm; r_f 13 mm; q̇''_r,60 21.17 and q̇''_r,off 12.93 (no unit in the row as transcribed); X_r 0.332; t_b 180 s; end-point condition FT; platform ISS (table title); burner diameter, ambient diluent, ignition method and ambient temperature not given in the row. [ACM-06 p.32 · Table 3.1 · MEASURED · ctx, single-test]
- Fig. B.1 ("Transient flame length, base radius and PMT heat flux with OH* assembly"): top panel length (mm) with series "Flame length" (+) and "Flame base radius" (×); bottom panel irradiance (kW/m2), series "PMT-310 nm"; shared time axis (s) from −40 to 200, linear. [ACM-06 p.148 · Fig. B.1 · MEASURED]

Points read from Fig. B.1 for test 66D5 (key BRE:19066D5; ISS microgravity, X_O2 0.34, X_f 0.5, p 0.58 bar, ṁ'' 1.76 g/m2s, t_b 180 s, end condition FT per Table 3.1; read tolerance ±20 s, ±0.5 mm, ±0.1 kW/m²): [ACM-06 p.32 · Table 3.1 · MEASURED · ctx; ACM-06 p.148 · Fig. B.1 · MEASURED · ~fig, single-test]

| Series | Read | Citation |
|---|---|---|
| Flame length and flame base radius | both start at one marker at ~0 mm, ~0 s | [ACM-06 p.148 · Fig. B.1 · MEASURED · ~fig, single-test] |
| Flame length | ~3.3 mm at ~13 s (first non-zero point); ~8.4 mm at ~184 s (last point) | [ACM-06 p.148 · Fig. B.1 · MEASURED · ~fig, single-test] |
| Flame base radius | ~2.5 mm at ~13 s (first non-zero point); ~6.3 mm at ~184 s (last point; maximum ~6.4 mm at ~171 s) | [ACM-06 p.148 · Fig. B.1 · MEASURED · ~fig, single-test] |
| PMT-310 nm | ~0.05 kW/m² from ~−20 s to ~0 s (pre-ignition level, regained after ~184 s); an initial spike at ~0 s reaching the 1.2 kW/m² axis top (clipped, so ≥1.2) and falling to ~0.45 kW/m² within ~10 s; a steady plateau of ~0.47 kW/m² from ~25 s to ~184 s, then a drop to the pre-ignition level | [ACM-06 p.148 · Fig. B.1 · MEASURED · ~fig, single-test] |

### Appendix C: transient flame height, radiation fraction, flame temperature and surface heat flux (Figs. C.1–C.3)
- Appendix C applies the theory (reference left blank as printed) to predict transient flame height, X_r, calculated T_f and surface heat-flux components. [ACM-06 p.149 · AUTHOR-INTERPRETATION]
- The analytic theory used to judge how close flame size is to its asymptote can also predict transient flame height; the results of two tests are shown (printed as "Figure 1"). [ACM-06 p.149 · MODELED]
- In those two tests (19070C1 and 20352A2) the computed size first departs from the measured one and grows more accurate as the flames grow; at the end point of all steady tests predicted and measured flame heights matched. [ACM-06 p.149 · MODELED]
- Fig. C.1 ("Calculated vs. measured transient flame heights of 19070C1 and 20352A2") has two panels, each with "Measured" (solid) and "Calculated" (dashed) flame height (mm) against time (s); the caption does not say which panel is which test. [ACM-06 p.149 · Fig. C.1 · MEASURED]

Table 6.1 rows of the two tests (ethylene-nitrogen flames; burner diameter, ambient diluent, ignition method and ambient temperature not given in the rows): [ACM-06 p.110–111 · Table 6.1 · MEASURED · ctx]

| Test (key) | X_O2 before / after | Δh_c (kJ/g) | p (bar) | ṁ'' (g/m2-s) | q̇''_CTR / q̇''_off (kW/m2) | y_f / r_f (mm) | X_r before oscillations | Osc. time | End time (s), condition | Citation |
|---|---|---|---|---|---|---|---|---|---|---|
| 19070C1 (BRE:19070C1) | 0.342 / 0.331 | 23.6 | 0.605 | 4.43 | 4.61 / 2.7 | 25.6 / 20.4 | 0.63 | – | 120, FT | [ACM-06 p.111 · Table 6.1 · MEASURED · ctx, single-test] |
| 20352A2 (BRE:20352A2) | 0.3874 / 0.381 | 24.7 | 1.045 | 3.39 | 7.21 / 4.63 | 17.37 / 16.32 | 0.558 | – | 133.43, FT | [ACM-06 p.110 · Table 6.1 · MEASURED · ctx, single-test] |

Points read from Fig. C.1 (ethylene-nitrogen BRE flames, tests 19070C1 and 20352A2, panel-to-test assignment not printed; read tolerance ±10 s, ±2.5 mm): [ACM-06 p.110–111 · Table 6.1 · MEASURED · ctx; ACM-06 p.149 · Fig. C.1 · MEASURED · ~fig]

| Panel, series | First point | Last point | Citation |
|---|---|---|---|
| Left, measured | ~14.0 mm at ~10 s | ~18.7 mm at ~120 s | [ACM-06 p.149 · Fig. C.1 · MEASURED · ~fig, single-test] |
| Left, calculated | ~14.4 mm at ~10 s | ~18.0 mm at ~120 s (the curves cross near ~70–80 s at ~17.5 mm) | [ACM-06 p.149 · Fig. C.1 · MODELED · ~fig, single-test] |
| Right, measured | ~7.8 mm at ~10 s (about 8 mm until ~30 s, then rising) | ~11.3 mm at ~114 s | [ACM-06 p.149 · Fig. C.1 · MEASURED · ~fig, single-test] |
| Right, calculated | ~9.5 mm at ~10 s | ~11.1 mm at ~114 s (meets the measured curve near the end) | [ACM-06 p.149 · Fig. C.1 · MODELED · ~fig, single-test] |

- The steady flame-temperature solution was combined with the transient radiation fraction and flame height to estimate the transient flame-sheet temperature. [ACM-06 p.149 · MODELED]
- Fig. C.2, captioned "Radiative loss fraction empirical correlation for steady flames generated by the 25 mm BRE burner and ethylene-diluent mixture", has two panels: X_r (0–1) on the left axis, T_f (K; 1000–1700 left panel, 1000–1800 right panel) on the right axis, time (s); series "Measured Xr" (solid), "Calculated Xr" (dashed), "Calculated Tf" (dotted; "Calcuted Tf" in the right legend); the two tests are not identified, and oxygen, pressure, platform, ignition, enclosure and ambient temperature are not given for them. [ACM-06 p.150 · Fig. C.2 · MEASURED · nominal]

Points read from Fig. C.2 (25 mm BRE burner, ethylene-diluent mixture, steady flames, tests not identified; read tolerance ±10 s, ±0.1 in X_r, ±50 K): [ACM-06 p.150 · Fig. C.2 · MEASURED · ~fig]

| Panel, series | Early point | Late point | Citation |
|---|---|---|---|
| Left, measured X_r | ~0.44 at ~10 s | ~0.61 at ~120 s | [ACM-06 p.150 · Fig. C.2 · MEASURED · ~fig, single-test] |
| Left, calculated X_r | ~0.51 at ~10 s | ~0.56 at ~120 s | [ACM-06 p.150 · Fig. C.2 · MODELED · ~fig, single-test] |
| Left, calculated T_f | ~1640 K at ~10 s (maximum) | ~1490 K at ~115 s (minimum near the end; ~1500 K at ~120 s) | [ACM-06 p.150 · Fig. C.2 · MODELED · ~fig, single-test] |
| Right, measured X_r | ~0.46 at ~10 s | ~0.56 at ~114 s | [ACM-06 p.150 · Fig. C.2 · MEASURED · ~fig, single-test] |
| Right, calculated X_r | ~0.46 at ~10 s | ~0.52 at ~114 s | [ACM-06 p.150 · Fig. C.2 · MODELED · ~fig, single-test] |
| Right, calculated T_f | ~1740 K at ~10 s (similar at ~30 s) | ~1580 K at ~114 s (minimum) | [ACM-06 p.150 · Fig. C.2 · MODELED · ~fig, single-test] |

- The surface net heat flux was measured by the two heat-flux sensors, and the analytical algorithm computed the surface-average convective, radiative and re-radiative fluxes; results for two tests are shown (printed as "Fig. 3"). [ACM-06 p.150 · MEASURED]
- Fig. C.3 ("Surface measured heat flux at r = 0 and 9.5 mm from center, and transient average heat flux components"): two panels, heat flux (kW/m2; 0–8 left, 0–12 right) against time (s, 0–140); legend black "Net HF center", red "Net HF offset" (offset = r = 9.5 mm), green "Radiative HF", blue "Convective HF", yellow "Re-radiative HF"; the two tests are not identified. [ACM-06 p.14 · AUTHOR-INTERPRETATION · ctx; ACM-06 p.151 · Fig. C.3 · MEASURED]

Points read from Fig. C.3 (BRE burner surface; burner size, fuel, oxygen, pressure and platform not given for these tests; read tolerance ±10 s and ±0.5 kW/m² left panel, ±1 kW/m² right panel; measured = net flux at a sensor, computed = surface average): [ACM-06 p.151 · Fig. C.3 · MEASURED · ~fig]

| Panel, series | Reads | Citation |
|---|---|---|
| Left, net HF centre (r = 0), measured | ~5.5 kW/m² at ~10 s; ~4.75 at ~122 s, the last level before a spike to ~6.1 at ~123 s and a fall to ~1.0 by ~140 s | [ACM-06 p.151 · Fig. C.3 · MEASURED · ~fig, single-test] |
| Left, net HF offset (r = 9.5 mm), measured | from above 8 kW/m² at the start down to a minimum of ~1.5 at ~33 s, a step up to ~3.5 at ~34 s; ~2.8 at ~122 s before shut-down (~0.2 by ~140 s) | [ACM-06 p.151 · Fig. C.3 · MEASURED · ~fig, single-test] |
| Left, radiative HF, computed | from above 8 kW/m² at the start to ~3.1 at ~25 s; ~2.9 at ~122 s | [ACM-06 p.151 · Fig. C.3 · MODELED · ~fig, single-test] |
| Left, convective HF, computed | ~2.2 kW/m² at ~1 s; ~0.45 at ~122 s | [ACM-06 p.151 · Fig. C.3 · MODELED · ~fig, single-test] |
| Left, re-radiative HF, computed | rising from 0 at 0 s to ~0.57 kW/m² at ~123 s | [ACM-06 p.151 · Fig. C.3 · MODELED · ~fig, single-test] |
| Right, net HF centre (r = 0), measured | starts near the 12 kW/m² axis top, ~10.5 at ~10 s; minimum ~5.3 at ~36 s, recovering to ~8.0 by ~45 s; ~7.4 at ~130 s, the last level before a spike to ~8.7 at ~131 s and a fall to ~1.8 by ~136 s | [ACM-06 p.151 · Fig. C.3 · MEASURED · ~fig, single-test] |
| Right, net HF offset (r = 9.5 mm), measured | from ~8.0 kW/m² at ~10 s to a minimum of ~0.8 at ~72 s, a step up to ~5.0 at ~73 s; ~4.5 at ~130 s before shut-down | [ACM-06 p.151 · Fig. C.3 · MEASURED · ~fig, single-test] |
| Right, radiative HF, computed | from above 12 kW/m² at the start to a minimum of ~4.1 at ~38 s; ~4.5 at ~130 s (brief spike to ~5.2 at ~131 s) | [ACM-06 p.151 · Fig. C.3 · MODELED · ~fig, single-test] |
| Right, convective HF, computed | ~1.2 kW/m² at ~8 s after an initial spike near 0 s; ~0.8 at ~130 s | [ACM-06 p.151 · Fig. C.3 · MODELED · ~fig, single-test] |
| Right, re-radiative HF, computed | rising from 0 at 0 s to ~0.8 kW/m² at ~130 s | [ACM-06 p.151 · Fig. C.3 · MODELED · ~fig, single-test] |

### Appendix D: the ISS parameter sheet (Tables D.1, D.2)
- The BRE runs on the ISS took place in the Combustion Integrated Rack (CIR) under the Advanced Combustion via Microgravity Experiments (ACME) programme and were executed automatically by software written by the NASA team. [ACM-06 p.24 · MEASURED · ctx]
- Before each test point day a parameter spreadsheet went to the NASA operations team (Table D.1, an example; meanings in Table D.2): 69 parameters, among them fuel and nitrogen volumetric flow rates, the ambient conditions of each test, camera settings and igniter position, in effect the day's test matrix in much more detail, which helped the operators run the tests. [ACM-06 p.24 · MEASURED · ctx, nominal; ACM-06 p.152 · MEASURED · nominal]
- There were two rounds of tests, each of 8 test point days of 12 hours; the UMD team monitored the tests and changed the parameter sheet when needed. [ACM-06 p.25 · MEASURED · ctx]
- Table D.1 is printed as "An example of the patameters table submitted to NASA operations team before each test point day", showing only two test points, 21028A1 and 21028B1 (keys BRE:21028A1, BRE:21028B1), as columns "1st test point" and "2nd test point". [ACM-06 p.152 · Table D.1 · MEASURED · nominal]
- Table D.1 values common to both test points (ISS; fuel not named in the table): igniterIgnitionPosition 2300; igniterPreheatPowerV 3; igniterPreheatTimeMs 2000; igniterIgnitionPowerV 3.75; igniterIgnitionDurationMs 3000; igniterDelayBeforeRetractMs 3000; igniterRetractVelocityCountsPerSec 3000; useIgnitionDetection, extinctionDetectionStopsTest and useFoma TRUE; flowTimeoutSec 160; nitrogenPriming1DurationSec and nitrogenPriming2DurationSec 0; stabilizationTime1Sec and stabilizationTime2Sec 4; ignitionToTestRampTimeSec 1; constantFlowTimeSec 90; numberOfRampHolds 0; rampSizePercent −20; rampDurationSec 2; holdDurationSec 10; temperatureLimitCriticalC 300; temperatureLimitC 250; useCenterThermocouple, useOffsetThermocouple, useCenterFluxThermocouple and useOffsetFluxThermocouple TRUE; preflowFuelRateSlpm 0; Estimated Burn Time (sec) 90; GC Sample (Before, After or No) No; Recirculation (After or No) No. [ACM-06 p.24 · MEASURED · ctx, nominal; ACM-06 p.152–154 · Table D.1 · MEASURED · nominal]

| Table D.1 parameter (differs between the test points) | 21028A1 | 21028B1 | Citation |
|---|---|---|---|
| fuelFlowIgnitionDeltaMs | 26000 | 40000 | [ACM-06 p.153 · Table D.1 · MEASURED · nominal, single-test] |
| fuelBottleIgnitionFlowRateN2Slpm; fuelBottleTestFlowRateN2Slpm | 0.077; 0.077 | 0.0513; 0.0513 | [ACM-06 p.153 · Table D.1 · MEASURED · nominal] |
| nitrogenIgnitionFlowRateN2Slpm; nitrogenTestFlowRateN2Slpm | 0.0947; 0.0947 | 0.0632; 0.0632 | [ACM-06 p.153 · Table D.1 · MEASURED · nominal] |
| preflowFlowDurationSecs; preflowNitrogenRateSlpm; preflowWaitDurationSecs | 0; 0; 0 | 5; 0.16; 300 | [ACM-06 p.154 · Table D.1 · MEASURED · nominal] |
| Chamber fill pressure (psia); chamber fill O2 %; chamber fill N2 % ("Chamber & GC Operations") | 14.7; 40; 60 | empty cells | [ACM-06 p.154 · Table D.1 · MEASURED · nominal, single-test] |

| Table D.1 "Estimated Flow Calculations" (chamber fill printed for 21028A1 only; fuel not named; ISS) | 21028A1 | 21028B1 | Citation |
|---|---|---|---|
| Valve Timer Time (seconds) | 128 | 142 | [ACM-06 p.24 · MODELED · ctx; ACM-06 p.154–155 · Table D.1 · MODELED] |
| Est. Nitrogen Flow (liters) | 0.2020 | 0.1629 | [ACM-06 p.154–155 · Table D.1 · MODELED] |
| Est. Fuel Flow Using All Parameters (liters) | 0.1643 | 0.1214 | [ACM-06 p.154–155 · Table D.1 · MODELED] |
| Est. Fuel Flow Using Est. Burn Time (liters) | 0.1155 | 0.0770 | [ACM-06 p.154–155 · Table D.1 · MODELED] |

- Table D.2, "Explanation of the parameters used in the parameters spreadsheet (table D.1)", gives for each parameter a default value, typical value, limits, relation to other parameters and meaning; times in ms or s and flow rates in SLPM on an N2 basis as the parameter names state. [ACM-06 p.155 · Table D.2 · AUTHOR-INTERPRETATION]

| Table D.2 parameter | Default | Limits | Relation and meaning (paraphrased) | Citation |
|---|---|---|---|---|
| testpointName | NONE (typical YYGMTxx) | 7 characters, even without IPSU1 | name used by the IPSUs and the ACME data file (image and data file names, directories); YY last two digits of the year, GMT the GMT day, xx A1, B1, C1 … | [ACM-06 p.155 · Table D.2 · AUTHOR-INTERPRETATION] |
| igniterIgnitionPosition | 0 | 0–2400 for the 25 mm burner, 0–2325 for the 50 mm burner (Igniter Arm 1) | igniter position, in counts, for preheat and ignition | [ACM-06 p.157 · Table D.2 · AUTHOR-INTERPRETATION] |
| igniterPreheatPowerV | 0 | 0.46–4.5 V | igniter voltage during preheat | [ACM-06 p.157 · Table D.2 · AUTHOR-INTERPRETATION] |
| igniterPreheatTimeMs | 0 | — | preheat powering time (ms), before igniterIgnitionDurationMs | [ACM-06 p.157 · Table D.2 · AUTHOR-INTERPRETATION] |
| igniterIgnitionPowerV | 3.75 | 0.46–4.5 V | igniter voltage during ignition | [ACM-06 p.157 · Table D.2 · AUTHOR-INTERPRETATION] |
| igniterIgnitionDurationMs | 2000 | — | ignition powering time (ms), cut short when ignition is detected; counted from fuelFlowIgnitionDeltaMs: after fuel flow starts if that is positive, before it if negative | [ACM-06 p.157 · Table D.2 · AUTHOR-INTERPRETATION] |
| igniterDelayBeforeRetractMs | 1500 | — | time (ms) the igniter stays in the ignition position before retracting, counted from the start of igniterIgnitionDurationMs | [ACM-06 p.157 · Table D.2 · AUTHOR-INTERPRETATION] |
| igniterRetractVelocityCountsPerSec | 2000 | — | retraction speed (counts/s) when ignition is not detected | [ACM-06 p.158 · Table D.2 · AUTHOR-INTERPRETATION] |
| useIgnitionDetection | true (typical true) | true or false | whether ignition detection is used; on detection the igniter switches off and retracts | [ACM-06 p.158 · Table D.2 · AUTHOR-INTERPRETATION] |
| extinctionDetectionStopsTest | true (typical true) | true or false | whether extinction detection is used; on detected or operator-commanded extinction the script stops gas flow and IPSU imaging and runs to its end | [ACM-06 p.158 · Table D.2 · AUTHOR-INTERPRETATION] |
| useFoma | true (typical true) | true or false | whether gas flow is used for the test points | [ACM-06 p.159 · Table D.2 · AUTHOR-INTERPRETATION] |
| flowTimeoutSec | 120 | — | total gas-flow time (s) in the script, counted from the start of fuel flow; flow stops after it if the script has not ended | [ACM-06 p.159 · Table D.2 · AUTHOR-INTERPRETATION] |
| nitrogenPriming1DurationSec | 0 | minimum 1 if used, whole seconds; 0 if not | N2 flow time (s) before fuel flow, at nitrogenIgnitionFlowRateN2Slpm, before IPSU archiving, before the CIR fuel manifold opens and before priming 2; left out of the script if no rate is set | [ACM-06 p.159 · Table D.2 · AUTHOR-INTERPRETATION] |
| nitrogenPriming2DurationSec | 0 | minimum 0.1 if used, tenths of a second; 0 if not | N2 flow time (s) before fuel flow, starting once the CIR fuel manifold is open, at nitrogenIgnitionFlowRateN2Slpm; kept in the script even if no rate is set | [ACM-06 p.159 · Table D.2 · AUTHOR-INTERPRETATION] |
| fuelFlowIgnitionDeltaMs | 1000 | positive or negative, steps of 100 ms | time (ms) fuel (and nitrogen) flows before or after the start of igniterIgnitionDurationMs | [ACM-06 p.159 · Table D.2 · AUTHOR-INTERPRETATION] |
| stabilizationTime1Sec | 4 | — | wait (s) after the igniter starts retracting, before fuel (and nitrogen) rise to test flow rates | [ACM-06 p.160 · Table D.2 · AUTHOR-INTERPRETATION] |
| stabilizationTime2Sec | 4 | — | wait (s) after ignitionToTestRampTimeSec, before the fiber moves into its test position (fiberTestPosition) | [ACM-06 p.160 · Table D.2 · AUTHOR-INTERPRETATION] |
| fuelBottleIgnitionFlowRateN2Slpm | 1.2 | at most the installed fuel mass-flow controller | initial fuel-bottle flow (SLPM, N2 basis) through stabilizationTime1Sec | [ACM-06 p.160 · Table D.2 · AUTHOR-INTERPRETATION] |
| nitrogenIgnitionFlowRateN2Slpm | 0 | at most the installed bypass mass-flow controller | initial nitrogen flow (SLPM, N2 basis) through stabilizationTime1Sec | [ACM-06 p.160 · Table D.2 · AUTHOR-INTERPRETATION] |
| fuelBottleTestFlowRateN2Slpm | 1.2 | at most the installed fuel mass-flow controller | fuel-bottle flow (SLPM, N2 basis) from the end of ignitionToTestRampTimeSec to the end of constantFlowTimeSec | [ACM-06 p.160 · Table D.2 · AUTHOR-INTERPRETATION] |
| nitrogenTestFlowRateN2Slpm | 0 | at most the installed bypass mass-flow controller | nitrogen flow (SLPM, N2 basis) over the same interval | [ACM-06 p.160 · Table D.2 · AUTHOR-INTERPRETATION] |
| ignitionToTestRampTimeSec | 5 | minimum 1 when ramping between ignition and test rates; 0 when they are equal | ramp time (s) from the ignition to the test fuel and nitrogen rates after stabilizationTime1Sec; skipped when both fuel rates and both nitrogen rates are equal | [ACM-06 p.160 · Table D.2 · AUTHOR-INTERPRETATION] |
| constantFlowTimeSec | 30 | effectively whole seconds (decimals allowed, but timing is checked once per second) | hold (s) at constant flow before the script continues; starts after fiber movement starts (fiber with movement), after the fiber starts moving into position (fiber without movement), or after stabilizationTime2Sec (no fiber) | [ACM-06 p.160 · Table D.2 · AUTHOR-INTERPRETATION] |
| numberOfRampHolds | 0 | — | number of ramp-and-hold steps after constantFlowTimeSec | [ACM-06 p.161 · Table D.2 · AUTHOR-INTERPRETATION] |
| rampSizePercent | −20 | positive or negative | per-ramp change of flow rate (%), based on the fuel-bottle and nitrogen test rates; used only when numberOfRampHolds > 0, else left at default | [ACM-06 p.161 · Table D.2 · AUTHOR-INTERPRETATION] |
| rampDurationSec | 2 | tenths of a second, minimum 1 | time (s) to ramp to the next flow rate; used only when numberOfRampHolds > 0 | [ACM-06 p.161 · Table D.2 · AUTHOR-INTERPRETATION] |
| holdDurationSec | 10 | — | hold (s) at the flow rate after each ramp; used only when numberOfRampHolds > 0 | [ACM-06 p.161 · Table D.2 · AUTHOR-INTERPRETATION] |
| temperatureLimitCriticalC | 300 | — | temperature (°C) at which any enabled thermocouple ends the test point: all flows stop, and the script still collects post-flame data and images and closes the test point in order | [ACM-06 p.161 · Table D.2 · AUTHOR-INTERPRETATION] |
| temperatureLimitC | 250 | — | temperature (°C) at which any enabled thermocouple ends constantFlowTimeSec and moves the script on to ramping | [ACM-06 p.161 · Table D.2 · AUTHOR-INTERPRETATION] |
| useCenterThermocouple; useOffsetThermocouple; useCenterFluxThermocouple; useOffsetFluxThermocouple | true | true or false | whether that thermocouple enters the temperature-limit checks | [ACM-06 p.161 · Table D.2 · AUTHOR-INTERPRETATION] |
| preflowFlowDurationSecs | 0 | above 5 if preflow is used; 0 if not | time (s) of fuel-bottle and/or nitrogen flow before gas flow for ignition starts | [ACM-06 p.161 · Table D.2 · AUTHOR-INTERPRETATION] |
| preflowFuelRateSlpm; preflowNitrogenSlpm | 0; 0 | at most the installed fuel and bypass mass-flow controllers | fuel-bottle and nitrogen flow (SLPM, N2 basis) during the preflow; used only when preflowFlowDurationSecs > 0 | [ACM-06 p.162 · Table D.2 · AUTHOR-INTERPRETATION] |
| preflowWaitDurationSecs | 300 | above 50 if preflow is used | wait (s) after the preflow before gas flow for ignition starts; used only when preflowFlowDurationSecs > 0 | [ACM-06 p.162 · Table D.2 · AUTHOR-INTERPRETATION] |

### Appendices E and F: methane-nitrogen (25 mm) and ethylene-nitrogen (50 mm) ISS tests
- Columns of Tables E.1 and F.1: test ID; Δh_c (kJ/g); X_O2 before and after test; p (bar); ṁ'' (g/m2-s); oscillation time (s); extinction time (s); end condition; q̇''_CTR and q̇''_off (kW/m2); T_s (printed "0C"); calorimeter (kW/m2); X_r; h_f (mm). [ACM-06 p.163–164 · AUTHOR-INTERPRETATION]
- Sensors: local heat flux from two Medtherm Schmidt-Boelter gauges flush with the burner surface, which also give their surface temperatures; Fig. 2.1 places the centre gauge at r = 0 mm, the offset gauge at r = 9.5 mm, the centre thermocouple at r = 4.7 mm and the offset thermocouple at r = 10.4 mm. [ACM-06 p.25 · Fig. 2.1 · MEASURED · ctx, nominal]
- The 25 mm gaseous-fuel burner's top surface is a perforated copper sheet with 125 holes of 1.2 mm diameter, and a ceramic flow straightener keeps the fuel mass uniform over it. [ACM-06 p.25 · MEASURED · ctx, nominal]
- Methane (methane-nitrogen) was used in some ISS tests, with the 25 mm burner, and all of those flames self-extinguished within 45 seconds (X_O2, p and ṁ'' per test in Table E.1; flow direction, ignition method and location, ambient temperature not given in the pages read). [ACM-06 p.163 · MEASURED]
- Table E.1 ("Test results obtained from Methane-Nitrogen mixture and 25 mm burner") has 30 rows, one per test (IDs such as 20279B7 … 20339J3), every row ending SE; X_r cells hold a number, "x" or "-", and some cells are empty. [ACM-06 p.163 · Table E.1 · MEASURED]
- Part of the ISS programme used the 50 mm burner with ethylene-nitrogen; several of those tests burned for the whole test duration, but oscillations began before the fuel was shut off (X_O2, p and ṁ'' per test in Table F.1; flow direction, ignition, ambient temperature not given in the pages read). [ACM-06 p.164 · MEASURED]
- Table F.1 ("Test results obtained by the 50 mm burner and ethylene-nitrogen mixture") has 24 rows (IDs such as 20247A1 … 21028G5), end condition FTO or SE; X_r is "-" in every row except the last, and some cells are empty. [ACM-06 p.164 · Table F.1 · MEASURED]
- For these 50 mm tests X_r was computed from the correlation of refs. [52,60] and used with Eq. (6.17) to estimate flame temperature and judge whether the flames could become steady; every computed flame temperature fell below the 1100 K to 1200 K critical range (ethylene-nitrogen, 50 mm burner, ISS). [ACM-06 p.164 · MODELED]
- Fig. F.1, "Preliminary examination of calculated flame temperatures obtained by the 50 mm burner", plots calculated flame temperature (K, 500–1200, linear) against fuel-mixture mass flux (g/m2s, 0–4, linear); 15 legend series with codes as printed (codes not explained in the figure), listed here in a different order from the legend: six FT series with filled markers (O34-P56-F25-FT; O34-p1-F100-50mm-FT; O40-p1-F33-50mm-FT; O40-p1-F100-50mm-FT; O40-p1-F50-50mm-FT; O40-P1-F20-FT) and nine SE series with open markers (O27-p1-F33-50mm-SE; O27-p1-F50-50mm-SE; O27-p1-F100-50mm-SE; O34-p1-F33-50mm-SE; O34-p1-F50-50mm-SE; O34-p1-F66-50mm-SE; O34-p1-F76-50mm-SE; O34-p1-F100-50mm-SE; O40-p1-F100-50mm-SE). [ACM-06 p.165 · Fig. F.1 · MODELED · nominal]

Points read from Fig. F.1 (50 mm burner, Appendix F ethylene-nitrogen, ISS; oxygen, pressure and flow only as coded in the legend; read tolerance ±50 K, ±0.5 g/m2s): [ACM-06 p.164 · MEASURED; ACM-06 p.165 · Fig. F.1 · MODELED · ~fig]

| Series | Reads: calculated flame temperature at fuel-mixture mass flux | Citation |
|---|---|---|
| O34-p1-F100-50mm-FT (4 markers) | highest ~1112 K at ~1.48 g/m2s; lowest ~1051 K at ~1.49 g/m2s | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig] |
| O40-p1-F50-50mm-FT (2 markers) | ~1021 K at ~2.99; ~1001 K at ~2.98 g/m2s | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig] |
| O40-p1-F100-50mm-FT (1 marker) | ~1078 K at ~1.51 g/m2s | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig, single-test] |
| O40-p1-F33-50mm-FT (1 marker) | ~891 K at ~2.98 g/m2s | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig, single-test] |
| O40-p1-F100-50mm-SE (3 markers) | highest ~1092 K at ~1.49; ~1078 K at ~1.51 (highest mass flux); lowest ~960 K at ~1.06 g/m2s (lowest mass flux) | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig] |
| O34-p1-F100-50mm-SE (2 markers) | ~1091 K at ~1.50; ~1030 K at ~1.25 g/m2s | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig] |
| O34-p1-F76-50mm-SE (1 marker) | ~1091 K at ~1.73 g/m2s | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig, single-test] |
| O34-p1-F66-50mm-SE (1 marker) | ~1064 K at ~1.97 g/m2s | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig, single-test] |
| O34-p1-F50-50mm-SE (2 markers) | ~1012 K at ~2.48; ~972 K at ~2.05 g/m2s | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig] |
| O34-p1-F33-50mm-SE (1 marker) | ~941 K at ~2.98 g/m2s | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig, single-test] |
| O27-p1-F100-50mm-SE (4 markers) | highest ~1075 K at ~1.49; lowest ~1044 K at ~1.50 (highest mass flux); ~1064 K at ~1.24 g/m2s (lowest mass flux) | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig] |
| O27-p1-F33-50mm-SE (3 markers) | highest ~954 K at ~2.97 (highest mass flux); lowest ~798 K at ~1.97 g/m2s (lowest mass flux) | [ACM-06 p.165 · Fig. F.1 · MODELED · ~fig] |

### PSI-20 — ACME BRE: the PSI investigation record
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Advanced Combustion via Microgravity Experiments - Burning Rate Emulator (acronym ACME BRE); proposal title "Experimental Investigation of Emulated Burning Rate at Various Gravity Levels" | [PSC-01 p.6 · AUTHOR-INTERPRETATION] |
| Links | investigation page https://psi.nasa.gov/physci/repo/data/investigations/PSI-20; DOI 10.60555/vb93-3y72; hardware pages https://www1.grc.nasa.gov/space/iss-research/iss-fcf/cir/ and https://www1.grc.nasa.gov/space/iss-research/iss-fcf/combustion-science/acme/ | [PSC-01 p.6 · AUTHOR-INTERPRETATION] |
| Type and area | Microgravity Investigation; Combustion Science › Flames of Gaseous Fuels | [PSC-01 p.6 · AUTHOR-INTERPRETATION] |
| Platform and hardware | flight program and flight platform International Space Station (ISS); experiment hardware Combustion Integrated Rack (CIR), ACME | [PSC-01 p.6 · AUTHOR-INTERPRETATION] |
| Programme | space program NASA; managing center Glenn Research Center (GRC); sponsoring agency NASA; funding NNX10AD98G, NNX15AD06A, 80NSSC20M0119 | [PSC-01 p.6 · AUTHOR-INTERPRETATION] |
| Dates | investigation 01-01-2010 to 02-08-2025 (MM-DD-YYYY) | [PSC-01 p.6 · AUTHOR-INTERPRETATION] |
| Keywords | Buoyancy; Diffusion Flames; Fire Safety; Heat Flux; Radiative Extinction; Polymer; ACME; Extinction Limit; Flammability; Modeling; Triple Flame | [PSC-01 p.7 · AUTHOR-INTERPRETATION] |
| Record | licence Creative Commons Zero v1.0 Universal (CC0-1.0); last modified 05-Jun-2025, version 4 | [PSC-01 p.7 · AUTHOR-INTERPRETATION] |
| People | James G. Quintiere (University of Maryland), Principal Investigator; John L de Ris (no affiliation given), Co-Investigator; Peter Sunderland (University of Maryland), Project Scientist; Dennis Stocker (NASA GRC), Project Scientist | [PSC-01 p.8 · AUTHOR-INTERPRETATION] |
| Publications | 16 listed (Publication 1 to 16, each with authors, title, DOI and status; Publication 3 has "DOI: none listed"); the list stays in the PSI record | [PSC-01 p.8–9 · AUTHOR-INTERPRETATION] |
| Files | by top folder: Experimental table 1, file `PSI-20_Experimental table_ACME BRE.csv`; total size 2035568427496 bytes as given | [PSC-01 p.10 · AUTHOR-INTERPRETATION] |

- Objective: establish burning conditions in a quiescent microgravity ambient in terms of material properties. [PSC-01 p.7 · AUTHOR-INTERPRETATION]
- Objective 1: observe burning behaviour in long-duration microgravity for CH4/N2 and C2H4/N2 mixtures on porous circular burners 25 and 50 mm in diameter, in O2/N2 ambients at various pressures and O2 concentrations, stressing fuel conditions that relate to a wide range of condensed fuels; the NASA-considered atmospheres for human space missions are to be examined: 14.7 psia with 21 % oxygen, 10.2 psia with 26.5 %, and 8.2 psia with 34 % oxygen. [PSC-01 p.7 · AUTHOR-INTERPRETATION · nominal]
- Objective 2: the Objective 1 conditions in O2/CO2 ambients (marked desired); Objective 3: the conditions of Objectives 1–2 for extinction limits. [PSC-01 p.7 · AUTHOR-INTERPRETATION]
- Hypotheses (microgravity; other condition fields not given for them): a regime of quasi-steady burning can exist in microgravity as a function of material properties, or steady burning may never be reached and only slowly changing unsteady flames are possible; the ISS tests aim to test this by establishing a range of quasi-steady burning conditions for condensed fuels; the BRE can determine burning conditions in microgravity as a function of heat of gasification, re-radiation heat flux, applied radiant heat flux, heat of combustion and smoke point. [PSC-01 p.7 · AUTHOR-INTERPRETATION]
- Hypotheses, continued: this could make the cone calorimeter (NASA Test 2) a basis for flammability maps of real materials; the key hypothesis is that the fuel mixture's heat of combustion, smoke point and heat of gasification represent a real solid fuel (or a liquid fuel absorbed in an inert matrix), so steady burning achieved this way would represent the potential of real solid fuels to burn steadily in microgravity; the record states that, apart from a candle flame, this had not been shown before. [PSC-01 p.7 · AUTHOR-INTERPRETATION]
- Approach, flight tests: flight experiments, plus preliminary flight tests to verify operations and compare with ground tests; for each test the chamber diluent, oxygen concentration and pressure are set, fuel flow starts, then ignition, and the flame is first watched at constant fuel flow; as burner surface temperature and heat flux change, one test spans a broad range of conditions, and a steady flame on a warming burner gives a continuous data set for the flammability map. [PSC-01 p.7 · AUTHOR-INTERPRETATION · nominal]
- Approach, test end: the fuel is shut off when the flame goes out, the burner surface temperature levels off, or the heat-flux sensor nears its temperature limit; once the burner temperature is steady and the sensor is within its limit, the flow can be lowered in small steps until extinction, giving further map data. [PSC-01 p.7–8 · AUTHOR-INTERPRETATION · nominal]
- Approach, other work: ignition-limit tests are planned in normal gravity, not in microgravity, the investigators believing Earth-based ignition testing is better controlled and should carry over to microgravity; normal-gravity tests with gaseous, liquid and solid fuels continue, to further validate the BRE for 1-g use and for 1-g ignition and extinction limits; drop facilities, as available, refine procedures and instruments and help find viable flow conditions; a CFD model of quiescent microgravity burning is pursued to guide the flights and possibly predict. [PSC-01 p.8 · AUTHOR-INTERPRETATION · nominal]
- Stated impacts: BRE produced important data for spacecraft fire safety; quasi-steady burning matching various condensed-phase materials (such as PMMA and Nylon) was seen in microgravity with no air flow, although stopping ventilation is an established step in putting out spacecraft fires; this burning without air flow was seen notably in elevated-oxygen atmospheres being considered for future spacecraft, whereas such flames in a normal 21 % oxygen atmosphere self-extinguished in a short time (oxygen and pressure values of the elevated cases, and time to extinction, not given on this page). [PSC-01 p.8 · AUTHOR-INTERPRETATION]
- The record calls the results still preliminary, but says they suggest NASA may want to use its alternative flammability Test 2, with the cone calorimeter, more widely, since that test can measure the material properties corresponding to the microgravity flames seen with the BRE burner. [PSC-01 p.8 · AUTHOR-INTERPRETATION]

## Supersessions
<!-- none: ACM-06 and PSC-01 are both status final in the register, with no version_of, supersedes or same_test links -->

## Conflicts
<!-- all pairs below are within ACM-06 (different pages of the same dissertation); neither side supersedes the other -->

| Quantity | Source A: value · conditions · citation | Source B: value · conditions · citation | Reason for the difference |
|---|---|---|---|
| Number of fuel-terminated (steady) flames that burned for the whole test | 49 (of 103 ignited, 25 mm burner, nominal X_O2 0.21–0.40, Chapter 5 summary; "all 49 steady flames" in Fig. 6.2; 49 FT flames in Fig. 6.1) · [ACM-06 p.107 · MEASURED; ACM-06 p.113–114 · Fig. 6.2 · MEASURED] | 46 (of 146 ignited aboard the ISS, three minutes for most, Chapter 6 summary) · [ACM-06 p.139 · MEASURED] | not stated in the sources |
| How close the fuel-terminated flames were to steady at shut-off | 0.953 of the asymptotic height (95.3 %), standard deviation 0.019 (1.9 %) · 49 FT flames, 25 mm burner, ISS · [ACM-06 p.107–108 · MODELED; ACM-06 p.113 · Fig. 6.1 · MODELED] | size 94 % of the steady value on average, standard deviation 1.9 % · the 46 full-duration flames, ISS · [ACM-06 p.139 · MODELED] | not stated in the sources |
| Radiation fraction of steady flames | stayed below 0.6 for all steady flames · ISS BRE, 25 and 50 mm burners, ethylene-nitrogen · [ACM-06 p.140–141 · MEASURED] | first steady flames at X_r ~0.65 for X_O2 0.4 (Figs. 6.9–6.11); a fuel-terminated point at X_r ~0.65 (Δh_c 35.9 kJ/g, X_O2 0.4, 1 bar) read from Fig. 6.8 · 25 mm burner, ethylene-diluent, ISS · [ACM-06 p.123 · Fig. 6.8 · MEASURED · ~fig; ACM-06 p.126 · MEASURED; ACM-06 p.128 · Fig. 6.9 · MEASURED] | not stated in the sources |
| How the radiative extinction limit on the maps was obtained | theoretically: T_f set to 1100 or 1200 K and Eqs. 6.6–6.18 solved numerically; limits "based on theory [52]"; "theoretically obtained" in the conclusions · [ACM-06 p.124 · MODELED · nominal; ACM-06 p.132 · AUTHOR-INTERPRETATION; ACM-06 p.143 · MODELED · nominal] | empirically, by a line through the range that separates self-extinguished and steady flames (Chapter 6 summary) · [ACM-06 p.139 · AUTHOR-INTERPRETATION] | not stated in the sources |
| End-point flame size of test point 66D5 (key BRE:19066D5), as each item names it | Table 3.1: y_f 6.3 mm (flame height), r_f 13 mm (flame radius at its base) · X_O2 0.34, X_f 0.5, p 0.58 bar, t_b 180 s, FT · [ACM-06 p.32 · Table 3.1 · MEASURED · ctx, single-test; ACM-06 p.13–14 · MEASURED · ctx] | Fig. B.1 last points at ~184 s: "Flame length" ~8.4 mm, "Flame base radius" ~6.3 mm · same test · [ACM-06 p.148 · Fig. B.1 · MEASURED · ~fig, single-test] | not stated in the sources |
| End-point flame heights of tests 19070C1 and 20352A2 | Table 6.1 y_f 25.6 mm (19070C1, end at 120 s) and 17.37 mm (20352A2, end at 133.43 s) · [ACM-06 p.110–111 · Table 6.1 · MEASURED · ctx] | Fig. C.1 last measured points ~18.7 mm at ~120 s (left panel) and ~11.3 mm at ~114 s (right panel); the caption does not say which panel is which test · [ACM-06 p.149 · Fig. C.1 · MEASURED · ~fig] | not stated in the sources |

## Open items / gaps
- Not found in the 33 curated documents: heat-of-gasification values (L, as used on the BRE flammability maps) for spacecraft cabin materials such as Nomex, Ultem, Kapton, silicone, SIBAL, PTFE, polyimide, polycarbonate or Mylar, which would place them on the maps beside the Table 6.2 materials.
- Not found in the 33 curated documents: BRE burning-emulation results at partial gravity (lunar or Martian levels); the BRE data in this document are ISS microgravity and 1-g results.

# FILE: PSI_CATALOGUE
# PSI_CATALOGUE — NASA PSI Combustion Science investigation records

## Scope
Covers: the PSI snapshot PSC-01 of NASA's Combustion Science investigation records (24 records): how the snapshot is read, each record's identity, conditions, objectives, hypotheses, approach, stated impacts, people, publication counts and data files. Gaseous-flame (ACME family, SLICE, SPICE, PSI-60, PSI-142), droplet (CFI, FLEX, FLEX-2, PSI-117) and smoke-aerosol (DAFT, SAME, SAME-R, PSI-115) records are here in full.
Not here: for the burner and solid-fuel records only identity, conditions and plan are here; their other record fields (links, people, publications, files, reported results) are in BURNER_EMULATION_2 (PSI-20 BRE), BASS_ISS_SOLIDS_4 (PSI-25 BASS-II, PSI-26 BASS, PSI-62) and LARGE_SCALE_FIRES_1 (PSI-98 to PSI-100 Saffire I–III). The campaign papers behind these records are in BURNER_EMULATION_1–2, BASS_ISS_SOLIDS_1–4 and LARGE_SCALE_FIRES_1–2; the as-run BASS test matrices (PSD-01 to PSD-03) are in BASS_ISS_SOLIDS_4.

## Conditions covered
| Record | Fuel or sample, form | Platform, hardware, project type | Atmosphere: O2, diluent, pressure | Flow | Ignition, enclosure, other | Investigation dates (MM-DD-YYYY) | Not reported by this source | Citation |
|---|---|---|---|---|---|---|---|---|
| PSI-10 ACME/Flame Design | C2H4 and CH4 normal and inverse spherical diffusion flames, also coflow flames; inert N2 or CO2 | Microgravity Investigation; flight program and platform ISS; ACME, Combustion Integrated Rack (CIR), Reconfiguration of CIR; also drop towers | dilution, Zst and pressure varied | flow rate varied; normal and inverse convection directions | — | 01-14-1999 to 04-30-2025 | O2 and pressure values, flow speeds, ignition, ambient temperature, duration | [PSC-01 p.1–2 · AUTHOR-INTERPRETATION · nominal] |
| PSI-20 ACME BRE | CH4/N2 and C2H4/N2 through porous circular burners of 25 and 50 mm diameter, emulating condensed fuels | Microgravity Investigation; ISS; CIR, ACME; plus drop-facility and normal-gravity tests | O2/N2 at various pressures and O2 levels, including the atmospheres NASA considers for human missions: 14.7 psia with 21 % oxygen, 10.2 psia with 26.5 %, 8.2 psia with 34 % oxygen; O2/CO2 desired | quiescent ambient | fuel flow, then ignition; burner surface temperature and heat flux vary during a test | 01-01-2010 to 02-08-2025 | flow speed, ambient temperature, duration | [PSC-01 p.6–8 · AUTHOR-INTERPRETATION · nominal] |
| PSI-21 ACME CLD Flame | methane and ethylene coflow laminar diffusion flames, fuel dilution varied | Microgravity Investigation; ISS; CIR, ACME | fuel dilution varied | velocity varied | — | 10-01-2006 to 05-31-2022 | O2, pressure and flow values, ignition, ambient temperature, duration | [PSC-01 p.10–11 · AUTHOR-INTERPRETATION · nominal] |
| PSI-22 ACME E-FIELD Flames | methane and ethylene, N2-diluted; gas-jet and coflow burners | Microgravity Investigation; ISS; CIR, ACME | N2 dilution from highly stable to near-extinction flames | with and without weak synthetic-air coflow; fuel flow rate and coflow velocity varied | electric field up to 10 kV, polarity varied | 11-18-2016 to 11-17-2020 | O2, pressure and flow values, ignition, ambient temperature, duration | [PSC-01 p.14–15 · AUTHOR-INTERPRETATION · nominal] |
| PSI-23 ACME s-Flame | H2/CH4/diluent (soot-free) and C2H4/diluent (sooty) mixtures through a spherical porous burner; diluents N2, He, CO2 | Microgravity Investigation; ISS; CIR, ACME | issued into an oxidizing environment | flow rates varied | ignited at the burner | 02-05-2015 to 11-24-2019 | O2, pressure and flow values, ambient temperature, duration | [PSC-01 p.18–20 · AUTHOR-INTERPRETATION · nominal] |
| PSI-25 BASS-II | solid fuels as rods, spherical sections, slabs, films and fabric sheets | Microgravity Investigation; ISS; Microgravity Science Glovebox (MSG), small wind tunnel | O2 varied below 21 % by N2 vitiation of the working volume | forced flow up to 40 cm/s, opposed and concurrent | — | 01-01-2010 to 12-31-2022 | pressure, ignition, ambient temperature, duration | [PSC-01 p.24–25 · AUTHOR-INTERPRETATION · nominal] |
| PSI-26 BASS | fabric of 75 % cotton / 25 % fiberglass by mass, Nomex fabric, Ultem; also spheres and cylinders | Microgravity Investigation; ISS; MSG | inert gaseous extinguishing agent assessed | up to 40 cm/s from a variable-speed fan, along the fuel surface, opposed or concurrent | 29-gage Kanthal wire igniter at one end of the fabric; small flow duct of 76 mm x 76 mm cross section | 10-01-2009 to 06-30-2013 | O2 and pressure values, ambient temperature, duration | [PSC-01 p.27–28 · AUTHOR-INTERPRETATION · nominal] |
| PSI-39 CFI | droplets of n-dodecane, n-dodecane/iso-dodecane mixtures and farnesane, needle-suspended or tethered on silicon-carbide fibers | Microgravity Investigation; ISS; Multi-User Droplet Combustion Apparatus (MDCA), CIR | helium dilution; 0.25 atm to 5 atm per the objectives, 0.25 to 0.5 atm per the approach | — | hot-wire igniter, retracted after ignition | 10-01-2020 to 10-20-2021 | O2, flow, enclosure size, ambient temperature, duration | [PSC-01 p.30–31 · AUTHOR-INTERPRETATION · nominal] |
| PSI-47 DAFT / DAFT-2 | Arizona Red Dust aerosol made with GN2, held in 15-liter Mylar bags; modified TSI P-Trak vs DustTrak | Microgravity Investigation; ISS; TSI P-Trak | — | — | — | 03-01-2003 to 06-01-2009 | O2, pressure, flow, ambient temperature, duration | [PSC-01 p.33–34 · AUTHOR-INTERPRETATION · nominal] |
| PSI-60 | SPICE coflow laminar diffusion flame images; Yale and ACME burner configurations modelled | Ground Investigation; NASA PSI grant | — | — | normal gravity and microgravity simulated | 06-05-2019 to 08-29-2022 | fuel, O2, pressure, flow, ignition, ambient temperature, duration | [PSC-01 p.35–36 · AUTHOR-INTERPRETATION · nominal] |
| PSI-62 | PMMA flat sheets, spheres and rods, and wax cylinders, modelled against BASS and BASS-II imagery | Ground Investigation | — | concurrent flame spread | microgravity and normal gravity assessed | 05-01-2019 to 04-30-2021 | O2, pressure, flow speed, ignition, ambient temperature | [PSC-01 p.37–38 · AUTHOR-INTERPRETATION · nominal] |
| PSI-68 FLEX-2 | bi-component and pure liquid fuel droplets, fiber-supported or freely deployed; binary linear arrays | Microgravity Investigation; ISS; CIR, MDCA | O2 0.1 to 0.4 mole fraction, diluent the balance; 0.5 atm to 3.0 atm | droplet translation in some tests | ignitor powered 1 s to 5 s, then retracted; about 2 min settling before a test | 08-12-2016 to 09-30-2019 | enclosure size, ambient temperature, duration | [PSC-01 p.39–41 · AUTHOR-INTERPRETATION · nominal] |
| PSI-69 FLEX | relatively large liquid fuel droplets, free or fiber-supported; LOI procedure: select a smaller droplet size (≈ 3 mm), then increase the droplet size or repeat the test if a finite extinction diameter is observed (steps 2 and 5) | Microgravity Investigation; ISS; CIR-Fluids and Combustion Facility (FCF), MDCA | ambient O2 mole fraction stepped down to non-ignition; 0.5 − 1.5 atm in the LOI tests; suppressants CO2, He, SF6 | small sub-buoyant flow by slow droplet translation in the slow-flow tests | — | 08-01-2007 to 07-31-2016 | ignition method, enclosure size, ambient temperature, duration | [PSC-01 p.46–47 · AUTHOR-INTERPRETATION · nominal] |
| PSI-98 SAFFIRE-I | Sibal fabric (75 % cotton, 25 % fiberglass by weight), about 0.94 m x 0.4 m | Microgravity Investigation; flight program and platform listed as ISS; Saffire 1 enclosure in Cygnus, run after Cygnus deberthed from ISS | — | 20 cm/s air in a large flow duct | sample card in mid-duct | 03-02-2001 to 02-28-2008 | O2, pressure, flow direction, ignition method, ambient temperature, duration | [PSC-01 p.53–54 · AUTHOR-INTERPRETATION · nominal] |
| PSI-99 SAFFIRE-II | card of 9 samples, each 5 cm x 29 cm: SIBAL, silicone, structure PMMA, flat PMMA, PMMA with Nomex | Microgravity Investigation; flight program and platform Cygnus Spacecraft; Cygnus Pressurized Cargo Module, SAFFIRE; run after Cygnus deberthed from ISS | — | 20 or 30 cm/s by material, concurrent or opposed | sample card in mid-duct | 09-30-2016 to 04-01-2017 | O2, pressure, ignition method, ambient temperature, duration | [PSC-01 p.55–56 · AUTHOR-INTERPRETATION · nominal] |
| PSI-100 SAFFIRE-III | SIBAL | Microgravity Investigation; flight program and platform listed as ISS; Saffire III enclosure in Cygnus, run after Cygnus deberthed from ISS | — | 30 cm/s, concurrent or opposed | — | start 04-18-2017 | O2, pressure, sample size, ignition method, ambient temperature, duration | [PSC-01 p.58–59 · AUTHOR-INTERPRETATION · nominal] |
| PSI-101 SAME-R | Pyrell intumescent foam (replacing DBP) among heated samples; smoke | Microgravity Investigation; ISS; Comparitive Soot Diagnostic Hardware (as printed; final report referred to) | — | no flow while the sample heats | higher heating temperatures than SAME; flights July 16 to September 9, 2010, 66 test points | 07-01-2010 to 09-30-2010 | O2, pressure, flow speed, sample temperatures | [PSC-01 p.60–61 · AUTHOR-INTERPRETATION · nominal] |
| PSI-102 SAME | overheated spacecraft materials producing smoke | Microgravity Investigation; ISS; Comparitive Soot Diagnostic Hardware (as printed), in the Glovebox | — | — | igniter on for 15 to 60 seconds; combustion event typically 2 minutes | 03-02-2001 to 02-28-2008 | O2, pressure, flow speed, sample temperatures | [PSC-01 p.63–64 · AUTHOR-INTERPRETATION · nominal] |
| PSI-106 SLICE | methane, ethylene and nitrogen-diluted mixtures; exchangeable burner tubes | Microgravity Investigation; ISS | — | controlled coflow air from a fan-driven duct | manual ignition | — | O2, pressure, flow speeds, burner sizes, ambient temperature, duration | [PSC-01 p.66–67 · AUTHOR-INTERPRETATION · nominal] |
| PSI-107 SPICE | methane, ethylene, propane, propylene and propylene mixtures; burner diameters 0.41 mm, 0.76 mm, 1.6 mm | Microgravity Investigation; ISS; MSG | — | co-flow air 5.4 cm/s to 65 cm/s | — | — | O2, pressure, ignition method, ambient temperature, duration | [PSC-01 p.68–69 · AUTHOR-INTERPRETATION · nominal] |
| PSI-115 | dibutyl-phthalate (DBP) particles from pyrolysis vapour of a heated sample (simulated) | Ground Investigation; flight program and platform Not Applicable; NASA PSI Grant | — | two low cross-flow velocities | Earth gravity and microgravity simulated | 01-30-2017 to 12-31-2019 | O2, pressure, flow speed values, sample temperature | [PSC-01 p.71–72 · AUTHOR-INTERPRETATION · nominal] |
| PSI-117 | n-alkane droplet cool flames, large (1–4 mm) and sub-millimetre (~0.5 mm) droplets (CFD) | Ground Investigation; NASA PSI grant | ambient composition (including ozone-assisted cases) and pressure swept | convective forcing | imposed heat flux; microgravity simulated | 02-15-2017 to 02-14-2022 | O2 and pressure values | [PSC-01 p.72–74 · AUTHOR-INTERPRETATION · nominal] |
| PSI-142 | n-heptane/air, dimethyl ether (DME) and DME/air (simulations); ozone-sensitized counterflow flames (ground experiments) | Ground Investigation; flight program and platform Not Applicable; Principal Investigator Laboratory Hardware | up to 20 atm (DME/air) | counterflow | FLEX flight conditions used | 08-01-2016 to 07-31-2021 | O2 values, ambient temperature | [PSC-01 p.75–76 · AUTHOR-INTERPRETATION · nominal] |
| PSI-159 ACME CFI-G | propane, n-butane and n-pentane on spherical porous burners, normal and inverse flames | Microgravity Investigation; ISS; ACME, CIR | reactant dilutions, pressures, Zst and Tad varied | fluent flow rate varied | — | — | O2 and pressure values, ignition method, ambient temperature, duration | [PSC-01 p.78–79 · AUTHOR-INTERPRETATION · nominal] |

## Findings
### How the PSI snapshot is read
- PSC-01 holds the NASA Physical Sciences Informatics (PSI) records of the 24 Combustion Science investigations, read from the PSI public API (https://psi.nasa.gov/geode-py/ws/repo/investigations/PSI-n) on 2026-11-14. [PSC-01 p.1 · AUTHOR-INTERPRETATION]
- Layout: one section per investigation and one line per record field, prefixed with the accession; file counts are counts of the file entries listed in the record, by top folder. [PSC-01 p.1 · AUTHOR-INTERPRETATION]
- Investigation pages are listed as https://psi.nasa.gov/physci/repo/data/investigations/ followed by the accession, for PSI-10, PSI-21, PSI-22, PSI-23, PSI-39, PSI-47, PSI-60, PSI-68, PSI-69, PSI-101, PSI-102, PSI-106, PSI-107, PSI-115, PSI-117, PSI-142 and PSI-159. [PSC-01 p.1 · AUTHOR-INTERPRETATION; PSC-01 p.10 · AUTHOR-INTERPRETATION; PSC-01 p.14 · AUTHOR-INTERPRETATION; PSC-01 p.18 · AUTHOR-INTERPRETATION; PSC-01 p.30 · AUTHOR-INTERPRETATION; PSC-01 p.33 · AUTHOR-INTERPRETATION; PSC-01 p.35 · AUTHOR-INTERPRETATION; PSC-01 p.39 · AUTHOR-INTERPRETATION; PSC-01 p.46 · AUTHOR-INTERPRETATION; PSC-01 p.60 · AUTHOR-INTERPRETATION; PSC-01 p.63 · AUTHOR-INTERPRETATION; PSC-01 p.66 · AUTHOR-INTERPRETATION; PSC-01 p.68 · AUTHOR-INTERPRETATION; PSC-01 p.71 · AUTHOR-INTERPRETATION; PSC-01 p.72 · AUTHOR-INTERPRETATION; PSC-01 p.75 · AUTHOR-INTERPRETATION; PSC-01 p.78 · AUTHOR-INTERPRETATION]

### PSI-10 — ACME/Flame Design: gaseous spherical and coflow diffusion flames
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Advanced Combustion via Microgravity Experiments / Flame Design (acronym ACME/Flame Design); proposal title "Flame Design: A Novel Approach to Clean Efficient Diffusion Flames" | [PSC-01 p.1 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Flames of Gaseous Fuels; space program NASA; managing center Glenn Research Center (GRC); sponsoring agency NASA | [PSC-01 p.1–2 · AUTHOR-INTERPRETATION] |
| Keywords | chemical kinetics; ethylene; radiative extinction; thin filament pyrometry; dilution; flame growth; stoichiometric mixture fraction | [PSC-01 p.2 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/w4zy-bt45; licence field empty, printed "()"; last modified 20-Nov-2025, version 1; funding NCC-3697, NCC-1063, NNC06AA32A, NNX09AO53A, NNX15AC75A, 80NSSC20M0072; hardware pages https://www1.grc.nasa.gov/space/iss-research/iss-fcf/combustion-science/acme/implementation/, https://www1.grc.nasa.gov/space/iss-research/iss-fcf/cir/, https://www.esa.int/ESA_Multimedia/Videos/2017/11/Refurbishing_the_ISS_combustion_rack | [PSC-01 p.1–2 · AUTHOR-INTERPRETATION] |
| People | Richard L. Axelbaum (Washington University in St. Louis), PI; Peter B. Sunderland (University of Maryland), Co-I; David L. Urban (NASA GRC), Co-I; Sergey M. Frolov (Semenov Institute of Chemical Physics of the Russian Academy of Sciences), Investigator; Dennis P. Stocker (NASA GRC), Project Scientist | [PSC-01 p.2–3 · AUTHOR-INTERPRETATION] |
| Publications | 33 listed (Publication 1 to 33, each with authors, title, DOI and status); the list stays in the PSI record | [PSC-01 p.3–6 · AUTHOR-INTERPRETATION] |
| Files | Engineering Documents 1, Experimental table 2, Raw Data 3792, Reports 3, Representative Image(s) 5, Science Documents 3, metadata 1; total 2180435304347 bytes as given; experimental tables `PSI-10_Experimental table_Flame Design_Normal Flame.csv`, `PSI-10_Experimental table_Flame Design_Inverse Flame.csv` | [PSC-01 p.6 · AUTHOR-INTERPRETATION] |

- Objective A: soot-inception limits of quasi-steady normal and inverse spherical diffusion flames of C2H4 and CH4 as functions of flow rate, Zst, amount of inert (N2 or CO2) and pressure, with the temperatures of the hot regions; similar limits and temperatures for inverse and normal coflow flames. [PSC-01 p.2 · AUTHOR-INTERPRETATION]
- Objective B: detailed measurements in quasi-steady normal and inverse spherical C2H4 and CH4 flames, giving the effects of flow rate, Zst, amount of N2 and pressure on flame temperature, size, color and soot volume fraction, and whether steady flames can exist. [PSC-01 p.2 · AUTHOR-INTERPRETATION]
- Objective C: extinction limits as functions of Zst, amount of N2 and pressure for normal and inverse spherical C2H4 and CH4 flames, with hot-region temperatures, whether extinction is radiative or kinetic, and whether pseudo-flammability limits can be obtained. [PSC-01 p.2 · AUTHOR-INTERPRETATION]
- Hypotheses (C2H4 and CH4 spherical diffusion flames in drop towers and on ISS; not reported by this source for them: oxygen concentration, pressure, flow and the other tuple fields): (1) soot forms only where the local C/O ratio and temperature exceed their critical values and the strain rate is low enough; (2) microgravity spherical diffusion flames extinguish when the peak temperature first falls below 1130 K; (3) steady-state spherical diffusion flames are possible. [PSC-01 p.2 · AUTHOR-INTERPRETATION]
- Approach: spherical diffusion flame tests in drop towers and on ISS over a broad range of reactant dilutions, flow rates and pressures, for normal and inverse convection directions, observed with cameras, radiometers, photomultiplier tubes and thermocouples. [PSC-01 p.2 · AUTHOR-INTERPRETATION · nominal]
- Stated impact: possible gains in efficiency and lower pollutant emissions in terrestrial combustors; the record says the work contributes to novel designs of future coal power plants. [PSC-01 p.2 · AUTHOR-INTERPRETATION]

### PSI-20 — ACME BRE: Burning Rate Emulator (identity and plan only)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Advanced Combustion via Microgravity Experiments - Burning Rate Emulator (acronym ACME BRE); proposal title "Experimental Investigation of Emulated Burning Rate at Various Gravity Levels" | [PSC-01 p.6 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Flames of Gaseous Fuels; space program and sponsoring agency National Aeronautics and Space Administration (NASA); managing center GRC | [PSC-01 p.6 · AUTHOR-INTERPRETATION] |
| Keywords | Buoyancy; Diffusion Flames; Fire Safety; Heat Flux; Radiative Extinction; Polymer; ACME; Extinction Limit; Flammability; Modeling; Triple Flame | [PSC-01 p.7 · AUTHOR-INTERPRETATION] |

- Objective: establish the burning conditions in a quiescent microgravity ambient in terms of material properties. [PSC-01 p.7 · AUTHOR-INTERPRETATION]
- Objective 1: observe burning in long-duration microgravity for CH4/N2 and C2H4/N2 mixtures on porous circular burners of 25 and 50 mm diameter, in O2/N2 ambients of various pressures and O2 concentrations, emphasising fuel conditions that relate to a diverse range of condensed fuels. [PSC-01 p.7 · AUTHOR-INTERPRETATION]
- Objective 2: the Objective 1 conditions in O2/CO2 ambients (desired); Objective 3: the conditions of Objectives 1–2 for extinction limits. [PSC-01 p.7 · AUTHOR-INTERPRETATION]
- The record states that the ISS tests aim to test its hypothesis by establishing a range of quasi-steady burning conditions for condensed fuels in microgravity. [PSC-01 p.7 · AUTHOR-INTERPRETATION]
- Approach: flight experiments, plus preliminary flight tests to verify operations and compare with ground tests; each test sets the chamber diluent, oxygen concentration and pressure, then fuel flow starts and is ignited, first without varying the fuel flow rate. [PSC-01 p.7 · AUTHOR-INTERPRETATION · nominal]
- Approach: because burner surface temperature and heat flux vary during a test, one test covers a broad range of conditions and, while the flame stays steady, gives a continuous data set for the flammability map. [PSC-01 p.7 · AUTHOR-INTERPRETATION · nominal]
- Test end (as planned): fuel flow is stopped at extinction, or for continued burning once the burner surface temperature has steadied or the heat-flux sensor's temperature limit is near; with the burner temperature steady and the sensor within its limit, the flow rate can be lowered in small steps until extinction, adding flammability-map data. [PSC-01 p.7–8 · AUTHOR-INTERPRETATION · nominal]
- Approach: ignition-limit tests are planned only in normal gravity, not in microgravity; normal-gravity tests with gaseous, liquid and solid fuels continue, to further establish the validation of the BRE for 1-g applications and show its usefulness to establish 1-g ignition and extinction limits. [PSC-01 p.8 · AUTHOR-INTERPRETATION · nominal]
- Approach: drop-facility tests, as available, refine procedures and instrumentation and help set viable flow conditions; a CFD model of quiescent microgravity burning is pursued to guide the flight tests and possibly predict. [PSC-01 p.8 · AUTHOR-INTERPRETATION · nominal]

### PSI-21 — ACME CLD Flame: coflow laminar diffusion flames
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Advanced Combustion via Microgravity Experiments / Coflow Laminar Diffusion Flame (acronym ACME CLD Flame); proposal title "Fuel Dilution Studies of Coflow Laminar Diffusion Flames in a Microgravity Environment" | [PSC-01 p.10 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Flames of gaseous fuel; space program and sponsoring agency NASA; managing center GRC | [PSC-01 p.10 · AUTHOR-INTERPRETATION] |
| Keywords | microgravity; ACME CLD Flame; Fuels; laminar diffusion flames; Combustion Integrated Rack; Flames | [PSC-01 p.10 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/23e1-9950; licence CC0-1.0; last modified 22-Jan-2025, version 4; funding NNX07AB33A, NNX11AP43A, NNX17AD49A; hardware pages https://www1.grc.nasa.gov/space/iss-research/iss-fcf/cir/, https://www1.grc.nasa.gov/space/iss-research/iss-fcf/combustion-science/acme/implementation/ | [PSC-01 p.10–11 · AUTHOR-INTERPRETATION] |
| People | Marshall B. Long (Yale University), PI; Mitchell Smooke (Yale University), Co-I; Dennis Stocker (NASA GRC), Project Scientist | [PSC-01 p.12 · AUTHOR-INTERPRETATION] |
| Publications | 18 listed (Publication 1 to 18, each with authors, title, DOI and status; Publications 3 and 8 printed identically); the list stays in the PSI record | [PSC-01 p.12–14 · AUTHOR-INTERPRETATION] |
| Files | Experimental table 1; total 2005536295241 bytes as given; experimental table `PSI-21_Experimental table_CLD Flame.csv` | [PSC-01 p.14 · AUTHOR-INTERPRETATION] |

- Objectives, to give the data needed to test computational models rigorously at the extremes of fuel dilution: (A) the behaviour of weak coflow diffusion flames of methane and ethylene versus velocity and fuel dilution, from flame shape, lift-off heights, temperatures and extinction limits; (B) the sooting tendencies of long-residence-time diffusion flames versus velocity and fuel dilution, from flame shape, gas temperatures in the soot-free part, soot luminosity, soot temperatures and soot volume fractions. [PSC-01 p.11 · AUTHOR-INTERPRETATION]
- Hypothesis: the investigation gathers benchmark data to validate computational models, detailed in Smooke et al., Combustion Theory and Modelling, 2004, 8(3): 593-606 (https://doi.org/10.1088/1364-7830/8/3/009); Luque et al., Combustion and Flame, 2000, 122(1/2): 172-175 (https://doi.org/10.1016/S0010-2180(00)00112-7); Walsh et al., Proceedings of the Combustion Institute, 2000, 28: 1973-1979 (https://doi.org/10.1016/S0082-0784(00)80603-7); Walsh et al., Proceedings of the Combustion Institute, 1998, 27 (Vol. 1): 615-623 (https://doi.org/10.1016/S0082-0784(98)80453-0). [PSC-01 p.11 · AUTHOR-INTERPRETATION]
- Project goal: improved computational models with soot sub-models that work for dilute flames and for flames from low to high soot loading. [PSC-01 p.11 · AUTHOR-INTERPRETATION]
- The record states that the longer time and larger spatial scales of microgravity are important for both goals. [PSC-01 p.11 · AUTHOR-INTERPRETATION]
- Approach: methane and ethylene diffusion flames over a wide range of conditions; OH* and CH* chemiluminescence for lift-off height and flame shape of the more dilute flames as extinction limits are approached; soot luminosity and laser extinction for soot temperatures and soot volume fractions of the more fuel-rich flames; thin-filament pyrometry for flame temperature in non-sooting regions; kinetics and soot models adjusted to the observations and, where measurements and computations agree well, computations "mined" for species and processes the diagnostics cannot measure. [PSC-01 p.11 · AUTHOR-INTERPRETATION · nominal]
- Stated impacts: diffusion flames are the flame type of most practical combustion devices; predicting coupled transport and detailed kinetics is critical for modelling turbulent reacting flows, soot formation and radiative transfer; understanding diffusion-flame extinction is critical for fire suppression and engine efficiency; the study applies numerical tools and quantitative diagnostics to hydrocarbon diffusion flames in microgravity to understand convection, diffusion and chemistry under momentum-dominated conditions. [PSC-01 p.12 · AUTHOR-INTERPRETATION]
- Stated limitation of ground tests: gravitational forces often complicate the interpretation of normal-gravity computational and experimental results, and the contribution of buoyancy is hard to eliminate in normal gravity, although momentum effects dominate most practical devices. [PSC-01 p.12 · AUTHOR-INTERPRETATION]

### PSI-22 — ACME E-FIELD Flames: electric-field effects on laminar diffusion flames
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Advanced Combustion via Microgravity Experiments Electric-Field Effects on Laminar Diffusion Flames (acronym ACME E-FIELD Flames) | [PSC-01 p.14 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Laminar Flames; space program and sponsoring agency NASA; managing center GRC; related investigation PSI-23 | [PSC-01 p.14 · AUTHOR-INTERPRETATION] |
| Keywords | Methane flames; Coflow burner; OH PLIF; Carbon monoxide; Ion-driven Convection; Diffusion Flames; Electric field flames; CO PLIF; Impinging flame; Chemi-ionization | [PSC-01 p.15 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/se5a-8c73; licence CC0-1.0; last modified 08-May-2026, version 7; funding NNX17AC51A; hardware pages https://www1.grc.nasa.gov/space/iss-research/iss-fcf/cir/, https://www1.grc.nasa.gov/space/iss-research/iss-fcf/combustion-science/acme/implementation/ | [PSC-01 p.14–15 · AUTHOR-INTERPRETATION] |
| People | Derek Dunn-Rankin (University of California-Irvine), PI; Alice Chien (University of California-Irvine), Technical Point of Contact; Dennis Stocker (NASA GRC), Project Scientist | [PSC-01 p.16 · AUTHOR-INTERPRETATION] |
| Publications | 25 listed (Publication 1 to 25, each with authors, title, DOI and status; Publications 1, 3 and 4 have "DOI: none listed"); the list stays in the PSI record | [PSC-01 p.16–18 · AUTHOR-INTERPRETATION] |
| Files | total 950212491107 bytes as given; experimental table `PSI-22_Experimental table_ACME E-FIELD Flames.csv` | [PSC-01 p.18 · AUTHOR-INTERPRETATION] |

- Objective: the relation between electric-field voltage and chemi-ion current, the dynamic response of flames to field changes, soot formation, and stabilised near-limit lifted flames. [PSC-01 p.15 · AUTHOR-INTERPRETATION]
- Hypothesis: in microgravity, applied electric fields will strongly influence laminar diffusion flames, allowing precise control of flame stability, soot behaviour and combustion dynamics through ion-driven convection and chemi-ionization (not reported by this source for it: fuel, oxygen, pressure, flow and the other tuple fields). [PSC-01 p.15 · AUTHOR-INTERPRETATION]
- Approach: microgravity isolates electric-field effects from buoyancy; gas-fuelled flames with and without an air coflow, the coflow case on the same coflow burner as the CLD Flame experiment (PSI-21); a gas-jet burner gives a small focused flame for ion-driven convection studies, and the coflow burner surrounds the fuel jet with a weak synthetic-air flow for stability and soot studies. [PSC-01 p.15 · AUTHOR-INTERPRETATION · nominal; PSC-01 p.10 · AUTHOR-INTERPRETATION]
- Approach: a high voltage, up to 10 kV, between the burner and a flat circular copper mesh electrode above (downstream of) the burner tip sets the field, with controlled polarity and strength; the field acts on ions from chemi-ionization, driving ion-driven convection (methane and ethylene, N2-diluted; ISS CIR). [PSC-01 p.15 · AUTHOR-INTERPRETATION · nominal]
- Approach: methane and ethylene fuels diluted with nitrogen to control flame strength, at dilution levels from highly stable to near-extinction flames; fuel flow rate, coflow velocity and field polarity varied; ion current through the flame and the flame's response time to electric forcing measured against field strength and fuel. [PSC-01 p.15 · AUTHOR-INTERPRETATION · nominal]
- Voltage-current curves were recorded to relate field strength and chemi-ion current, and they revealed ion-driven convection effects (methane and ethylene diluted with N2; gas-jet and coflow burners; field up to 10 kV; microgravity, ISS CIR; not reported by this source for it: oxygen, pressure, ignition, duration). [PSC-01 p.15 · AUTHOR-INTERPRETATION]
- Diagnostics: high-resolution cameras for flame shape, luminosity and soot distribution; filtered spectral imaging for chemiluminescent emissions and soot volume fraction; thermopile detectors for flame radiant emission; all tests in the CIR, with GRC directing the astronauts' actions. [PSC-01 p.15 · AUTHOR-INTERPRETATION · nominal]
- Stated impacts: the research is not done for any space application, though its findings could help future space combustion devices (e.g., solid-waste processing); electric-field flame control could reduce pollutants and fuel use in terrestrial combustion; the record notes fossil-fuel combustion as the main human source of greenhouse gas and acid rain, and soot as both useful and a health hazard. [PSC-01 p.15–16 · AUTHOR-INTERPRETATION]

### PSI-23 — ACME s-Flame: structure and response of spherical diffusion flames
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Advanced Combustion via Microgravity Experiments-Structure and Response of Spherical Diffusion Flames (acronym ACME s-Flame); proposal title "Structure and Response of Spherical Diffusion Flames" | [PSC-01 p.18 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Flames of gaseous fuels; space program and sponsoring agency NASA; managing center GRC | [PSC-01 p.18 · AUTHOR-INTERPRETATION] |
| Keywords | Activation-energy asymptotics; Excess enthalpy; Flame structure; Soret; Diffusion Flames; Fickian diffusion; Hydrogen–air flames; ACME | [PSC-01 p.19 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/k57n-p030; licence CC0-1.0; last modified 05-Jun-2025, version 4; funding NCC3-1051, NNC06AA27A, NNX09AR03A, NNX15AC79A; hardware pages https://www1.grc.nasa.gov/space/iss-research/iss-fcf/cir/, https://www1.grc.nasa.gov/space/iss-research/iss-fcf/combustion-science/acme/ | [PSC-01 p.18–19 · AUTHOR-INTERPRETATION] |
| People | Chung K. Law (Princeton University), PI; Stephen Tse (Rutgers University), Co-I; Dennis Stocker (NASA GRC), Project Scientist | [PSC-01 p.20 · AUTHOR-INTERPRETATION] |
| Publications | 44 listed (Publication 1 to 44, each with authors, title, DOI and status; Publications 33, 38, 40, 41, 42, 43 and 44 have "DOI: none listed"); the list stays in the PSI record | [PSC-01 p.20–23 · AUTHOR-INTERPRETATION] |
| Files | Engineering Documents 29, Presentations 17, Raw Data 4058, Reference Data 50, Reports 2, Science Documents 7; total 782172126062 bytes as given; experimental table `PSI-23_Experimental table_ACME s-Flame.csv` | [PSC-01 p.23 · AUTHOR-INTERPRETATION] |

- Objectives, in soot-free and sooty flames, compared with detailed simulations to assess transport properties and detailed kinetics including chemiluminescence: (A) transient structure (temperature, species distribution) of initially non-steady spherical diffusion flames of H2/CH4/diluent mixtures (soot-free) and C2H4/diluent mixtures (sooty) at different flow rates; (B) quasi-steady convective/chemical-kinetic extinction limits (low system Damköhler number) and radiative/chemical-kinetic extinction limits (high system Damköhler number) for the same mixtures; (C) existence (vs Zeldovich number Ze), onset (vs Da) and nature (mode, frequency, amplitude) of the pulsating instabilities predicted in transient spherical diffusion flames of fuel/diluent mixtures above a critical Lewis number. [PSC-01 p.19 · AUTHOR-INTERPRETATION]
- Hypothesis: the program's transient numerical simulation of spherical flames includes detailed chemistry and transport models, especially radiation; each flame description from the experiment (structure, growth or flame-front velocities, and the conditions of steady flames, extinctions, flame-front instabilities, soot-suppression limits) is a rigorous test of the model and together they measure how complete the kinetic and transport models are; the simulation is also used to set the science requirements, notably the test conditions and most of the measurement systems. [PSC-01 p.19 · AUTHOR-INTERPRETATION · nominal]
- Stated ground-test limitation: because of time and g-jitter limits, little of the planned test matrix can be explored adequately in ground facilities, so the flight experiment definition relies on the modelling. [PSC-01 p.19 · AUTHOR-INTERPRETATION]
- Approach: gaseous fuel and diluent mixtures issue through a spherical porous burner into an oxidizing environment and are ignited, giving a nominally spherical, one-dimensional stabilised flame; synchronized measurements of spectrally resolved images, flame and burner temperatures, radiative flux and operating conditions (reactant flow rates, ambient temperatures, pressures, acceleration levels) are compared with detailed simulations. [PSC-01 p.19–20 · AUTHOR-INTERPRETATION · nominal]
- Approach: fuels hydrogen, methane and ethylene; diluents nitrogen and helium to adjust mixture diffusivities, and carbon dioxide to change flame radiation. [PSC-01 p.20 · AUTHOR-INTERPRETATION · nominal]
- Fuel rationale given: hydrogen is the simplest fuel with a reasonably established mechanism; methane is the simplest hydrocarbon with extensive chemistry studies; ethylene is a typical sooty fuel and an important intermediate in the oxidation of higher hydrocarbons. [PSC-01 p.20 · AUTHOR-INTERPRETATION]
- Stated impacts: practically, diffusion-flame burning underlies many engines and devices, so its dynamics and chemistry matter for power, efficiency, emissions and reliability; fundamentally, the buoyancy-free microgravity environment gives simple flow fields for high-fidelity diffusion-flame data on unit thermochemical processes and their physico-chemical parameters. [PSC-01 p.20 · AUTHOR-INTERPRETATION]

### PSI-25 — BASS-II: Burning and Suppression of Solids - II (identity and plan only)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Burning and Suppression of Solids - II (acronym BASS-II) | [PSC-01 p.23–24 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety; space program and sponsoring agency NASA; managing center GRC | [PSC-01 p.24 · AUTHOR-INTERPRETATION] |
| Keywords | Flame Spread; extinction limits; MSG; Fire Suppression; Solid Fuels; Forced Flow Velocity; BASS; Fire Safety | [PSC-01 p.24 · AUTHOR-INTERPRETATION] |

- Objectives: (1) ignition, flame growth, flame spread and extinction limits of solid fuels burning in low-velocity forced flows in microgravity; (2) begin to bridge the gap between the normal-gravity NASA-STD-6001 Test #1 method, ground-based microgravity tests and actual material flammability in microgravity; (3) give SoFIE PIs preliminary data to refine Science Requirements; (4) examine practical, realistic (thicker) fuels in typical geometries, including slabs, cylinders and spherical sections. [PSC-01 p.24 · AUTHOR-INTERPRETATION]
- Primary variables: forced flow velocity (speed and direction), ambient oxygen concentration (set by nitrogen vitiation of the working volume) and sample geometry (rods, spherical section, slabs, films and fabric sheets). [PSC-01 p.24 · AUTHOR-INTERPRETATION]
- Hypothesis context: NASA tests and controls materials for flammability with an upward-burning test in normal gravity, considered the worst-case geometry for flammability on Earth; testing at constant O2 mole fractions allows flame spread and extinction to be studied at low and high flow speed; the aim is the fundamental limit of a given material. [PSC-01 p.25 · AUTHOR-INTERPRETATION · nominal]
- Approach: ISS tests with active crew support as real-time "lab partner"; the wind tunnel sat in the MSG, which supplied power, imaging and a level of containment; flame appearance, growth and spread rates were determined in opposed and concurrent flow. [PSC-01 p.25 · AUTHOR-INTERPRETATION · nominal]

### PSI-26 — BASS: Burning and Suppression of Solids (identity and plan only)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Burning and Suppression of Solids (acronym BASS) | [PSC-01 p.27 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety; space program and sponsoring agency NASA; managing center GRC | [PSC-01 p.27 · AUTHOR-INTERPRETATION] |
| Keywords | Flame Spread; Fire suppression system; Damkohler number; Boundary layer; Fire safety; Forced Flow Flame; Kinetic regime | [PSC-01 p.28 · AUTHOR-INTERPRETATION] |

- Objective 1: begin to bridge the gap between the normal-gravity NASA-STD-6001 Test #1 method, ground-based microgravity tests and actual material flammability in microgravity, by observing flames over the longer burning times available in flight, with practical, realistic (thicker) fuels in typical geometries, including wake flames that resemble a fire burning behind another object (e.g., in a tight, hard-to-reach area). [PSC-01 p.28 · AUTHOR-INTERPRETATION · nominal]
- Objective 2: assess how well an inert gaseous extinguishing agent, similar to the one used on ISS, puts out flames over different materials, geometries, preheating and flow. [PSC-01 p.28 · AUTHOR-INTERPRETATION]
- Flow directions as defined in the record: in concurrent flow the air moves in the same direction as the flame spread, in opposed flow in the opposite direction. [PSC-01 p.28 · AUTHOR-INTERPRETATION]
- Observations recorded: flames viewed in top and edge profiles, with data on flame size, shape, colour, spread rate and possible quenching. [PSC-01 p.28 · AUTHOR-INTERPRETATION · nominal]

### PSI-39 — CFI: Cool Flames Investigation (droplets)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Cool Flames Investigation (acronym CFI) | [PSC-01 p.30 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Droplets; space program, sponsoring agency and funding ISSNL National Laboratory - National Science Foundation (NL-NSF); managing center GRC; related investigation PSI-69 | [PSC-01 p.30–31 · AUTHOR-INTERPRETATION] |
| Keywords | Droplet combustion; Extinction; Helium dilution; n-dodecane cool flames; Flame dynamics; Alkane chemistry; Negative Temperature Coefficient (NTC); Low-temperature chemistry; hydrocarbon fuel combustion; Renewable jet fuel | [PSC-01 p.31 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/m6pj-a914; licence CC0-1.0; last modified 03-Jun-2025, version 4; hardware pages https://www1.grc.nasa.gov/space/iss-research/iss-fcf/combustion-science/mdca/, https://www1.grc.nasa.gov/space/iss-research/iss-fcf/cir/ | [PSC-01 p.30–31 · AUTHOR-INTERPRETATION] |
| People | Forman Williams (University of California, San Diego), PI; Frederick Dryer (Princeton University), Co-I; Tanvir Farouk (University of South Carolina), Co-I; Vedha Nayagam (Case Western University), Co-I; Daniel Dietrich (NASA GRC), Project Scientist | [PSC-01 p.32 · AUTHOR-INTERPRETATION] |
| Publications | 7 listed (Publication 1 to 7); the list stays in the PSI record | [PSC-01 p.32 · AUTHOR-INTERPRETATION] |
| Files | Analyzed Data 32, Engineering Documents 1, Presentations 2, Raw Data 2791, Reports 1, Science Documents 3, metadata 1; total 718889568684 bytes as given; experimental table `PSI-39_Experimental table_CFI.csv` | [PSC-01 p.32–33 · AUTHOR-INTERPRETATION] |

- Objectives: (1) combustion of n-dodecane and n-dodecane/iso-dodecane mixtures at pressures from 0.25 atm to 5 atm; (2) effect of helium dilution on cool-flame behaviour; (3) combustion characteristics; (4) relation between droplet size, pressure and flame extinction; (5) consequences of soot formation during cool-flame combustion (liquid droplets, microgravity, ISS; not reported by this source for them: oxygen concentration, flow, enclosure size, temperature, duration). [PSC-01 p.30–31 · AUTHOR-INTERPRETATION]
- Hypothesis: burning liquid hydrocarbon fuels (n-dodecane, n-dodecane/iso-dodecane mixtures, farnesane, printed "faresane" there) in microgravity can reveal low-temperature kinetics, including droplet extinction diameters and flame dynamics not observable on Earth (microgravity, ISS; 0.25 atm to 5 atm per the objective, 0.25 to 0.5 atm per the approach; helium diluent; hot-wire ignition; not reported by this source: oxygen concentration, flow, enclosure size, ambient temperature, duration). [PSC-01 p.30–31 · AUTHOR-INTERPRETATION]
- Approach: the Multi-User Droplet Combustion Apparatus (MDCA) in the CIR burns fuel droplets under control; gas bottles and fuel syringes deliver the gas mixture to the combustion chamber at 0.25 to 0.5 atm; droplets are suspended between hypodermic needles or tethered on silicon-carbide fibers; a hot-wire igniter near the droplet ignites it and is then retracted. [PSC-01 p.31 · AUTHOR-INTERPRETATION · nominal]
- Approach: fuels n-dodecane, farnesane and n-dodecane/iso-dodecane mixtures, diluted with "molecular oxygen, atomic nitrogen, and helium" (as printed) to study the effect on extinction and flame dynamics; a black-and-white camera for droplet size, a UV camera for OH* emission and flame size, other high-resolution cameras for monitoring, narrow-band and wide-band radiometers for flame radiation. [PSC-01 p.31 · AUTHOR-INTERPRETATION · nominal]
- Stated impacts: cool flames matter for ignition of practical fuels and additives, for selecting new fuels and for advanced engines such as clean, high-efficiency HCCI engines; the work helps chemists build models, including how cool-flame reactivity sets octane and cetane numbers; CFI is to validate complex kinetic mechanisms, advance understanding of low-temperature flame dynamics and instabilities, and support safer spacecraft design through better knowledge of microgravity combustion. [PSC-01 p.31–32 · AUTHOR-INTERPRETATION]

### PSI-47 — DAFT / DAFT-2: Dust and Aerosol Measurement Feasibility Test (smoke counter)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Dust and Aerosol Measurement Feasibility Test / Dust and Aerosol Measurement Feasibility Test-2 (acronym DAFT / DAFT-2) | [PSC-01 p.33 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety; space program, sponsoring agency and funding NASA; managing center GRC; related investigation PSI-102 | [PSC-01 p.33 · AUTHOR-INTERPRETATION] |
| Keywords | DAFT; Condensate Nuclei Counter; Laser scattering aerosol device; Fire safety; Space hardware testing; P-Trak particulate counter; Capillary Fluid Motion; Combustion; Smoke; Fire prevention | [PSC-01 p.33 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/ztgj-d202; licence CC0-1.0; last modified 02-Jun-2025, version 5; hardware link https://ntrs.nasa.gov/api/citations/20050215648/downloads/20050215648.pdf | [PSC-01 p.33–34 · AUTHOR-INTERPRETATION] |
| People | David L Urban (NASA GRC), PI; Claire Fortenberry (NASA GRC), Project Scientist | [PSC-01 p.34 · AUTHOR-INTERPRETATION] |
| Publications | 2 listed (Publication 1 and 2); the list stays in the PSI record | [PSC-01 p.35 · AUTHOR-INTERPRETATION] |
| Files | Analyzed Data 12, Engineering Documents 6, Presentations 3, Raw Data 6, Reports 3, Representative Image(s) 1, metadata 1; total 41765333 bytes as given; experimental table `PSI-47_Experimental table_DAFT.csv` | [PSC-01 p.35 · AUTHOR-INTERPRETATION] |

- Objective: reduce the risk for the Smoke Aerosol Measurement Experiment (SAME) by testing whether a modified P-Trak particulate counter is accurate in microgravity: (1) show the modified TSI P-Trak works in microgravity, (2) compare it against the DustTrak control, (3) create and analyse aerosol standards in microgravity, (4) ensure the reliability of future aerosol experiments. [PSC-01 p.34 · AUTHOR-INTERPRETATION]
- Stated concern: SAME relied on the commercial TSI P-Trak condensate nuclei counter to quantify smoke aerosols in microgravity, but the P-Trak might not be reliable there because it relies on gravity to recycle the isopropyl alcohol used in the measurement. [PSC-01 p.34 · AUTHOR-INTERPRETATION]
- Working principle as stated: the P-Trak condenses isopropanol around aerosol particles, which are then laser counted. [PSC-01 p.34 · AUTHOR-INTERPRETATION]
- Hypotheses (microgravity, ISS; Arizona Red Dust aerosol in 15-liter Mylar bags; not reported by this source for them: oxygen, pressure, flow, ignition, temperature, duration): two failure modes were expected, clogging or obscuring of the system by isopropanol, and over-counting caused by the air-flow dynamics inside the optics chamber; the two hypotheses tested were that the P-Trak as modified for SAME works normally in microgravity, and that the aerosol made and filtered per the design is within the devices' measurement range. [PSC-01 p.33–34 · AUTHOR-INTERPRETATION]
- Approach: the P-Trak was modified for microgravity by redesigning the condenser tube to recycle isopropyl alcohol by capillary forces and by removing the mercury switch that sensed instrument orientation; Arizona Red Dust (ARD), chosen as aerosol standard because it disperses easily, was aerosolized with GN2 and held in 15-liter Mylar bags; on orbit, the modified P-Trak's particle counts were compared with the DustTrak CNC designed for microgravity. [PSC-01 p.34 · AUTHOR-INTERPRETATION · nominal]
- Stated impacts: longer missions in larger vessels will need more reliable and sensitive fire detection; the work feeds novel fire and smoke detection for ISS and future spacecraft; adapting the P-Trak can inform instruments for other demanding settings such as submarines or underwater laboratories, where accurate smoke detection can save lives. [PSC-01 p.34 · AUTHOR-INTERPRETATION]

### PSI-60 — Computational and Experimental Analysis of SPICE Data Sets (ground study)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Computational and Experimental Analysis of SPICE Data Sets, also the proposal title; no acronym line in the record | [PSC-01 p.35 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Gaseous; space program NASA, PSI grant; managing center GRC; sponsoring agency NASA PSI grant; funding 80NSSC19K1634; related investigation PSI-107 | [PSC-01 p.35 · AUTHOR-INTERPRETATION] |
| Keywords | SPICE; Soot; Coflow; Flames; Laminar diffusion flames | [PSC-01 p.35 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/mzjm-yv57; licence CC0-1.0; last modified 30-Sep-2025, version 1 | [PSC-01 p.35–36 · AUTHOR-INTERPRETATION] |
| People | Mitchell D. Smooke (Yale University), PI; Marshall B. Long (Yale University), Co-I; Daniel L. Dietrich (Glenn Research Center), Project Scientist | [PSC-01 p.36 · AUTHOR-INTERPRETATION] |
| Publications | 1 listed (Publication 1); the list stays in the PSI record | [PSC-01 p.36 · AUTHOR-INTERPRETATION] |
| Files | metadata 1; total 7743 bytes as given; no experimental-table line in this record | [PSC-01 p.36–37 · AUTHOR-INTERPRETATION] |

- Objectives: understand what controls the large discrepancy between soot formation in 1g and 0g flames; combine computational and experimental methods to derive temperature distributions and soot volume fractions from the Smoke Point in Coflow Experiment (SPICE) data in PSI; analyse over 1600 raw DSLR images with advanced soot models to understand soot formation, oxidation, radiative re-absorption and aggregate growth in heavily sooting flames; reconcile microgravity and normal-gravity flame behaviour, identify the processes that drive smoke-point development, and give a framework for model-parameter sensitivity (SPICE coflow laminar diffusion flames; not reported by this source for this: fuel, oxygen, pressure, flow). [PSC-01 p.35–36 · AUTHOR-INTERPRETATION]
- Hypotheses (SPICE coflow laminar diffusion flames, Yale and ACME burner configurations, microgravity vs normal gravity, ground study of SPICE data; not reported by this source for them: fuel, oxygen, pressure, flow, ignition, temperature, duration): microgravity gives longer, more diffuse flames with lower temperatures and more soot than normal gravity; careful integration of measured temperature fields into the simulations reduces the gap between measured and predicted soot. [PSC-01 p.35–36 · AUTHOR-INTERPRETATION]
- Approach: raw Nikon NEF images decoded into three colour channels and analysed by colour-ratio pyrometry for soot temperature fields, then SPICE's absolute light calibration used for soot volume fractions; a coupled flow–species–soot model with radiation re-absorption and discrete-sectional aggregate formation, run for the Yale and ACME burner configurations in normal and microgravity; comparisons guided sensitivity analyses of soot-evolution parameters (radiation, scattering, boundary conditions, heat transfer to the burner). [PSC-01 p.36 · AUTHOR-INTERPRETATION · nominal]
- Stated impacts: better understanding of soot formation, flame structure and radiative transport in micro- and normal gravity, improving predictive combustion models for spacecraft and terrestrial systems; for space, support for safer fire detection, suppression and cleaner combustion on long missions; on Earth, lower emissions, better efficiency and cleaner energy and industrial design. [PSC-01 p.36 · AUTHOR-INTERPRETATION]

### PSI-62 — Concurrent flame spread modelling with flamelet generated manifolds, compared with BASS (ground study; identity and plan only)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Concurrent Flame Spread Modeling using Flamelet Generated Manifolds in Microgravity with Comparison to BASS Experiments using Two-Color Tomography, also the proposal title; no acronym line in the record | [PSC-01 p.37 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety | [PSC-01 p.37 · AUTHOR-INTERPRETATION] |

- Objective: develop and validate new flamelet generated manifold (FGM) modelling techniques for concurrent flame spread in microgravity; the PSI grant advanced an unsteady FGM (UFGM) framework, which reduces the complexity of reacting systems by mapping them onto lower-dimensional manifolds, to simulate solid-fuel combustion at high fidelity with the NASA BASS and BASS-II experiments as benchmarks; the long-term goal is accurate prediction of flammability limits of spacecraft materials and a tool that can also serve as a subgrid-scale model in large-eddy simulations of fires. [PSC-01 p.37–38 · AUTHOR-INTERPRETATION]
- Approach: high-resolution modelling with experimental validation; an existing framework for fully coupled fluid–solid simulations of charring and ablating materials, with the unsteady FGM method tested on BASS geometries (flat sheets, spheres and rods of polymethyl methacrylate (PMMA), and wax cylinders); BASS and BASS-II imagery from PSI post-processed with new two-colour tomography methods for DSLR cameras, giving 3D soot and temperature fields to compare with the model; comparisons also with a parallel NSF-supported terrestrial flame-spread project, so the UFGM predictions were assessed in microgravity and normal gravity. [PSC-01 p.38 · AUTHOR-INTERPRETATION · nominal]
- Evaluation metrics: flame geometry, temperature distribution, soot volume fraction and flame spread rate, with emphasis on reproducing the "Goldilocks" flammability zone reported by Olson and Ferkul. [PSC-01 p.38 · AUTHOR-INTERPRETATION]

### PSI-68 — FLEX-2: Flame Extinguishment Experiment - 2 (droplets)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Flame Extinguishment Experiment - 2 (acronym FLEX-2); proposal title "The Fundamental Studies in Droplet Combustion and Flame Extinguishment in Microgravity" | [PSC-01 p.39 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety; space program and sponsoring agency NASA; managing center GRC; funding NNX16AR09A | [PSC-01 p.39–40 · AUTHOR-INTERPRETATION] |
| Keywords | FLEX; Decane; Radiative Extinction; Flame Extinction; Microgravity Combustion; Diffusive Extinction; Multiple Droplet Combustion Apparatus; Droplet Combustion; Spacecraft Fire Safety; Ethanol; Soot Formation | [PSC-01 p.40 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/byp8-h018; licence CC0-1.0; last modified 25-Nov-2025, version 6; hardware pages https://issnationallab.org/facilities/combustion-integrated-rack/, https://gipoc.grc.nasa.gov/wp/fcf-cir/mdca/ | [PSC-01 p.39–40 · AUTHOR-INTERPRETATION] |
| People | Forman A. Williams (University of California, San Diego), PI; Co-Is Frederick Dryer (Princeton University), Benjamin D. Shaw (affiliation not given), Mun Choi (University of Connecticut), Vedha Nayagam (Case Western Reserve University), Thomas Avedisian (Cornell University), Daniel Dietrich (NASA GRC); Michael Hicks (NASA GRC), Project Scientist | [PSC-01 p.41–42 · AUTHOR-INTERPRETATION] |
| Publications | 48 listed (Publication 1 to 48); the list stays in the PSI record | [PSC-01 p.42–45 · AUTHOR-INTERPRETATION] |
| Files | no file counts by top folder in this record; total 1224752113090 bytes as given; experimental table `PSI-68_Experimental table_Flex2.csv` | [PSC-01 p.45–46 · AUTHOR-INTERPRETATION] |

- Goal: extend FLEX-1 results to fuels and conditions that mimic real combustors and give benchmark data on bi-component droplet combustion over a wide range of initial conditions, to validate simulations and develop new theory. [PSC-01 p.40 · AUTHOR-INTERPRETATION]
- Detailed objectives: (1) role of liquid-phase mixing in bi-component droplet burning; (2) steady and unsteady liquid- and gas-phase phenomena in pure-fuel combustion; (3) extinction mechanisms and boundaries; (4) soot formation, including soot volume fraction and soot-shell dynamics; (5) effect of droplet interactions on flammability limits and extinction of droplet arrays; (6) validation of droplet-combustion theory with microgravity data. [PSC-01 p.40 · AUTHOR-INTERPRETATION]
- Stated limitation of existing models: convective droplet-combustion simulations of the last decade include the full Navier-Stokes equations for the gas phase, but approximate the chemistry, radiation and gas–liquid coupling to varying degrees, and their assumptions had not been confirmed against benchmark data. [PSC-01 p.40 · AUTHOR-INTERPRETATION]
- Hypotheses (bi-component liquid droplets, fiber-supported or free, microgravity, ISS; O2 0.1 to 0.4 mole fraction, diluent the balance; 0.5 atm to 3.0 atm; ignitor powered 1 s to 5 s; flow by droplet translation in some tests; not reported by this source: enclosure size, ambient temperature, duration): microgravity minimises buoyancy so the droplet is governed only by thermocapillary or solutocapillary stresses, giving a clear view of the basic combustion processes; it also allows study of "transitions between radiative and diffusive extension of the flame" (as printed). [PSC-01 p.39–41 · AUTHOR-INTERPRETATION]
- Test procedure (ISS CIR MDCA): chamber filled at 0.5 atm to 3.0 atm with O2 at 0.1 to 0.4 mole fraction and diluent the balance; about 2 minutes settling for gas temperature and pressure; fuel dispensed onto the support fiber in a predetermined amount for the target droplet size (unless freely deployed); needles retracted and a dwell of at least 10 seconds for deployment-induced internal motion to decay; ignitor powered for a selectable 1 second to 5 seconds, then retracted; droplet translation, when used to make a flow field, starts as the ignitor retracts; near-real-time colour video download to verify deployment, ignition and progress, with chamber pressure and temperature recorded in near real time. [PSC-01 p.39 · AUTHOR-INTERPRETATION; PSC-01 p.41 · AUTHOR-INTERPRETATION · nominal]
- Overall approach in eight steps: set test parameters (pressure, temperature, fuel mixture, humidity); fill the chamber with the gas mixture; deploy the droplet(s) with controlled diameter; let the droplet stabilise; ignite uniformly and under control; track flame evolution with high-speed photography; monitor and adjust conditions; analyse data. [PSC-01 p.41 · AUTHOR-INTERPRETATION · nominal]
- Independently varied parameters: fuel type, ambient gas composition, ambient pressure, initial droplet diameter, droplet translation velocity (and acceleration), and droplet spacing and initial size in a binary linear array. [PSC-01 p.41 · AUTHOR-INTERPRETATION]
- Stated impacts: liquid fuels are by far the main energy source in transportation, and the results can lead to cleaner, more efficient combustion; listed contributions are more sustainable energy, combustors with minimal carbon footprint, maximum efficiency and lower emissions, quantitative evaluation of future fuels through surrogates (mixtures of pure fuels that mimic real fuels), and validation of jet-engine models by manufacturers. [PSC-01 p.41 · AUTHOR-INTERPRETATION]

### PSI-69 — FLEX: Flame Extinguishment Experiment (droplets, suppressants)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Flame Extinguishment Experiment (acronym FLEX); proposal title "Droplet Flame Extinguishment in Microgravity" | [PSC-01 p.46 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety; space program and sponsoring agency NASA; managing center GRC; funding NNX09AM33A | [PSC-01 p.46 · AUTHOR-INTERPRETATION] |
| Keywords | FLEX; Droplet; Diffusion Flames; Fuel Sooting; Spacecraft Fire Safety; Flames | [PSC-01 p.46 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/mbq8-0451; licence CC0-1.0; last modified 06-Jun-2025, version 5; hardware pages https://issnationallab.org/facilities/combustion-integrated-rack/, https://gipoc.grc.nasa.gov/wp/fcf-cir/mdca/ | [PSC-01 p.46 · AUTHOR-INTERPRETATION] |
| People | Forman A Williams (University of California, San Diego), PI; Co-Is Benjamin D Shaw (University of California, Davis), Michael C Hicks (NASA GRC), Vedha Nayagam (Case Western Reserve University), Mun Y Choi (University of Missouri), Frederick L Dryer (University of South Carolina); Daniel Dietrich (NASA GRC), Project Scientist | [PSC-01 p.48 · AUTHOR-INTERPRETATION] |
| Publications | 51 listed (Publication 1 to 51); the list stays in the PSI record | [PSC-01 p.48–52 · AUTHOR-INTERPRETATION] |
| Files | no file counts by top folder in this record; total 923832535657 bytes as given; experimental table `PSI-69_Experimental table_FLEX.csv` | [PSC-01 p.52 · AUTHOR-INTERPRETATION] |

- Objectives: map the flammability limits of liquid fuels in microgravity, measure how effective gaseous suppressants such as CO2, He and SF6 are, and build reliable predictive models of combustion limits in reduced gravity; validate and improve simplified models by adding detailed chemistry, heat transfer and material movement, using space data and extensive ground tests; obtain high-resolution measurements of droplet burning rates, extinction behaviour, heat radiation, soot levels and temperature profiles while varying ambient conditions and suppressant concentrations. [PSC-01 p.46–47 · AUTHOR-INTERPRETATION]
- The record calls these investigations essential to understanding microgravity combustion and to better fire-safety protocols for future missions. [PSC-01 p.47 · AUTHOR-INTERPRETATION]
- Hypothesis (liquid fuel droplets, free or fiber-supported, about 3 mm for the LOI tests; microgravity, ISS, compared with normal gravity; suppressants CO2, He, SF6; 0.5 − 1.5 atm for the LOI tests; sub-buoyant flow by droplet translation in the slow-flow tests; not reported by this source: ignition method, enclosure size, ambient temperature, duration): microgravity fundamentally changes droplet combustion and extinction through changed species and energy transport, radiative heat loss and kinetics; in particular, the lack of buoyant convection makes flammability limits and suppressant efficacy differ significantly from normal gravity. [PSC-01 p.46–47 · AUTHOR-INTERPRETATION]
- This hypothesis shapes the FLEX design: map flammability boundaries, quantify suppressant efficacy and build predictive models for space fire safety. [PSC-01 p.47 · AUTHOR-INTERPRETATION]
- Approach: ignite and observe the burning of relatively large droplets; a primary aim is the Limiting Oxygen Index (LOI) as a function of ambient pressure, and how a suppressant changes it. [PSC-01 p.47 · AUTHOR-INTERPRETATION · nominal]
- LOI procedure as listed (ISS MDCA): (1) pick a test pressure of 0.5 − 1.5 atm; (2) pick a smaller droplet, about 3 mm; (3) pick an ambient O2 mole fraction that ground tests show supports burning to completion rather than extinction at a finite droplet size; (4) run a droplet test; (5) increase droplet size or repeat if a finite extinction diameter is seen; (6) repeat 4–5 until the flame lasts only a short time after ignition (radiative extinction); (7) repeat 4–6 at a lower O2 mole fraction; (8) continue down to an O2 mole fraction at which the droplet does not ignite. [PSC-01 p.46–47 · AUTHOR-INTERPRETATION · nominal]
- At some ambient conditions the extinction droplet sizes at all O2 mole fractions were too small to observe or measure with the available diagnostics; there the LOI was found iteratively from pairs of tests (burn to completion, then no ignition) with progressively smaller O2 steps instead of from observed extinction. [PSC-01 p.47 · AUTHOR-INTERPRETATION · nominal]
- Slow-flow tests: the flight hardware configuration did not allow adequate diagnostics over a whole test of a droplet in uniform, steady convective flow; the plan was to repeat tests that gave finite extinction diameters and, near the end before extinction, translate the droplet at a slow uniform speed to impose a small sub-buoyant flow and see how it changes extinction; many tests used free (not fiber-supported) droplets, some with slow drift, giving data on how small sub-buoyant flow affects burning and extinction. [PSC-01 p.47–48 · AUTHOR-INTERPRETATION · nominal]
- Stated impacts: better space fire-safety protocols where traditional suppression may fail; on Earth, fire safety in confined and reduced-gravity settings such as submarines and high-altitude aircraft; suppressant findings (CO2, He, SF6) may lead to more efficient, less harmful suppression systems with fewer toxic by-products; "cool flames" and low-temperature combustion seen in microgravity can inform engines with better efficiency and lower emissions; overall gains for space-exploration and terrestrial fire safety. [PSC-01 p.48 · AUTHOR-INTERPRETATION]

### PSI-98 — SAFFIRE-I: Spacecraft Fire Safety Experiment-I (identity and plan only)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Spacecraft Fire Safety Experiment-I (acronym SAFFIRE-I); proposal title "Characterization of Smoke from Microgravity Fires for Improved Spacecraft Fire Detection" | [PSC-01 p.53 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire, Smoke Distribution | [PSC-01 p.53 · AUTHOR-INTERPRETATION] |
| Keywords | Cygnus; SAFFIRE; Flame Spread; Surface Combustion; Fire Safety; Fire; Oxidizer flux; Solid burning rate; Smoldering | [PSC-01 p.53 · AUTHOR-INTERPRETATION] |

- Objectives: (1) how fast a large-scale fire grows in low gravity; (2) low-g flammability limits compared with those from NASA's normal-gravity material flammability screening test. [PSC-01 p.53–54 · AUTHOR-INTERPRETATION]
- Approach: the Sibal sample simulated a large piece of flammable fabric; air was drawn through the large flow duct by fans at the top, with flow straighteners at the bottom of the module. [PSC-01 p.54 · AUTHOR-INTERPRETATION · nominal]
- Material note as given: Sibal is used in many space experiments because it burns like cotton but keeps its structural integrity after the cotton is consumed. [PSC-01 p.54 · AUTHOR-INTERPRETATION]

### PSI-99 — SAFFIRE-II: Spacecraft Fire Experiment-II (identity and plan only)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Spacecraft Fire Experiment-II (acronym SAFFIRE-II) | [PSC-01 p.55 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Surface Combustion | [PSC-01 p.55 · AUTHOR-INTERPRETATION] |
| Keywords | fire; Cygnus; SAFFIRE; Smoldering; fire safety; Nomex; SHS; Smoke Distribution | [PSC-01 p.56 · AUTHOR-INTERPRETATION] |

- Objectives: how fast a large-scale fire grows in low gravity, and low-g flammability limits compared with those from NASA's normal-gravity material flammability screening test. [PSC-01 p.56 · AUTHOR-INTERPRETATION]
- Approach: Saffire-II followed on from Saffire-I with more samples; the card sat in the middle of a large flow duct, air drawn through by fans at the top, with flow straighteners at the bottom of the module. [PSC-01 p.56 · AUTHOR-INTERPRETATION · nominal]

### PSI-100 — SAFFIRE-III: Spacecraft Fire Experiment-III (identity and plan only)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Spacecraft Fire Experiment-III (acronym SAFFIRE-III) | [PSC-01 p.58 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety | [PSC-01 p.58 · AUTHOR-INTERPRETATION] |
| Keywords | SAFFIRE; Fire Safety; Surface Combustion; Smoldering; Flame Spread; low-gravity fire testing; flammability | [PSC-01 p.58 · AUTHOR-INTERPRETATION] |

- Objectives: (1) how fast a large-scale fire grows in low gravity; (2) low-g flammability limits compared with those from NASA's normal-gravity material flammability screening test. [PSC-01 p.58–59 · AUTHOR-INTERPRETATION]
- Approach: Saffire III followed on from Saffire 1 and also used SIBAL, at 30 cm/s instead of the 20 cm/s of Saffire I. [PSC-01 p.59 · AUTHOR-INTERPRETATION · nominal]

Saffire I–III instruments, as each record lists them (Cygnus, after ISS deberth): after ignition, two cameras for flame images; thermocouples for flow, flame and plume temperatures; two radiometers for flame radiation; solid-state sensors for pressure and CO2 and O2 mole fraction; two anemometers for flow velocity; all data compressed and then downlinked. [PSC-01 p.54 · AUTHOR-INTERPRETATION · nominal; PSC-01 p.56 · AUTHOR-INTERPRETATION · nominal; PSC-01 p.59 · AUTHOR-INTERPRETATION · nominal]

### PSI-101 — SAME-R: Smoke Aerosol Measurement Experiment-Reflight
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Smoke Aerosol Measurement Experiment-Reflight (acronym SAME-R) | [PSC-01 p.60 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety; space program and sponsoring agency NASA; managing center GRC; related investigation PSI-102 | [PSC-01 p.60 · AUTHOR-INTERPRETATION] |
| Keywords | Soot; Flames; Pyrell; SAME; Transmission Electron Microscopy; Silicon Rubber; Spacecraft Fire Safety; Teflon; Cotton; Smoke; Kapton; SAME-2 | [PSC-01 p.60 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/2np7-jv14; licence CC0-1.0; last modified 02-Jun-2025, version 4; hardware link https://ntrs.nasa.gov/api/citations/19960008413/downloads/19960008413.pdf | [PSC-01 p.60–61 · AUTHOR-INTERPRETATION] |
| People | David Urban (NASA GRC), PI; Co-Is Zeng-guang Yuan (NASA GRC), Jiann C Yang and Thomas Cleary (National Institute for Standards and Technology (NIST)), George W Mulholland (University of Maryland); Claire Fortenberry (NASA GRC), Project Scientist | [PSC-01 p.62 · AUTHOR-INTERPRETATION] |
| Publications | 6 listed (Publication 1–6, with DOI where given, status published); the list stays in the PSI record | [PSC-01 p.62 · AUTHOR-INTERPRETATION] |
| Files | Analyzed Data 86, Engineering Documents 24, Presentations 4, Raw Data 223, Reference Data 2, Reports 1, Science Documents 2; total 6308124750 bytes as given; experimental table `PSI-101_Experimental table_SAME-R.csv` | [PSC-01 p.62–63 · AUTHOR-INTERPRETATION] |

- Objective, as for SAME: quantify the sizes that liquid smoke particulate reaches in low gravity and relate the droplet size distribution to the smoke generation and transport conditions. [PSC-01 p.61 · AUTHOR-INTERPRETATION]
- Problem met in SAME: after the thermal precipitators were returned to the ground, all TEM grids were found severely contaminated with unidentified foreign particles, so they were unusable, though some showed the shapes of certain smoke particles; SAME-R therefore changed materials, extended operating conditions and changed diagnostics. [PSC-01 p.61 · AUTHOR-INTERPRETATION]
- Approach: SAME-R used the SAME on-orbit hardware with three changes: (1) a new test material, Pyrell®, an intumescent fire-retardant foam by Foamex, replacing the DBP samples; (2) broader test conditions, including higher heating temperatures and no flow during sample heating; (3) a new GRC-built instrument, M-pass, replacing one of the two Commercial Diagnostic Enclosures (a DustTrak and an ionization detector) used in SAME. [PSC-01 p.61 · AUTHOR-INTERPRETATION · nominal]
- SAME-R flight tests ran from July 16 to September 9, 2010 and completed 66 test points (ISS). [PSC-01 p.60–61 · AUTHOR-INTERPRETATION]
- After the flights, three major post-flight ground tests were performed to improve the data reduction process and to validate the lognormal-distribution assumption, the key to the moment method used by SAME and SAME-R. [PSC-01 p.61 · AUTHOR-INTERPRETATION · nominal]

### PSI-102 — SAME: Smoke and Aerosol Measurement Experiment
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Smoke and Aerosol Measurement Experiment (acronym SAME) | [PSC-01 p.63 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety; space program and sponsoring agency NASA; managing center GRC; funding IH1013215; related investigation PSI-101 | [PSC-01 p.63 · AUTHOR-INTERPRETATION] |
| Keywords | Smoke; Surface Combustion; Fire Safety; Bio-Astronautics; Smoldering | [PSC-01 p.63 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/gd4k-8h62; licence CC0-1.0; last modified 02-Jun-2025, version 4; hardware link https://ntrs.nasa.gov/api/citations/19960008413/downloads/19960008413.pdf | [PSC-01 p.63 · AUTHOR-INTERPRETATION] |
| People | David Urban (NASA GRC), PI; Co-Is George Mulholland (University of Maryland), Thomas Cleary (National Institute of Standards and Technology (NIST)), Jiann Yang (National Institute for Standards and Technology (NIST)); Claire Fortenberry (NASA GRC), Project Scientist | [PSC-01 p.64–65 · AUTHOR-INTERPRETATION] |
| Publications | 16 listed (Publication 1–16, with DOI where given, status published); the list stays in the PSI record | [PSC-01 p.65–66 · AUTHOR-INTERPRETATION] |
| Files | Analyzed Data 63, Engineering Documents 28, Presentations 6, Reference Data 3, Reports 1, Science Documents 2, metadata 1; total 657608178 bytes as given; experimental table `PSI-102_Experimental table_SAME.csv` | [PSC-01 p.66 · AUTHOR-INTERPRETATION] |

- Objectives: quantify the sizes that liquid smoke particulate reaches in low gravity and relate the droplet size distribution to the smoke generation and transport conditions; develop a numerical code predicting smoke droplet growth from the fuel pyrolysis rate, the thermodynamic properties of the pyrolysis vapour and the flow environment. [PSC-01 p.63–64 · AUTHOR-INTERPRETATION]
- Approach: the crew installed the near-field hardware in the Glovebox, attached the Far Field Box and positioned the video cameras; the operator ran self-diagnostics on the two smoke detectors, started the cameras, switched the igniter on for a predefined 15 to 60 seconds and started the thermophoretic soot samplers; each combustion event typically lasted 2 minutes. [PSC-01 p.64 · AUTHOR-INTERPRETATION · nominal]
- Post-flight analysis: particulate on the thermophoretic probes measured by Transmission Electron Microscope (TEM) for primary and aggregate particle dimensions; sample remains weighed for mass loss; detector responses read from the video record; 1-g operating conditions then chosen to reproduce the flight mass-loss rates. [PSC-01 p.64 · AUTHOR-INTERPRETATION · nominal]
- The smoke came from overheated spacecraft materials, with sample temperature, flow field and particle aging time more rigorously controlled. [PSC-01 p.64 · AUTHOR-INTERPRETATION · nominal]

SAME and SAME-R share these record statements, quoted as hypotheses in both (pyrolyzing or smouldering source, μg vs 1g; not reported by these records for them: oxygen, pressure, temperature): without strong buoyancy-induced flows, smoke particle growth by nucleation, condensation and coagulation gives larger particles than in 1g; larger particles are favoured by the higher vapour concentration and longer smoke residence time near the source caused by lower velocities and mixing in μg; liquid aerosol smokes made in microgravity will have substantially larger droplets than under the same conditions in normal gravity, with a matching lower particle number density for the same smoke mass; the changed size distribution and number density will alter smoke-detector response, possibly leaving some detectors without an alarm. [PSC-01 p.61 · AUTHOR-INTERPRETATION; PSC-01 p.64 · AUTHOR-INTERPRETATION]

SAME and SAME-R share these stated impacts: SAME will provide technology for an advanced fire detector for future long-duration spacecraft (SAME-R's record: SAME-R results, along with those of the original SAME, can lead to that technology), and quantitative data on detector sensitivity to reduced-gravity smokes to judge whether existing technologies are adequate; the Fire Prevention, Detection, and Suppression (FPDS) program plan allows future sensor technology to be re-evaluated, and SAME results are needed to provide the reduced-gravity baseline data against which future detection technology developments can be evaluated; detectors developed from SAME can also serve other extreme environments on Earth, such as submarines or underwater laboratories, where accurate smoke detection can save lives. [PSC-01 p.61–62 · AUTHOR-INTERPRETATION; PSC-01 p.64 · AUTHOR-INTERPRETATION]

### PSI-106 — SLICE: Structure and Liftoff In Combustion Experiment
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Structure and Liftoff In Combustion Experiment (acronym SLICE) | [PSC-01 p.66 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science; space program and sponsoring agency NASA; managing center GRC; related investigation PSI-107 | [PSC-01 p.66–67 · AUTHOR-INTERPRETATION] |
| Keywords | fuel dilution; Diffusion Flame; inlet velocity; Fuels | [PSC-01 p.67 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/pm12-rg61; licence CC0-1.0; last modified 06-Feb-2025, version 3 | [PSC-01 p.66–67 · AUTHOR-INTERPRETATION] |
| People | Marshall Long (Yale University), PI; Co-Is Mitchell D. Smooke (Yale University) and Fumiaki Takahashi (Case Western University); Dennis Stocker (NASA GRC), Project Scientist | [PSC-01 p.67–68 · AUTHOR-INTERPRETATION] |
| Publications | 5 listed (Publication 1–5, with DOI where given, status published); the list stays in the PSI record | [PSC-01 p.68 · AUTHOR-INTERPRETATION] |
| Files | Experimental table 1; total 72914598688 bytes as given; experimental table `PSI-106_Experimental table_Slice.csv` | [PSC-01 p.68 · AUTHOR-INTERPRETATION] |

- Objectives: understand the structure and stability of laminar diffusion flames in microgravity: (1) flame structure, to understand the stabilising mechanisms at the flame base; (2) liftoff velocity limits for different fuels and burner diameters; (3) effect of nitrogen fuel dilution on soot formation and stability; (4) effect of microgravity on flame length and radiative heat loss vs normal gravity; (5) validation of numerical models of flame dynamics, soot production and thermal radiation in non-premixed flames. [PSC-01 p.67 · AUTHOR-INTERPRETATION]
- Hypothesis: in microgravity the structure and stability of laminar diffusion flames depend strongly on burner diameter, coflow velocity and fuel composition, and differ fundamentally from flames on Earth. [PSC-01 p.67 · AUTHOR-INTERPRETATION]
- Approach: fan-driven flow duct, exchangeable burner tubes and sensors for flow rates and temperature; several fuels such as methane, ethylene and nitrogen-diluted mixtures; flames ignited manually and observed in controlled coflow air; a high-resolution camera took still images with sensor data overlaid; airflow-velocity, soot-measurement and fan calibrations were run. [PSC-01 p.67 · AUTHOR-INTERPRETATION · nominal]
- More than 4,000 high-resolution images were taken across 13 testing experiments, and the data were analysed to relate flame structure and stability to flow dynamics and fuel properties (ISS; fuels such as methane, ethylene, N2-diluted; coflow air; not reported by this source for them: oxygen, pressure, flow speeds). [PSC-01 p.66–67 · AUTHOR-INTERPRETATION]
- Stated impacts: better flame models for more efficient combustion on Earth; soot understanding for minimum-emission systems; flame-stability insight for fire safety; cleaner, more efficient engines and industrial burners. [PSC-01 p.67 · AUTHOR-INTERPRETATION]

### PSI-107 — SPICE: Smoke Point In Co-flow Experiment
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Smoke Point In Co-flow Experiment (acronym SPICE) | [PSC-01 p.68 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Fire Safety; space program and sponsoring agency NASA; managing center GRC | [PSC-01 p.68–69 · AUTHOR-INTERPRETATION] |
| Keywords | Soot; Emisssions; Laminar diffusion flames; butane-lighter flame | [PSC-01 p.69 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/9kbh-e962; licence CC0-1.0; last modified 02-Jun-2025, version 4; hardware page https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Columbus/Microgravity_Science_Glovebox | [PSC-01 p.68–69 · AUTHOR-INTERPRETATION] |
| People | David Urban (NASA GRC), PI; Peter Sunderland (University of Maryland), Co-I | [PSC-01 p.70 · AUTHOR-INTERPRETATION] |
| Publications | 9 listed (Publication 1–9, with DOI where given, status published); the list stays in the PSI record | [PSC-01 p.70 · AUTHOR-INTERPRETATION] |
| Files | Engineering Documents 4, Presentations 5, Raw Data 172, Reference Data 1, Reports 3, Science Documents 1; total 6946864573 bytes as given; experimental table `PSI-107_Experimental table_Spice.csv` | [PSC-01 p.70 · AUTHOR-INTERPRETATION] |

- Objectives: understand combustion by observing flames in microgravity on ISS and in analogous ground experiments: (1) laminar smoke-point properties of non-buoyant jet diffusion flames under various co-flow conditions; (2) effects of burner diameter and co-flow velocity on luminous flame lengths and smoke points; (3) sooting propensity of fuels such as ethylene, propane and propylene mixtures; (4) validation of the relation between luminous flame shape and residence time in microgravity; (5) effect of air and fuel flow-rate changes on smoke points in space. [PSC-01 p.69 · AUTHOR-INTERPRETATION]
- Hypothesis: minimising gravity-driven transport lets the laminar smoke-point properties of non-buoyant jet diffusion flames be studied, and these properties are expected to differ significantly from normal gravity. [PSC-01 p.69 · AUTHOR-INTERPRETATION]
- Approach (Microgravity Science Glovebox, ISS): apparatus with a flow duct with integrated nozzles, cameras and fuel delivery; fuels methane, ethylene, propane, propylene and propylene mixtures; each flame ignited in controlled co-flow air with burner diameters of 0.41 mm, 0.76 mm and 1.6 mm and co-flow velocities from 5.4 cm/s to 65 cm/s; still and video cameras recorded flame lengths, with flame height, radiative heat losses and co-flow air-velocity distributions measured (not reported by this source: oxygen, pressure). [PSC-01 p.69 · AUTHOR-INTERPRETATION · nominal]
- Smoke point as used here: fuel flow rate was adjusted to find the smoke point, marked by the flame's transition to emitting soot. [PSC-01 p.69 · AUTHOR-INTERPRETATION]
- In total 526 flames were studied (conditions as in the approach line above: methane, ethylene, propane, propylene and propylene mixtures; burners 0.41, 0.76 and 1.6 mm; co-flow 5.4 cm/s to 65 cm/s; MSG on ISS). [PSC-01 p.69 · AUTHOR-INTERPRETATION]
- Stated impacts: better understanding of soot formation and safer spacecraft environments; refined models of flame behaviour in non-buoyant conditions; more knowledge of soot generation; possible insight into better fuel formulations and combustion processes. [PSC-01 p.69–70 · AUTHOR-INTERPRETATION]

### PSI-115 — Smoke generation in microgravity from SAME data (ground study)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Utilization of the Smoke Aerosol Measurement Experiment Data for Advanced Modeling and Simulation of Smoke Generation in Micro-Gravity | [PSC-01 p.71 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Smoke Aerosol, Combustion Simulation; managing center GRC; sponsoring agency NASA PSI Grant; funding NNX17AF08A; related investigation PSI-102 | [PSC-01 p.71 · AUTHOR-INTERPRETATION] |
| Keywords | SAME Data; Nanoparticles; Ground-based research; Dibutyl pthalate; thermophoresis; Aerosol Smoke Generation; Navier-Stokes nodal approach; Numerical Simulation; Particle settling | [PSC-01 p.71 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/q0v5-1v28; licence CC0-1.0; last modified 02-Jun-2025, version 3 | [PSC-01 p.71 · AUTHOR-INTERPRETATION] |
| People | Sean Garrick (University of Illinois), PI; Michael Hicks (NASA GRC), Technical Point of Contact | [PSC-01 p.72 · AUTHOR-INTERPRETATION] |
| Publications | none listed in this record | [PSC-01 p.72 · AUTHOR-INTERPRETATION] |
| Files | Analyzed Data 44, Reports 1, Science Documents 1, metadata 1; total 264404901 bytes as given | [PSC-01 p.72 · AUTHOR-INTERPRETATION] |

- Objective: use numerical simulation to explore how gravity affects pyrolysis smoke growth, quantify the differences between microgravity and Earth-gravity smoke and identify the fluid-dynamic mechanisms behind them. [PSC-01 p.71 · AUTHOR-INTERPRETATION]
- Hypothesis: without buoyancy, mixing and heat transfer drop and the time-temperature history of the vapours (particle precursors) and the particle trajectories change markedly, changing the smoke composition; the chemical composition of the burning material also affects the smoke. [PSC-01 p.72 · AUTHOR-INTERPRETATION]
- Approach: direct numerical simulation (Navier-Stokes nodal approach) of the formation and growth of dibutyl-phthalate (DBP) particles in Earth gravity and microgravity; smoke from pyrolysis vapour expelled from a heated sample in a geometry similar to SAME's; two cross-flow velocities low enough that buoyancy cannot be neglected under gravity (values not reported by this source). [PSC-01 p.72 · AUTHOR-INTERPRETATION · nominal]
- Simulations assess how particle size distributions depend on thermophoresis, particle settling and flow geometry; for the lower flow speed, the buoyancy-driven differences in wake geometry were examined, with instantaneous scalar fields describing particle accumulation and growth in buoyant and non-buoyant wakes downstream of the hot vapour source; the final report gives the method, flow geometry and parameter space. [PSC-01 p.72 · AUTHOR-INTERPRETATION]
- Stated impact: models of smoke particles can show how temperature, gravity and material properties affect smoke, leading to better smoke detectors and preventing fires that cause loss of materiel and life. [PSC-01 p.72 · AUTHOR-INTERPRETATION]

### PSI-117 — Thermo-convective perturbation of droplet cool flames, CFD (ground study)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Effect of External Thermo-Convective Perturbation on Cool Flame Dynamics: A Multidimensional Multi-Physics CFD Analysis, also the proposal title | [PSC-01 p.72 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Droplet; managing center GRC; sponsoring agency NASA PSI grant; funding NNX17AF97A; related investigations PSI-69, PSI-142 | [PSC-01 p.72–73 · AUTHOR-INTERPRETATION] |
| Keywords | Cool Flames; thermo-convective perturbation; Droplet combustion; FLEX | [PSC-01 p.73 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/gz0q-b577; licence CC0-1.0; last modified 09-Jun-2026, version 2 | [PSC-01 p.72–73 · AUTHOR-INTERPRETATION] |
| People | Tanvir Farouk (University of South Carolina), PI; Mike Hicks (NASA GRC), Project Scientist | [PSC-01 p.74 · AUTHOR-INTERPRETATION] |
| Publications | 10 listed (Publication 1–10, with year, DOI where given, status published); the list stays in the PSI record | [PSC-01 p.74–75 · AUTHOR-INTERPRETATION] |
| Files | Analyzed Data 10, Presentations 4, Reports 1; total 70820870 bytes as given | [PSC-01 p.75 · AUTHOR-INTERPRETATION] |

- Objective: use FLEX flight data from PSI to quantify how imposed thermal and convective perturbations governed the dynamics and fate of established droplet cool flames, and explain run-to-run variability by separating deliberate heating from unintended drift-induced convection; for small and large droplets, map stability windows for ignition, sustained oscillation, transition to hot ignition and warm-flame behaviour, and extinction in microgravity; produce reusable models and sensitivity analyses coupling low-temperature chemistry with transport and radiation. [PSC-01 p.73 · AUTHOR-INTERPRETATION]
- Hypothesis: external thermo-convective perturbations (imposed temperature gradients, non-uniform heating, oscillatory or shear inflow) were expected to govern cool-flame ignition, oscillation, transition to hot ignition and extinction by shifting residence time and scalar dissipation, and to dominate transport in microgravity where buoyancy is suppressed; a multidimensional multi-physics CFD model mapped perturbation-dependent stability boundaries and predicted observables for comparison with FLEX. [PSC-01 p.73 · AUTHOR-INTERPRETATION]
- Approach: a 3-D OpenFOAM model of n-alkane droplet cool flames in microgravity coupling variable-density Navier–Stokes flow, low-temperature chemistry, heat and mass transfer and radiation, checked against ISS FLEX measurements; then three forcing modes, (i) convection alone mimicking droplet drift, (ii) imposed heat flux, (iii) convection plus heating, applied to large (1–4 mm) and sub-millimetre (~0.5 mm) droplets; simplified chemistry first, then reduced mechanisms for sweeps over forcing amplitude and frequency, ambient composition (including ozone-assisted cases) and pressure (not reported by this source: oxygen and pressure values). [PSC-01 p.73–74 · AUTHOR-INTERPRETATION · nominal]
- From each case, ignition delay, oscillation frequency and amplitude, and stand-off and extinction diameters were extracted to build stability maps of cool-flame onset, persistence and quenching, reconciled with FLEX observations and used to guide future large- and small-droplet test matrices. [PSC-01 p.74 · AUTHOR-INTERPRETATION]
- Stated impacts: in space, better spacecraft fire-safety modelling by resolving cool-flame and extinction behaviour in microgravity, using FLEX to define safer operating envelopes and materials; on Earth, low-temperature combustion knowledge for engine knock, efficiency and emissions, and validated CFD tools for practical combustors. [PSC-01 p.74 · AUTHOR-INTERPRETATION]

### PSI-142 — Cool-flame transitions at radiation / stretch extinction, counterflow flames (ground study)
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Quantitative Studies of Cool Flame Transitions at Radiation / Stretch Extinction Using Counterflow Flames | [PSC-01 p.75 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Spacecraft Fire Safety; managing center GRC; sponsoring agency NASA; funding NNX16AK07G; related investigation PSI-69 | [PSC-01 p.75–76 · AUTHOR-INTERPRETATION] |
| Keywords | Cool Flame Transitions; Ground-based experiments; Flames; Radiation; Low temperature flames; Counterflow flames; Extinction Limit; n-alkane; FLEX; Dibutyl Ether; Modeling; Kinetic experiments; Emissions; Supercritical Reacting Fluids; Low temperature chemistry; PSI Grant | [PSC-01 p.76 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/80qf-vj95; licence CC0-1.0; last modified 06-Mar-2025, version 2; hardware link https://doi.org/10.1016/j.combustflame.2016.01.008 | [PSC-01 p.75–76 · AUTHOR-INTERPRETATION] |
| People | Yiguang Ju (Princeton University), PI; Christopher Reuter (Princeton University), Co-I; Daniel Dietrich (NASA GRC), Technical Point of Contact | [PSC-01 p.77 · AUTHOR-INTERPRETATION] |
| Publications | 12 listed (Publication 1–12, with DOI where given, status published); the list stays in the PSI record | [PSC-01 p.77–78 · AUTHOR-INTERPRETATION] |
| Files | Analyzed Data 1, Experimental table 1; total 748117 bytes as given; experimental table `PSI-142_Experimental table_Data Summary Table.csv` | [PSC-01 p.78 · AUTHOR-INTERPRETATION] |

- Objectives, using FLEX data from PSI for new simulations and ground experiments with ozone-sensitized counterflow flames: (1) a new flammability-limit diagram for diffusional cool flames affected by radiation, diffusion and convection; (2) bridge the gap between flammability and extinction limits of hot and cool flames; (3) verify phenomena seen in the ISS flame extinguishment experiments; (4) new quantitative extinction-limit, flame-temperature and species data to validate kinetic and radiation models of cool flames; (5) extend the cool-flame work from ISS droplets to a more general ground system with radiation, diffusion, convection and low-temperature chemistry in a one-dimensional geometry. [PSC-01 p.76 · AUTHOR-INTERPRETATION]
- Question and hypothesis: what conditions make hot flames turn into cool flames, and how the cool-flame flammable region relates to the hot-flame flammability and extinction limits; oxygen concentration, dilution, pressure, and diffusive and convective transport are hypothesised to affect the cool-flame transition. [PSC-01 p.76 · AUTHOR-INTERPRETATION]
- Approach: at the FLEX flight conditions, the effect of oxygen concentration on cool-flame extinction limits was compared with three numerical schemes: (a) spark-assisted flame propagation in n-heptane/air; (b) one-dimensional freely propagating dimethyl ether (DME) flames by arc-length continuation; (c) cool-flame regimes and burning limits at elevated pressure, up to 20 atm, in DME/air (not reported by this source: oxygen values). [PSC-01 p.76 · AUTHOR-INTERPRETATION · nominal]
- Details are in "Dynamics of cool flames" (https://doi.org/10.1016/j.pecs.2019.100787), "Understanding Cool Flames and Warm Flames" (https://doi.org/10.1016/j.proci.2020.09.019) and "Study of the low-temperature reactivity of large n-alkanes through cool diffusion flame extinction" (https://doi.org/10.1016/j.combustflame.2017.01.028). [PSC-01 p.76 · AUTHOR-INTERPRETATION]
- Stated relevance: understanding the warm diffusion flame matters for highly turbulent flows and for microgravity because residence times can be long. [PSC-01 p.76–77 · AUTHOR-INTERPRETATION]
- Reported results: the warm flame has a double reaction-zone structure and plays a critical role in the transition between cool and hot flames; at elevated pressures the flammable region of warm and cool flames expands because low- and intermediate-temperature reactivity rises with pressure (no pressure values are given with this result; the approach's elevated-pressure simulations used DME/air up to 20 atm). [PSC-01 p.76–77 · AUTHOR-INTERPRETATION]
- Since many real engines run at 20-40 atm, the record calls cool and warm flames important regimes for high-pressure near-limit combustion, and says the calculations will serve to advance the understanding of near-limit flame dynamics and provide guidance for experimental observation of different flame regimes. [PSC-01 p.77 · AUTHOR-INTERPRETATION]

### PSI-159 — ACME CFI-G: Cool Flames Investigation with Gases
| Field | As listed in the record | Citation |
|---|---|---|
| Name | Advanced Combustion via Microgravity Experiments / Cool Flames Investigation with Gases (acronym ACME CFI-G); proposal title "ISS: Collaborative Research: Spherical Cool Diffusion Flames Burning Gaseous Fuels" | [PSC-01 p.78 · AUTHOR-INTERPRETATION] |
| Area | Combustion Science › Flames of Gaseous Fuels; space program National Science Foundation (NSF), Center for the Advancement of Science in Space (CASIS); managing center GRC; sponsoring agency NSF CASIS | [PSC-01 p.78–79 · AUTHOR-INTERPRETATION] |
| Keywords | chemical kinetics; ethane; heat loss; low-temperature combustion; porous burner; dilution; formaldehyde; intensified video camera; n-butane; negative-temperature coefficient | [PSC-01 p.79 · AUTHOR-INTERPRETATION] |
| Record | DOI 10.60555/cyt1-kh64; licence CC0-1.0; last modified 20-Nov-2025, version 1; hardware pages https://www1.grc.nasa.gov/space/iss-research/iss-fcf/combustion-science/acme/implementation/, https://www1.grc.nasa.gov/space/iss-research/iss-fcf/cir/ | [PSC-01 p.78–79 · AUTHOR-INTERPRETATION] |
| People | Peter B. Sunderland (University of Maryland), PI; Co-Is Richard L. Axelbaum (Washington University in St. Louis) and Forman Williams (UC San Diego); Dennis P. Stocker (NASA GRC), Project Scientist | [PSC-01 p.80 · AUTHOR-INTERPRETATION] |
| Publications | 2 listed (Publication 1–2, with DOI, status published); the list stays in the PSI record | [PSC-01 p.80 · AUTHOR-INTERPRETATION] |
| Files | Engineering Documents 1, Experimental table 2, Raw Data 3749, Reports 1, Representative Image(s) 2, metadata 1; total 2085592429259 bytes as given; experimental tables `PSI-159_Experimental table_CFI-G_Normal Flames.csv`, `PSI-159_Experimental table_CFI-G_Inverse Flames.csv` | [PSC-01 p.80 · AUTHOR-INTERPRETATION] |

- Objectives: (1) plan and support ISS flight tests; (2) find the conditions under which cool diffusion flames occur for propane, n-butane and n-pentane, normal and inverse flames, over a broad range of Zst, Tad and fluent flow rate; (3) support the flights with advanced CFD; (4) identify or develop a kinetics mechanism that matches the CFD to the ISS measurements; (5) disseminate the results widely. [PSC-01 p.79 · AUTHOR-INTERPRETATION]
- Hypotheses, to be shown on ISS for the first time: (1) steady-state cool diffusion flames on spherical porous burners; (2) cool diffusion flames of propane, n-butane and n-pentane; (3) cool diffusion flames over a wide range of Zst, Tad and pressure; (4) inverse cool diffusion flames; (5) cool diffusion flames that extinguish when the fluent flow rate drops and turn into hot diffusion flames when it rises, with possible oscillation between hot and cool flames. [PSC-01 p.79 · AUTHOR-INTERPRETATION]
- Approach: spherical diffusion flame tests on ISS with multiple fuels and a range of reactant dilutions, flow rates and pressures, for normal and inverse convection directions, observed with cameras, radiometers, photomultiplier tubes and thermocouples. [PSC-01 p.79 · AUTHOR-INTERPRETATION · nominal]
- Stated context: combustion provides 86 % of the world's energy and an even higher share of the energy used for transportation; transport internal combustion engines generally reach thermal efficiencies of 38 % or lower because of thermal losses; these efficiencies may increase to 60 % if future engines can take advantage of ultra-lean combustion, but limited understanding of cool-flame chemistry holds this back. [PSC-01 p.79 · AUTHOR-INTERPRETATION]
- Cool diffusion flames, with peak temperatures of 500 – 1000 K, were discovered in 2012, and research on them has grown exponentially since. [PSC-01 p.79–80 · AUTHOR-INTERPRETATION]
- Stated impact: the project's measurements will help test and advance cool-flame kinetics mechanisms, which should help develop more efficient internal combustion engines. [PSC-01 p.80 · AUTHOR-INTERPRETATION]

## Supersessions
<!-- none: PSC-01 is the only source of this file and the register lists no version of it -->

## Conflicts
| Quantity | Source A: value · conditions · citation | Source B: value · conditions · citation | Reason for the difference |
|---|---|---|---|
| PSI-39 CFI chamber pressure range | 0.25 atm to 5 atm · objective 1, n-dodecane and n-dodecane/iso-dodecane droplets, ISS · [PSC-01 p.30–31 · AUTHOR-INTERPRETATION] | 0.25 to 0.5 atm · approach, gas mixture delivered to the MDCA combustion chamber, ISS · [PSC-01 p.30–31 · AUTHOR-INTERPRETATION · nominal] | not stated in the sources |

## Open items / gaps
- Not found in the 33 curated documents: a PSI Combustion Science record (PSI-n accession) of an investigation run at partial gravity (lunar or Martian level).

# FILE: DETECTION_SUPPRESSION
# DETECTION_SUPPRESSION — Putting out and detecting fires in spacecraft: ISS droplet-extinction results (FLEX) and NASA's guide to ISS combustion science

## Scope
Covers: how fires are suppressed and detected in spacecraft, from three documents only.
- FLX-03 = Nayagam et al. (2011), a conference results paper with measured values: methanol droplets burned to extinction in oxygen / carbon-dioxide / nitrogen mixtures on the International Space Station (ISS) in the Flame Extinguishment Experiment (FLEX), compared with a quasi-steady droplet-burning theory.
- OVR-12 = NASA Johnson Space Center (2015), "A Researcher's Guide to: International Space Station Combustion Science" (NP-2015-10-034-JSC), an overview guide that mostly reports findings in words, cites other work, and describes several experiments as planned or in development at its date (2015). Statuses below are as of that guide.
- SMK-01 = Urban et al. (2012), a conference results paper: measured smoke-particle sizes, particle shapes and detector responses from the reflight of the Smoke Aerosol Measurement Experiment (SAME-2) on the ISS in 2010.
Not here: per-test data on solid materials (burn-by-burn oxygen, pressure, flow and outcome); these are not in the three documents.
Labels: MEASURED = observed or measured in tests; MODELED = from theory or a model; AUTHOR-INTERPRETATION = the authors' explanation, definition or judgement; CITED = attributed to other work. Flags: ~fig = read from a figure (approximate); nominal = a set point or stated condition; single-test = rests on one test. "Planned" marks intentions stated in the guide, never results.

## Conditions covered
| Source | Campaign / test family | Fuel or material and form | Gravity, platform, facility | Atmosphere (oxygen, diluents, pressure) | Flow | Tests | Citation |
|---|---|---|---|---|---|---|---|
| FLX-03 | Flame Extinguishment Experiment (FLEX): methanol droplet burns | methanol, isolated single droplets, free-floating; initial diameters 2 to 4 mm | microgravity, ISS, MDCA in the CIR | oxygen with nitrogen and/or carbon dioxide at 0.7 and 1 atm, oxygen lowered from test to test toward the LOI; 13% to 21% O2 at 1 atm in Fig. 3 | quiescent | 54 analysed, of 104 methanol tests (over 200 methanol and heptane burns in all) | [FLX-03 p.1 · MEASURED · nominal; FLX-03 p.2 · MEASURED; FLX-03 p.3–4 · Fig. 3 · MEASURED; OVR-12 p.53 · AUTHOR-INTERPRETATION]
| OVR-12 | FLEX, as the guide describes it | heptane and methanol droplets; Fig. 2 an n-heptane droplet | microgravity, ISS, Combustion Integrated Rack (CIR) with the Multi-user Droplet Combustion Apparatus (MDCA) | oxygen/nitrogen mixtures diluted with nitrogen, carbon dioxide, helium or xenon; Fig. 2: 70% CO2, 21% O2, balance N2; pressure not stated | Fig. 2 droplet moved at 3 cm/s | not stated | [OVR-12 p.12 · MEASURED; OVR-12 p.12 · Fig. 2 · MEASURED; OVR-12 p.36 · MEASURED · nominal]
| OVR-12 | FLEX-2 image (Fig. 3) | ethanol droplets | ISS (FLEX-2) | 30% O2 at 2.4 atm; diluents vary between panels | not stated | not stated | [OVR-12 p.12 · Fig. 3 · MEASURED]
| OVR-12 | Burning and Suppression of Solids (BASS) | flat samples, polymethylmethacrylate (PMMA) spheres, porous wax slabs, wax candles; images of 2-cm diameter acrylic spheres and a 2-cm wide cotton-fiberglass fabric | microgravity, ISS, Microgravity Science Glovebox (MSG), SPICE flow duct | ISS air, nominally 21% O2 by volume at 1 atm; nitrogen added for tests down to 17% O2 | airflow speed is the main variable; sphere images at 10 and 12 cm/s; fabric in opposed flow stepped from 10 cm/s to below 1 cm/s | not stated | [OVR-12 p.2 · MEASURED; OVR-12 p.19 · MEASURED · nominal; OVR-12 p.20 · Fig. 11 · MEASURED · nominal; OVR-12 p.20 · Fig. 12 · MEASURED · nominal; OVR-12 p.21 · MEASURED; OVR-12 p.22 · MEASURED]
| OVR-12 | BASS-related drop-tower test (Fig. 13) | PMMA sphere | 1 g, then 0 g in a drop tower | nitrogen jet applied for extinguishment; oxygen and pressure not stated | not stated | one test shown | [OVR-12 p.21 · Fig. 13 · MEASURED · nominal, single-test]
| OVR-12 | Solid Fuel Ignition and Extinction (SoFIE), planned | solid plastics, most likely PMMA or Delrin; plastic spheres for long burns | microgravity, ISS, CIR insert plus a large flow duct in the MSG | 10 to 40% O2 by volume at 0.2 to 1.5 atm; Space Exploration Atmospheres (SEA) | 0 to 30 cm/s ventilation airflow | none yet (planned) | [OVR-12 p.19 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.21 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.22 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.23 · AUTHOR-INTERPRETATION · nominal]
| OVR-12 | Water Mist Fire Suppression experiment (Mist) | premixed flames moving along a tube, various fuel and oxygen mixtures, attacked with water mist | microgravity, space shuttle STS-107 (2003), Combustion Module (CM) | not stated | not stated | not stated | [OVR-12 p.26 · CITED · nominal]
| OVR-12 | Smoke Aerosol Measurement Experiment (SAME); Dust Aerosol measurement Feasibility Test | smoke from spacecraft materials; background aerosol | ISS; SAME in the MSG in 2007 and 2010 | not stated | not stated | not stated | [OVR-12 p.26 · CITED; OVR-12 p.45 · AUTHOR-INTERPRETATION]
| OVR-12 | Candle flames | candles | microgravity, Mir space station | not stated | not stated | several ("some tests") | [OVR-12 p.30 · CITED]
| OVR-12 | Structure of Flame Balls at Low Lewis-number (SOFBALL) | premixed fuel/oxidizer/diluent mixtures, very fuel-lean, very low Lewis number | microgravity, space shuttle STS-83 and STS-94 (1997), STS-107 (2003), CM | compositions and pressure not stated | not stated | not stated | [OVR-12 p.25 · CITED · nominal; OVR-12 p.30 · CITED]
| OVR-12 | Gas-jet flames: LSP, TGDF, ELF, SPICE, SLICE | laminar, axisymmetric gas-jet diffusion flames | microgravity, space shuttle (1997, 2003) and ISS MSG (2009, 2012) | sealed chambers (LSP, TGDF) or fan-driven flow ducts (ELF, SPICE) | coflow in SPICE | not stated | [OVR-12 p.13 · MEASURED · nominal; OVR-12 p.14 · MEASURED · nominal]
| OVR-12 | ACME drop-tower tests (Figs. 6, 7) | ethylene at 1.51 mg/s from a porous sphere; 25% propane, 2% O2, 49% argon, 24% N2 from a porous burner | 2.2-second Drop Tower, NASA Glenn | air at atmospheric pressure (Fig. 6); not stated for Fig. 7 | not stated | one test per image | [OVR-12 p.2 · MEASURED · nominal; OVR-12 p.17 · Fig. 6 · MEASURED · single-test; OVR-12 p.17 · Fig. 7 · MEASURED · single-test]
| SMK-01 | Smoke Aerosol Measurement Experiment reflight (SAME-2), ISS Expedition 24, July to September 2010 | Teflon, Kapton, Pyrell, silicone rubber, cellulose (lamp wick) and dibutyl phthalate on a porous wick (p.7; the abstract lists five materials, with cotton), each overheated about 60 s below ignition at a material-specific temperature (smoke from pyrolysis, not flaming) | microgravity, ISS, MSG; instrument calibration on the ground before flight | not reported by this source | airflow past the sample 0 to 8 cm/s, baseline 8 cm/s; smoke then aged 11 to 1800 s | over 100 samples; 11 zero-flow tests; 72 TEM grid samples | [SMK-01 p.1 · MEASURED · nominal; SMK-01 p.4–5 · MEASURED · nominal; SMK-01 p.7 · MEASURED; SMK-01 p.10 · MEASURED; SMK-01 p.11 · MEASURED · nominal]

## Fire suppression

### Flame Extinguishment Experiment (FLEX): methanol droplets in oxygen / carbon-dioxide / nitrogen on the ISS (FLX-03)
- FLEX, under way on the ISS at the paper's date (2011), uses microgravity droplet combustion to study the fire-safety side of space exploration environments: methanol and heptane droplets burn in carbon-dioxide- and nitrogen-diluted atmospheres of varying oxygen and pressure, and FLX-03 reports the methanol tests, then recently completed. [FLX-03 p.1 · MEASURED · nominal]
- Motivation: the authors wanted to understand condensed-phase fuel flammability limits in microgravity. [FLX-03 p.1 · AUTHOR-INTERPRETATION]

| Set | Fuel and form | Gravity, platform, facility | Atmosphere and pressure | Flow | Ignition | Not reported by this source | Citation |
|---|---|---|---|---|---|---|---|
| C1 | methanol, isolated single droplets, free-floating after opposed-needle deployment; initial diameters 2 to 4 mm across the study (diameter of each plotted point not stated) | microgravity, ISS, MDCA installed in the CIR (US Module) | oxygen with nitrogen and/or carbon dioxide (split for each point not stated); 0.7 or 1 atm, as the series states | quiescent | two symmetrically positioned hot-wire igniters | ambient temperature, test duration | [FLX-03 p.1 · MEASURED · nominal]
| C2 | methanol, isolated single droplets, free-floating after opposed-needle deployment; initial diameter as plotted | microgravity, ISS, MDCA installed in the CIR (US Module) | 1 atm; oxygen 13% to 21% (the series label); inert gas pure nitrogen or nitrogen/carbon-dioxide mixtures, most mixtures holding more N2 than CO2, one test at 21% O2 holding 70% CO2 and 9% N2 (split for each point not stated) | quiescent | two symmetrically positioned hot-wire igniters | ambient temperature, test duration | [FLX-03 p.1 · MEASURED · nominal; FLX-03 p.3–4 · MEASURED · nominal]

- Test count at the paper's date: over two hundred methanol and heptane droplet burns in oxygen/nitrogen/carbon-dioxide mixtures, initial diameters 2 to 4 mm (ISS, MDCA in the CIR); 104 were methanol tests, 54 of which gave an extinction diameter while the droplet stayed in the back-lit camera's view, and those 54 are the tests analysed. [FLX-03 p.1 · MEASURED · nominal; FLX-03 p.2 · MEASURED]
- Method: at fixed ambient pressure, oxygen was lowered systematically from one test to the next to approach the limiting oxygen index (LOI) (conditions C1). [FLX-03 p.1 · MEASURED]
- Found: at 1 atm, with 13% oxygen and the rest nitrogen, ignition and some burning were observed (conditions C1; initial diameter of this burn not stated). [FLX-03 p.1 · MEASURED]
- FLX-03 presents measured burning rates, flame stand-off ratios and extinction diameters of methanol droplets 2 to 4 mm across, for varying oxygen and diluent concentrations (conditions C1). [FLX-03 p.1 · MEASURED; FLX-03 p.6 · MEASURED]
- It also gives simplified theoretical models to explain the observed variations in extinction diameter and flame stand-off ratio. [FLX-03 p.1 · MODELED]
- Values read from the figures below are approximate; † marks a low-confidence read where the marker is partly hidden by overlapping markers and its centre estimated, ‡ a low-confidence read from a stack of overlapping markers whose count and centres are estimated. [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig; FLX-03 p.2 · Fig. 1b · MEASURED · ~fig; FLX-03 p.3 · Fig. 2b · MEASURED · ~fig; FLX-03 p.4 · Fig. 3 · MEASURED · ~fig]

- Burning rate: droplet diameter d against time came from the droplet-view camera's digital images. [FLX-03 p.2 · MEASURED]
- The burning-rate constant K_e is the slope of the d²-against-time plot. [FLX-03 p.2 · AUTHOR-INTERPRETATION]
- Fig. 1a plots measured K_e (axis 0 to 0.8 mm²/s) against the ambient oxygen mole fraction x_o∞ (axis 0 to 0.4), series p = 0.7 atm (+) and p = 1 atm (o). [FLX-03 p.2 · Fig. 1a · MEASURED]
- Found: the burning rate falls as oxygen falls, as expected (conditions C1, 0.7 and 1 atm). [FLX-03 p.2 · MEASURED]
- Found: at fixed oxygen, raising carbon dioxide at the expense of nitrogen tends to lower K slightly (conditions C1; pressure for this statement not stated, Fig. 1a covering 0.7 and 1 atm). [FLX-03 p.2 · MEASURED]

| Set | Pressure (series) | x_o∞, about (±0.01) | K_e read from Fig. 1a, mm²/s, about (±0.025), in reading order | Citation |
|---|---|---|---|---|
| C1 | 0.7 atm | 0.15 | 0.190; 0.330; 0.346; 0.372† | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.17 | 0.382; 0.396; 0.401 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.18 | 0.360; 0.368; 0.424 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.20 | 0.409; 0.432†; 0.443; 0.456† | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.21 | 0.408; 0.432; 0.449 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.23 | 0.505 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.25 | 0.568 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.33 | 0.686 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.34 | 0.652 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 1 atm | 0.13 | 0.382‡; 0.378‡; 0.373‡; 0.366‡ | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 1 atm | 0.14 | 0.373; 0.342; 0.304 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 1 atm | 0.15 | 0.426; 0.388‡; 0.380‡; 0.373‡; 0.366‡; 0.363‡; 0.302 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 1 atm | 0.16 | 0.383‡; 0.382‡; 0.374‡; 0.339 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 1 atm | 0.18 | 0.440; 0.409 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 1 atm | 0.20 | 0.464; 0.440; 0.415 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 1 atm | 0.21 | 0.553; 0.540‡; 0.536‡; 0.527‡; 0.500; 0.493; 0.465; 0.451 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]
| C1 | 1 atm | 0.30 | 0.602 | [FLX-03 p.2 · Fig. 1a · MEASURED · ~fig]

- K_e is set against the classical quasi-steady theoretical burning-rate constant K_c. [FLX-03 p.2 · MODELED]
- Fig. 1b plots the fractional deviation (K_e − K_c)/K_e (no unit; axis -2.0 to 0.5) against x_o∞ (axis 0 to 0.4), series p = 0.7 atm (+) and p = 1 atm (o). [FLX-03 p.2 · Fig. 1b · MEASURED]
- Fig. 1b also carries an unlabelled dashed horizontal line at about 0, drawn from x_o∞ about 0.10 to 0.40 (read tolerance ±0.05 on the deviation, ±0.01 on x_o∞). [FLX-03 p.2 · Fig. 1b · AUTHOR-INTERPRETATION · ~fig]
- The authors judge that at low oxygen the burning-rate constant departs substantially from the quasi-steady prediction (conditions C1). [FLX-03 p.2 · AUTHOR-INTERPRETATION]

| Set | Pressure (series) | x_o∞, about (±0.01) | (K_e − K_c)/K_e read from Fig. 1b, about (±0.05), in reading order | Citation |
|---|---|---|---|---|
| C1 | 0.7 atm | 0.15 | -1.530; -0.455; -0.390†; -0.293† | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 0.7 atm | 0.17 | -0.259; -0.211; -0.197 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 0.7 atm | 0.18 | -0.361; -0.333; -0.155 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 0.7 atm | 0.20 | -0.198†; -0.151‡; -0.138‡; -0.081† | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 0.7 atm | 0.21 | -0.204; -0.133†; -0.087† | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 0.7 atm | 0.23 | 0.013 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 0.7 atm | 0.25 | 0.118 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 0.7 atm | 0.33 | 0.254 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 0.7 atm | 0.34 | 0.215 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 1 atm | 0.13 | -0.334‡; -0.355‡; -0.366‡; -0.397‡ | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 1 atm | 0.14 | -0.315; -0.488; -0.614 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 1 atm | 0.15 | -0.153; -0.317‡; -0.347‡; -0.354‡; -0.396‡; -0.624 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 1 atm | 0.16 | -0.279‡; -0.284‡; -0.312; -0.446 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 1 atm | 0.18 | -0.158; -0.247 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 1 atm | 0.20 | -0.097; -0.160; -0.230 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 1 atm | 0.21 | 0.109‡; 0.076‡; 0.051‡; 0.046‡; -0.018‡; -0.097; -0.135 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]
| C1 | 1 atm | 0.30 | 0.149 | [FLX-03 p.2 · Fig. 1b · MEASURED · ~fig]

- Flame stand-off ratio: d_f/d was computed over time from the measured droplet diameter d and flame diameter d_f. [FLX-03 p.2 · AUTHOR-INTERPRETATION]
- Flame diameters came from frame-by-frame analysis of both the UV and the CCD camera images. [FLX-03 p.2 · MEASURED]
- Found: in a typical run d_f/d stays roughly constant away from the ignition and final-extinction periods (conditions C1). [FLX-03 p.2–3 · MEASURED]
- Fig. 2a plots the average d_f/d over that quasi-steady period (axis 3 to 6.5) against x_o∞ (printed χo∞; axis labelled 0.00 to 0.30) for 1 atm (filled square) and 0.7 atm (filled circle), each point standing for a unique ambient condition. [FLX-03 p.3 · Fig. 2a · MEASURED]
- Found: d_f/d rises as ambient oxygen falls, as expected (conditions C1). [FLX-03 p.3 · MEASURED]
- The authors' reason: the flame has to sit farther out to meet the stoichiometric requirement. [FLX-03 p.3 · AUTHOR-INTERPRETATION]

| Set | Pressure (series) | x_o∞, about (±0.01) | average d_f/d read from Fig. 2a, about (±0.05); camera not stated | Citation |
|---|---|---|---|---|
| C1 | 1 atm | 0.13 | 6.00 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 1 atm | 0.14 | 6.00; 5.50 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 1 atm | 0.15 | 5.70; 5.10 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 1 atm | 0.16 | 5.70 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 1 atm | 0.18 | 5.00 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 1 atm | 0.20 | 5.20 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 1 atm | 0.21 | 4.90; 4.70; 4.50 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 1 atm | 0.30 | 4.40 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.15 | 6.20 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.17 | 5.80 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.18 | 5.40 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.20 | 4.80; 4.60 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.21 | 4.80 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]
| C1 | 0.7 atm | 0.23 | 5.00 | [FLX-03 p.3 · Fig. 2a · MEASURED · ~fig]

- The measured d_f/d can also be correlated with a simplified quasi-steady model that includes water absorption, developed by Nayagam (FLX-03 ref. [2]). [FLX-03 p.3 · CITED]
- That model takes the measured burning-rate constant K and calculated effective diffusion coefficients of oxygen (D_o) and water vapour (D_w), and predicts d_f/d by Eq. 1. [FLX-03 p.3 · MODELED]
- Eq. 1: d_f/d ≈ (1/2)[a + √(a² − 2a + 4b + 1) + 1], with a = (W_av ν_o ρ_f K)/(8 W_f ν_f ρ_g D_o) · 1/x_o,∞, while b = (W_w ρ_f)/(W_f ρ_w) · (ν_o D_w x_w,f)/(ν_f D_o x_o,∞); W, ν, ρ and D are molecular weight, stoichiometric coefficient, density and effective diffusivity, and subscripts f, w, g, av and ∞ mean fuel, water vapour, gas, average gas phase and ambient (not reported by this source: the meaning of x_w,f, units, fitted range). [FLX-03 p.3 · Eq. 1 · MODELED]
- Fig. 2b plots measured d_f/d (axis 2 to 8) against d_f/d predicted by Eq. 1 (axis 2.0 to 8.0) in four series: 1atm-uv (open square), 0.7atm-uv (open circle), 1atm-cc (filled square) and 0.7atm-cc (filled circle). [FLX-03 p.3 · Fig. 2b · MODELED]
- An unlabelled dotted diagonal joins about (2.5, 2.5) and (7.5, 7.5) on the (predicted, measured) axes (read tolerance ±0.1). [FLX-03 p.3 · Fig. 2b · AUTHOR-INTERPRETATION · ~fig]
- The UV values are the outermost digitally enhanced threshold of detected intensity, so they mark the outer edge of the reaction zone. [FLX-03 p.3 · AUTHOR-INTERPRETATION]
- The CC (CCD colour) values mark peak visible-range intensity, to which fuel molecules may contribute, possibly biasing them toward smaller diameters. [FLX-03 p.3 · AUTHOR-INTERPRETATION]
- The authors judge that overall the results appear to compare well with the predictions, and that Eq. 1 agrees closely even at low oxygen because it uses the measured burning-rate constants instead of the quasi-steady theoretical ones. [FLX-03 p.3 · AUTHOR-INTERPRETATION]

| Set | Series (pressure, camera, legend label) | predicted d_f/d (Eq. 1) → measured d_f/d, read from Fig. 2b, about (±0.1 on both) | Citation |
|---|---|---|---|
| C1 | 1 atm, UV camera (1atm-uv) | 4.65 → 6.20; 5.17 → 5.70; 5.22 → 6.20; 5.69 → 6.90; 5.69 → 6.10†; 5.76 → 6.10†; 5.72 → 6.00†; 5.96 → 7.20; 6.13 → 6.60; 6.62 → 7.00†; 6.75 → 7.30 | [FLX-03 p.3 · Fig. 2b · MEASURED · ~fig; FLX-03 p.3 · Fig. 2b · MODELED · ~fig]
| C1 | 0.7 atm, UV camera (0.7atm-uv) | 5.22 → 6.00; 5.48 → 5.80; 5.55 → 6.10; 5.59 → 6.40; 5.94 → 6.20; 6.60 → 6.90 | [FLX-03 p.3 · Fig. 2b · MEASURED · ~fig; FLX-03 p.3 · Fig. 2b · MODELED · ~fig]
| C1 | 1 atm, CCD colour camera (1atm-cc) | 4.65 → 4.40; 5.17 → 4.70; 5.22 → 5.20; 5.69 → 5.00†; 5.69 → 4.90†; 5.71 → 5.10; 5.76 → 5.50; 5.96 → 5.70†; 6.13 → 5.70; 6.62 → 6.00; 6.75 → 6.00 | [FLX-03 p.3 · Fig. 2b · MEASURED · ~fig; FLX-03 p.3 · Fig. 2b · MODELED · ~fig]
| C1 | 0.7 atm, CCD colour camera (0.7atm-cc) | 5.23 → 4.60; 5.48 → 4.80; 5.55 → 5.00; 5.60 → 4.80; 5.94 → 5.80; 6.11 → 5.40; 6.60 → 6.20 | [FLX-03 p.3 · Fig. 2b · MEASURED · ~fig; FLX-03 p.3 · Fig. 2b · MODELED · ~fig]

- Extinction diameter: Fig. 3 plots droplet extinction diameter d_e (mm, axis 0 to 5) against initial diameter d_0 (mm, axis 0 to 5) for tests at 1 atm with 13% to 21% oxygen; legend: + 13%, filled circle 14%, asterisk 15%, x 16%, filled triangle 18%, open circle 20% and open square 21% O2, dashed line "calc", dotted line "no burn". [FLX-03 p.3–4 · Fig. 3 · MEASURED]
- The dotted "no burn" line, where extinction diameter equals initial diameter, goes from about 0.5 mm to 5 mm on both axes (read tolerance ±0.1 mm on d_0, ±0.125 mm on d_e). [FLX-03 p.4 · Fig. 3 · AUTHOR-INTERPRETATION · ~fig]
- The dashed "calc" line goes from about (d_0, d_e) = (1.05, 0.50) mm to about (3.5, 1.7) mm (same read tolerance; 1 atm); the text identifies it as a calculated infinite-rate flame temperature of 1800 K. [FLX-03 p.4 · Fig. 3 · MODELED · ~fig; FLX-03 p.5 · MODELED]

| Set | Oxygen (series) | initial diameter d_0 → extinction diameter d_e, mm, read from Fig. 3, about (d_0 ±0.1, d_e ±0.125) | Citation |
|---|---|---|---|
| C2 | 13% | 2.56 → 1.78; 2.67 → 1.87†; 2.93 → 2.44; 3.29 → 2.77 | [FLX-03 p.4 · Fig. 3 · MEASURED · ~fig]
| C2 | 14% | 2.37 → 1.86; 3.28 → 3.12; 3.41 → 2.97 | [FLX-03 p.4 · Fig. 3 · MEASURED · ~fig]
| C2 | 15% | 2.45 → 1.33; 2.59 → 1.66; 2.62 → 1.34†; 2.70 → 1.87; 3.08 → 2.55; 3.79 → 3.54; 4.01 → 3.31 | [FLX-03 p.4 · Fig. 3 · MEASURED · ~fig]
| C2 | 16% | 2.71 → 1.36†; 2.81 → 1.54; 3.78 → 3.28; 4.31 → 4.03 | [FLX-03 p.4 · Fig. 3 · MEASURED · ~fig]
| C2 | 18% | 3.09 → 1.44; 3.78 → 1.94 | [FLX-03 p.4 · Fig. 3 · MEASURED · ~fig]
| C2 | 20% | 3.38 → 1.66; 3.64 → 1.58; 4.42 → 1.99 | [FLX-03 p.4 · Fig. 3 · MEASURED · ~fig]
| C2 | 21% | 1.71 → 0.92†; 1.80 → 0.99†; 1.80 → 0.90†; 1.95 → 0.73; 2.00 → 0.92; 2.72 → 1.32; 2.90 → 1.43; 3.13 → 1.64; 3.32 → 1.35 | [FLX-03 p.4 · Fig. 3 · MEASURED · ~fig]

- Found: the points fall roughly into two bands; extinction diameters are small at 18% oxygen or more, but near the initial diameter (the no-burn line) at 14% or less (conditions C2). [FLX-03 p.4 · MEASURED]
- Found: the 15% and 16% points move from the small-extinction-diameter group to the large one as initial diameter grows, leaving the small-diameter range at a larger initial diameter for the higher oxygen level (conditions C2). [FLX-03 p.4 · MEASURED]
- The authors read this as entirely consistent with a transition from diffusive to radiative extinction: the upper group extinguishes radiatively and the lower group diffusively; at 18% oxygen or more all droplets show diffusive extinction, at 14% or less all show radiative extinction, and critical initial diameters separate the two behaviours at 15% and 16% (methanol, 1 atm). [FLX-03 p.4 · AUTHOR-INTERPRETATION]
- Found: the 14% points lying closer to the no-burn line than the 13% points had more carbon dioxide in the atmosphere (conditions C2; their CO2 fractions not stated). [FLX-03 p.4 · MEASURED]
- The authors take this to suggest that carbon dioxide promotes radiative extinction, as expected from its much greater infrared emissivity. [FLX-03 p.4 · AUTHOR-INTERPRETATION]
- Found: among the three diffusive-extinction points with the smallest initial diameters, one had 70% carbon dioxide (conditions C2; its oxygen is not restated in that sentence). [FLX-03 p.4 · MEASURED · single-test]
- The authors infer that carbon dioxide's influence on diffusive extinction is not very different from that of nitrogen. [FLX-03 p.4 · AUTHOR-INTERPRETATION]
- Found: with very few exceptions, radiant extinction occurs at extinction diameters very close to the initial diameter, in the upper group of Fig. 3 (conditions C2). [FLX-03 p.6 · MEASURED]
- The authors infer that the whole combustion process in that upper group was probably transient and its extinction diameter probably depends on the ignition energy supplied, the amount of combustion that can be forced being likely proportional to that initiation impulse; in that sense these atmospheres might be regarded as lying outside the LOI. [FLX-03 p.6 · AUTHOR-INTERPRETATION]

- Theory: to complement full numerical computations and give another perspective, the authors applied the quasi-steady droplet theory of Zhang et al. (FLX-03 ref. [3]) to the data. [FLX-03 p.4 · CITED]
- That theory treats quasi-steady, spherically symmetric burning with water absorbed into the droplet, and addresses two limits: water diffusing through the liquid methanol, and a well-mixed liquid. [FLX-03 p.4 · CITED]
- The authors hold the well-mixed limit to be the realistic one, because of a strong solutal-Marangoni (diffuso-capillary) instability. [FLX-03 p.4 · AUTHOR-INTERPRETATION]
- Zhang et al. derived, from gas-phase conservation of fuel, water and temperature in the flame-sheet (infinitely fast reaction) limit, a pair of nonlinear ordinary differential equations that give the liquid temperature and the liquid's water concentration as functions of droplet diameter. [FLX-03 p.4 · CITED]
- Here the well-mixed limit is used, gas-phase Lewis numbers are taken as unity (an approximation shown sufficiently accurate in FLX-03 ref. [4]), and the pair of equations is integrated numerically for the specific atmospheres of the tests. [FLX-03 p.4–5 · MODELED]
- Zhang et al. also used rate-ratio asymptotics for finite-rate chemistry to calculate droplet extinction diameters, extinction being where the droplet diameter and the extinction diameter, both plotted against time, became equal. [FLX-03 p.5 · CITED]
- Rate-ratio asymptotics and detailed chemical-kinetic calculations often put droplet extinction at a more or less fixed flame temperature of about 1300 K to 1600 K, the value depending on atmosphere and conditions (not reported by this source for this range: atmosphere, pressure, droplet size). [FLX-03 p.5 · CITED]
- Extinction is therefore judged here through flame temperature: as a rough indication, the measured extinction diameters are compared with droplet diameters calculated for fixed infinite-rate adiabatic flame temperatures. [FLX-03 p.5 · MODELED]
- Limitation: the most relevant quantity is the actual flame temperature at extinction, which lies a few hundred degrees below the infinite-rate adiabatic value. [FLX-03 p.5 · AUTHOR-INTERPRETATION]
- In the model, once burning starts some flame-made water diffuses back to the droplet and is absorbed, so the liquid's water content builds up while the flame temperature stays practically constant; eventually water begins to vaporize with the fuel, the gas-phase water flux reverses, and the vapour reaching the flame grows ever more dilute, lowering the flame temperature (methanol, well-mixed liquid, unity Lewis numbers; atmosphere not specified). [FLX-03 p.4–5 · MODELED]
- In air, for example, the calculated infinite-rate flame temperature falls from 1815 K to 1300 K while the droplet diameter shrinks by about a factor of two (methanol; not reported by this source for this calculation: pressure, initial diameter). [FLX-03 p.5 · MODELED]
- The first fall after the zero-water-flux condition is noticeably steep, so the true extinction temperature is expected to be reached shortly after that condition. [FLX-03 p.5 · MODELED]
- The authors find that the calculated zero-flux condition for air gives a tight upper bound for the lower (diffusive) group of Fig. 3, and that a similarly calculated 1750 K line (not drawn in the figure) gives a tight lower bound. [FLX-03 p.4 · Fig. 3 · AUTHOR-INTERPRETATION; FLX-03 p.5 · AUTHOR-INTERPRETATION]
- They conclude that diffusive extinction occurs when the infinite-rate ideal flame temperature drops to near 1800 K in atmospheres with 21% O2, a value that falls with dilution, to below 1650 K at 18% (methanol, 1 atm, Fig. 3 data). [FLX-03 p.4 · Fig. 3 · MEASURED · nominal; FLX-03 p.5 · AUTHOR-INTERPRETATION]
- Limitation: all these calculations neglect radiant energy loss, so they cannot address radiant extinction. [FLX-03 p.5 · MODELED]
- Radiant loss could be added by artificially lowering the heat release per unit mass of oxidizer consumed to an effective net value, which needs an estimate of the ratio of radiant-loss rate to heat-release rate and so of Planck-mean absorption lengths for H2O and CO2 in the flame. [FLX-03 p.5 · MODELED]
- Once estimated for one droplet size, the net heat release follows for any size: the heat-release rate scales with surface area times gradient, so with the diameter, and the radiant-loss rate with surface area times flame thickness, so with the diameter cubed; their ratio, and with it the radiant fraction and the needed cut in heat release, grows as the square of the diameter (stated in words, no equation number). [FLX-03 p.5 · MODELED]
- Limitation: this approximation ignores how emissivities and similar properties vary with droplet radius, an effect the authors expect to be small. [FLX-03 p.5 · AUTHOR-INTERPRETATION]
- The authors see little point in repeating the calculation with radiant loss, given Fig. 3: for such small diameter changes the droplet absorbs very little water before extinction, ordinary droplet-combustion theory does as well, and water absorption can be neglected for methanol droplets undergoing radiant extinction. [FLX-03 p.5–6 · AUTHOR-INTERPRETATION]
- Only near the critical transition diameters at 15% and 16% oxygen would radiant loss need to be included together with water absorption in the liquid. [FLX-03 p.6 · AUTHOR-INTERPRETATION]
- Conclusions: measured burning rates, flame stand-off ratios and extinction diameters agree reasonably well with simplified theoretical models; below about 14% oxygen, radiative extinction occurred instead of extinction caused by water absorption (methanol droplets 2 to 4 mm, ISS microgravity); more detailed analyses were under way. [FLX-03 p.1 · MEASURED · nominal; FLX-03 p.6 · AUTHOR-INTERPRETATION]

### FLEX and FLEX-2 as the 2015 guide describes them
| Set | Fuel and form | Gravity, platform, facility | Atmosphere | Not reported by this source | Citation |
|---|---|---|---|---|---|
| C3 | heptane and methanol droplets | microgravity, ISS, CIR with MDCA | oxygen/nitrogen mixtures diluted with a second inert gas: nitrogen, carbon dioxide, helium or xenon | droplet diameters, oxygen and diluent fractions, pressure, flow, ignition, test count | [OVR-12 p.12 · MEASURED; OVR-12 p.36 · MEASURED · nominal]

- Goal: find how adding an inert-gas suppressant shifts the flammability limit of heptane and methanol, to understand quantitatively how flammability limits change in reduced gravity, for fire safety. [OVR-12 p.12 · AUTHOR-INTERPRETATION · nominal]
- Motivation: better identification and prediction of limiting oxygen indices (LOIs) and of how well inert-gas suppressants work. [OVR-12 p.36 · AUTHOR-INTERPRETATION]
- Status in the guide: FLEX was operating inside the CIR with the MDCA; FLEX and its follow-on FLEX-2 use microgravity to burn liquid droplets with spherical symmetry. [OVR-12 p.36 · MEASURED · nominal]
- Found: the work so far shows a lower flammability limit in reduced gravity (conditions C3). [OVR-12 p.12 · MEASURED]
- The guide infers that terrestrial standards for inert-gas suppressants do not give the same safety margin in low gravity as in normal gravity. [OVR-12 p.12 · AUTHOR-INTERPRETATION]
- Found: FLEX tests showed radiative and diffusive extinction (both extinction limits identified for heptane and methanol droplets), combustion instabilities, lower flammability limits, and a cool-flame phenomenon after the visible flame went out, since explained (conditions C3). [OVR-12 p.13 · MEASURED; OVR-12 p.36 · MEASURED]
- Found: FLEX and FLEX-2 identified an LOI significantly lower than in normal gravity and lower than previously predicted and expected (conditions C3; also not reported by this source: which fuel, the LOI value). [OVR-12 p.36 · MEASURED]
- Comparing FLEX results with theoretical and numerical models validated parts of the models and showed where they need improvement. [OVR-12 p.13 · AUTHOR-INTERPRETATION]
- Wider use per the guide: heptane and methanol models are building blocks for models of practical liquid fuels such as diesel and jet fuel; long ISS burns give benchmark data to develop, improve and validate detailed models of liquid hydrocarbon combustion; the data help refine chemical kinetic models for combustion systems on Earth. [OVR-12 p.12–13 · AUTHOR-INTERPRETATION; OVR-12 p.36 · AUTHOR-INTERPRETATION]
- FLEX-2 builds on FLEX: more fuels (blends of pure fuels, surrogates of real fuels), soot formation, effects of slow convection below buoyant speeds, and interactions between droplets; through international partners it also covers flames running along droplet arrays and liquid fuels of biological origin. [OVR-12 p.13 · AUTHOR-INTERPRETATION]
- FLEX-2's stated motivation is droplet burning as it bears on energy conversion and use, liquid hydrocarbon fuels being a predominant energy source worldwide. [OVR-12 p.36 · AUTHOR-INTERPRETATION]
- Fig. 2 (FLEX): an n-heptane droplet burning in 70% carbon dioxide, 21% oxygen, balance nitrogen, while being moved to the right at 3 cm/s (not reported by this source: droplet diameter, pressure). [OVR-12 p.12 · Fig. 2 · MEASURED · single-test]
- Fig. 3 (FLEX-2): how readily burning ethanol droplets form soot in different diluents, at 30% oxygen and 2.4 atm (not reported by this source: the diluent in each panel, droplet diameter). [OVR-12 p.12 · Fig. 3 · MEASURED]

### Nitrogen applied to burning solids (BASS)
| Set | Fuel or material and form | Gravity, platform, facility | Atmosphere | Not reported by this source | Citation |
|---|---|---|---|---|---|
| C4 | BASS sample types: flat samples, PMMA spheres, porous wax slabs, wax candles | microgravity, ISS, MSG, SPICE flow duct | ISS air, nominally 21% O2 by volume at 1 atm, or nitrogen-diluted down to 17% O2; airflow speed varied | which material, oxygen, pressure and flow in a given result; ignition method; duration; test count | [OVR-12 p.3 · MEASURED · nominal; OVR-12 p.19 · MEASURED · nominal; OVR-12 p.22 · MEASURED]

- BASS (Burning and Suppression of Solids) is a rapid turn-around ISS flight experiment that began operating in March 2012; at the guide's date it was the only solid-fuel combustion flight research. [OVR-12 p.18–19 · MEASURED · nominal]
- It examines how a wide variety of fuel samples burn and go out in microgravity (Figs. 11 to 13). [OVR-12 p.21 · MEASURED]
- Method: the fuel is ignited, airflow speed is the main variable, and after some time nitrogen gas was applied as a suppressant to selected flames (conditions C4). [OVR-12 p.22 · MEASURED · nominal]
- Hypothesis tested: with adequate ventilation, a material in microgravity burns as well as or better than the same material in normal gravity, other conditions (pressure, oxygen concentration, temperature, etc.) being identical. [OVR-12 p.21 · AUTHOR-INTERPRETATION]
- Found: useful results on the effect of flow velocity and on flame suppression by nitrogen (conditions C4; no values given). [OVR-12 p.19 · MEASURED]
- Found (early results): nitrogen applied to the flame can actually strengthen it (conditions C4). [OVR-12 p.22 · MEASURED]
- The authors attribute this to oxygen entrainment: depending on flame geometry and the extinguisher's distance from the flame and dispersion angle, the suppressant stream may be ineffective or may worsen the flame by drawing in oxygen. [OVR-12 p.22 · AUTHOR-INTERPRETATION]
- Found (later findings): local application of suppressant is not adequate to extinguish the flame; the local jet entrains air and keeps the flame burning even with the ambient airflow switched off (conditions C4; the agent is not named in this passage). [OVR-12 p.31 · MEASURED]
- On Earth, extinguishers are understood to work best aimed at the flame base, which both anchors the flame and is where fresh air first enters it; in microgravity the best aiming point may not be obvious, especially for a partly obstructed flame or one stabilized in a wake. [OVR-12 p.22 · AUTHOR-INTERPRETATION]
- Using nitrogen as the suppressant in microgravity links the results directly to current and planned extinguishing techniques. [OVR-12 p.22 · AUTHOR-INTERPRETATION]
- Fig. 13: a drop-tower test of a burning PMMA sphere through the switch from 1 g to 0 g and the flame's response to a nitrogen jet applied to put it out; panel labels "1-g", "0-g, 1 s after drop" and "0-g, 4 s after drop Nitrogen extinguishing" (not reported by this source: sphere size, oxygen, pressure). [OVR-12 p.21 · Fig. 13 · MEASURED · nominal, ~fig, single-test]
- Expected uses of BASS: better 1-g fire-safety rating tests for materials, guidance on strategies to extinguish accidental fires in microgravity, additions to the limited database on solid combustion in microgravity, and guidance for the computational combustion models used to design fire detection and suppression systems in microgravity and on Earth. [OVR-12 p.21 · AUTHOR-INTERPRETATION]
- Detailed combustion models are validated in the simpler flow of microgravity tests and then serve to build the more complex models that normal-gravity flames require, with wide use for combustion problems on Earth. [OVR-12 p.21 · AUTHOR-INTERPRETATION]
- The quick return of BASS results helped guide the next, more complete flight experiments; BASS is a precursor to the SoFIE flight experiments, planned at the guide's date for launch in 2019. [OVR-12 p.19 · AUTHOR-INTERPRETATION · nominal]

### Water mist and portable extinguishers
- The Water Mist Fire Suppression experiment (Mist), of T. McKinnon (Colorado School of Mines) et al., ran in the CM facility on space shuttle mission STS-107 in 2003. [OVR-12 p.26 · CITED · nominal]
- It measured how well water mist extinguishes a premixed flame travelling along a tube, to understand water-mist suppression and help design better mist systems to replace banned Halon systems; it studied how water droplet diameter and water concentration change the speed, strength and shape of flames in various fuel and oxygen mixtures. [OVR-12 p.26 · CITED]
- After years of research, testing, flight experiments and advocacy, non-toxic water-mist portable fire extinguishers were designed, tested, built and certified for spaceflight. [OVR-12 p.26 · AUTHOR-INTERPRETATION]
- The first 2 of 9 planned water-mist portable extinguishers went to the ISS in December 2015 to replace the carbon-dioxide units on board; the other units were to follow on three more missions. [OVR-12 p.26 · MEASURED · nominal]

### Suppression aims of planned work (plans in the 2015 guide, not results)
- Planned SoFIE investigation "External Heat Flux Effects on the Ignitability and Suppression of Materials in Microgravity": tests in microgravity of how materials ignite and are suppressed when they burn in a slow forced flow while an external heat flux is applied, in SEA. [OVR-12 p.22 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.24 · AUTHOR-INTERPRETATION]
- Its measurements: time to ignition, and time from release of the suppression agent to extinction, as functions of the environment. [OVR-12 p.24 · AUTHOR-INTERPRETATION]
- A comprehensive model of piloted ignition and extinction of materials in SEA is to support it. [OVR-12 p.24 · AUTHOR-INTERPRETATION · nominal]
- The microgravity tests are to validate that model, which would then predict the fire behaviour of different combustible materials in SEA. [OVR-12 p.24 · AUTHOR-INTERPRETATION · nominal]
- Found (reduced-gravity aircraft tests already run in this line of work): the short low-gravity time allowed ignition times only at high radiant heat fluxes; at airflow speeds below those buoyancy induces, ignition times dropped well below those seen in normal-gravity buoyant flow (not reported by this source: materials, oxygen, pressure, heat-flux values). [OVR-12 p.24 · MEASURED]
- The authors read the shorter ignition times as showing that, at such low flow, reduced heat loss from the surface matters more to ignition than reduced oxygen supply. [OVR-12 p.24 · AUTHOR-INTERPRETATION]
- A theoretical ignition-time model showed that the critical heat flux for ignition in microgravity can be as little as half the value measured in normal gravity (not reported by this source: material, oxygen, pressure, flow). [OVR-12 p.24 · MODELED]
- Per the guide, no test method existed that was designed to find the fire hazard of materials in SEA; this work would supply one, add data on how SEA affects flammability and suppression, and may help interpret and extend current NASA test procedures to SEA. [OVR-12 p.24 · AUTHOR-INTERPRETATION]
- Proposed: a Microgravity Wind Tunnel for fire research in the MSG, alongside SoFIE in the CIR, to study fire growth patterns on large samples, material flammability against NASA-STD-6001 Test 1, fire suppression, and applied research on post-fire cleanup. [OVR-12 p.38 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.45 · AUTHOR-INTERPRETATION · nominal]
- The two facilities are meant to complement each other: SoFIE can test in exploration atmospheres with lower pressure and higher oxygen, the Wind Tunnel takes large samples and easy sample change-out. [OVR-12 p.38 · AUTHOR-INTERPRETATION · nominal]

## Fire detection

### SAME-2 on the ISS: measured smoke-particle results (SMK-01)
- SMK-01 (Urban et al., 2012) reports results from the reflight of the Smoke Aerosol Measurement Experiment (SAME-2), run on the International Space Station (ISS) during Expedition 24, July to September 2010; compared with the original flight on Expedition 15, it added diagnostic measurements and a larger test matrix. [SMK-01 p.1 · MEASURED · nominal; SMK-01 p.4 · MEASURED · nominal]
- SAME flew twice, as SAME-1 in 2007 and SAME-2 in 2010; the paper writes "SAME" for statements that cover both flights and adds the flight number otherwise. [SMK-01 p.2–3 · MEASURED · nominal]
- Aim: gather enough measurements of smoke from spacecraft fires to allow better design of future detectors. [SMK-01 p.2 · AUTHOR-INTERPRETATION · nominal]
- Headline result: most of the average smoke-particle sizes lay between 200 nm and 400 nm, while some quiescent (no airflow) cases gave substantially larger particles (materials heated below ignition; airflow past the sample 0 to 8 cm/s; smoke aged 11 to 1800 s; ISS, Expedition 24; not reported by this source: cabin atmosphere). [SMK-01 p.1 · MEASURED; SMK-01 p.4 · MEASURED · nominal]

#### Why spacecraft smoke detection needs its own data (the paper's argument)
- To design a fire-detection system one needs both the expected signature of the events to be caught and the background levels of the quantities measured. [SMK-01 p.2 · AUTHOR-INTERPRETATION]
- Detectors on Earth rest on extensive study of terrestrial fires; spacecraft fires have no comparable data set, so today's spacecraft detectors were adapted from terrestrial designs. [SMK-01 p.2 · AUTHOR-INTERPRETATION]
- With no buoyant flow in low gravity, gases stay longer in a microgravity fire and take longer to travel from the reaction zone to the detector. [SMK-01 p.2 · CITED]
- Further reasons the authors give for a different smoke size distribution: microgravity fires are structured very differently from normal-gravity (1-g) fires; the few ways to respond to a spacecraft fire make early detection more important; and spacecraft materials differ from the terrestrial ones whose smoke was studied before. [SMK-01 p.2 · AUTHOR-INTERPRETATION]
- The paper uses "smoke" for aerosols from several processes: unburned, recondensed original polymer or pyrolysis products (liquid or solid), hydrocarbon soot, condensed water vapour and ash. [SMK-01 p.2 · AUTHOR-INTERPRETATION]
- Soot makes up most of the particulate of an established flaming fire, whereas smouldering and pyrolysis early in fire growth give unburned pyrolysis products and recondensed polymer fragments. [SMK-01 p.2 · AUTHOR-INTERPRETATION]
- Because a spacecraft has little room, detection has to aim at the early phase rather than an established flaming fire, so the main target is pyrolysis products, not soot. [SMK-01 p.2 · AUTHOR-INTERPRETATION]
- Earlier spacecraft, as the paper recounts from other work: on Mercury, Gemini and Apollo, small crew quarters and short missions made it reasonable to rely on the astronauts noticing a fire quickly; Skylab carried about 30 UV-sensing fire detectors, limited to line of sight and reported to have false-alarm problems. [SMK-01 p.2 · CITED]
- Space Shuttle detectors used ionization technology, the most advanced then available, with an inertial separator meant to remove particles above 1–2 micrometres (µm); ISS smoke detectors use near-IR forward light scattering, which makes them most sensitive to particles above about a micrometre, outside the shuttle detector's sensitive range. [SMK-01 p.2 · CITED]
- Incidents the paper cites: six overheat and failed-component events in the NASA Orbiter fleet plus several similar ones on the ISS, none of which grew into a real fire, with failures becoming likelier as missions lengthen; and the 1997 Mir experience, which showed that an oxygen-generation failure can have serious consequences, so better understanding of spacecraft fire detection is critically needed. [SMK-01 p.2 · CITED]
- Earlier low-gravity smoke work cited by the paper (Urban et al., ref. 5): low-gravity flames tend to give larger particulate (soot or unburned fuel) than normal-gravity flames; the Comparative Soot Diagnostics (CSD) experiment, on smoke from several spacecraft materials in low gravity, suggested that liquid smoke particles could exceed 1 µm while solid particulate stayed below a micrometre, but CSD yielded too little data on liquid-particle size to guide detector design. [SMK-01 p.2 · CITED]
- The authors conclude that, given these limited results and theoretical predictions, more confident detector design needs direct knowledge of low-gravity combustion particulate rather than extrapolation from 1-g data. [SMK-01 p.2 · AUTHOR-INTERPRETATION]

#### How SAME measured smoke size: the moment method
- SAME was built to fill the CSD data gap by obtaining particle-size statistics on orbit, so that results depend less on returning samples to Earth. [SMK-01 p.2 · MEASURED · nominal]
- The authors call this hard because existing aerosol instruments are usually large, do not fit spacecraft experiment constraints, and some need substantial sample return. [SMK-01 p.2 · AUTHOR-INTERPRETATION]
- Instead, three separate instruments each measured one moment of the particle-size distribution, and together the moments give aggregate statistics of the distribution. [SMK-01 p.2 · MEASURED · nominal]
- Smoke came from overheated spacecraft materials, much as in CSD, but SAME controlled sample temperature, flow field and particle ageing time more strictly. [SMK-01 p.2 · MEASURED · nominal]
- The "moment method" (the paper's name for it; ref. 7): from measured zeroth, first and third moments of the size distribution, log-normal properties yield estimates of the geometric mean diameter and of the geometric standard deviation. [SMK-01 p.3 · AUTHOR-INTERPRETATION]

| Symbol or equation (SMK-01) | Meaning as printed | Citation |
|---|---|---|
| f_N(D) = dN/dD (Eq. 1) | number distribution: dN counts the particles per cm³ whose diameter lies between D and D + dD | [SMK-01 p.3 · Eq. 1 · MODELED]
| M_i = ∫ D^i f_N(D) dD, i = 0, 1, 3 (Eq. 2) | moments: M0 the number concentration, M1 the first moment, M3 the volume or mass concentration moment | [SMK-01 p.3 · Eq. 2 · MODELED]
| M0 (zeroth moment) | number of particles per unit volume; measured in SAME with a condensation nuclei counter | [SMK-01 p.3 · AUTHOR-INTERPRETATION]
| M1 (first moment) | "diameter concentration", the integrated diameter per unit volume; roughly proportional to the signal of an ionization detector | [SMK-01 p.3 · AUTHOR-INTERPRETATION]
| M3 (third moment) | for particles in the Mie scattering regime, 0.3λ to about 3λ (about 0.2 to 2.0 µm for a red laser), the light-scattering signal is roughly proportional to M3 | [SMK-01 p.3 · AUTHOR-INTERPRETATION]
| D0.5 (also written D̄) and D1.5 (also written D_m̄) | D0.5 = count (arithmetic) mean diameter = M1/M0; D1.5 = diameter of average mass = (M3/M0)^1/3; neither calculation assumes a log-normal distribution | [SMK-01 p.3 · AUTHOR-INTERPRETATION]
| f_N(D) = N_t / ((2π)^½ D ln σ_g) · exp(−(ln D − ln D_g)² / (2 ln²σ_g)) (Eq. 3) | log-normal number distribution; N_t total number concentration (= M0), D_g geometric mean diameter, σ_g geometric standard deviation | [SMK-01 p.3 · Eq. 3 · MODELED]
| ln D_g = ∫₀^∞ ln D f_N(D) dD / ∫₀^∞ f_N dD (Eq. 4); ln σ_g = [∫₀^∞ (ln D − ln D_g)² f_N(D) dD / ∫₀^∞ f_N(D) dD]^½ (Eq. 5) | definitions of D_g and σ_g | [SMK-01 p.3 · Eq. 4 · MODELED; SMK-01 p.3 · Eq. 5 · MODELED]
| D_p = D_g exp(p ln²σ_g) (Eq. 6) | relation for a log-normal distribution; p = 0.5 gives D0.5 and p = 1.5 gives D1.5 | [SMK-01 p.3–4 · Eq. 6 · MODELED]
| σ_g = exp(ln(D1.5/D0.5))^½ (Eq. 7, exponent placed as printed) | σ_g from the ratio D1.5/D0.5, assuming a log-normal distribution | [SMK-01 p.4 · Eq. 7 · MODELED]

- The log-normal form is widely used for aerosols, non-flaming smoke included, because for most aerosols the bulk of the number concentration sits in the smaller particles (refs. 8, 9). [SMK-01 p.3 · CITED]
- Worked example (Fig. 1, an illustration, not a test): a log-normal distribution with D_g = 1.0 (unit not printed) and σ_g = 1.6 gives D0.5 = 1.17 µm and D1.5 = 1.39 µm. [SMK-01 p.4 · Fig. 1 · MODELED]
- The authors state that combining the three moments yields three mean diameters and σ_g, that Cleary, Weinert and Mulholland (ref. 7) discuss how the approach was validated, and that these statistics give a strong basis for designing spacecraft smoke detectors. [SMK-01 p.4 · AUTHOR-INTERPRETATION]
- SAME-2 diagnostics: a prototype two-moment smoke detector plus three moment measurements, giving number concentration (zeroth moment), diameter concentration (first) and mass concentration (third). [SMK-01 p.1 · MEASURED · nominal]
- From these the count mean diameter and the diameter of average mass follow directly, and the geometric mean diameter and geometric standard deviation follow once a log-normal distribution is assumed. [SMK-01 p.1 · MODELED · nominal]

#### SAME instruments and hardware
- The moment measurements used three separate instruments: two industrial-hygiene instruments made by TSI Inc. and one modified residential smoke detector (hardware described more fully in ref. 10). [SMK-01 p.4 · MEASURED · nominal]

| Instrument | Moment it measures | How it works, as the paper describes it | Range and dilution | Citation |
|---|---|---|---|---|
| P-Trak™ condensation nuclei counter (TSI Inc.) | zeroth (number concentration) | isopropanol vapour saturates the sample stream; in a cooler zone it condenses on the particles, growing them enough to be counted by light scattering | 0 to 10^5 particles/cm³ and 20 nm to 1 µm diameter; the smoke held about 0.5 × 10^6 to 5 × 10^6 particles/cm³, so the sample was diluted by adding filtered nitrogen at a controlled rate | [SMK-01 p.4 · MEASURED · nominal]
| Ionization chamber from a residential smoke detector | first | an alpha-particle emitter creates ions inside a DC electric field; the drifting ions carry a current, which falls when ions attach to particles; the charged particles move too slowly to be collected on the electrode | needs concentrations of order 10^5 particles/cm³; no dilution | [SMK-01 p.4 · MEASURED · nominal]
| DustTrak™ light-scattering monitor (TSI Inc.) | third (mass concentration) | a 90-degree light-scattering signal gives the aerosol mass density; this tracks mass well for terrestrial dust, and extra compensation was applied for the range of materials and particle sizes in SAME; an aerodynamic impactor at the inlet catches particles above a chosen size | 0.001 to 100 mg/m³; diluted in some cases because the smoke was very concentrated | [SMK-01 p.4 · MEASURED · nominal]
| Multi-Parameter Aerosol Scattering Sensor (MPASS), SAME-2 only, in place of one DustTrak | approximate 3rd and 2nd moments | optical scattering sensor built like the DustTrak but with two detectors at fixed angles; flown as a technology demonstration of a sensor that reads two moments at once (design in ref. 12) | optics optimized for geometric mean diameters of 0.1 to 1.0 µm and geometric standard deviations of 1.6 to 1.9 | [SMK-01 p.6 · MEASURED · nominal; SMK-01 p.6 · MODELED · nominal]

- SAME-1 carried two DustTraks, one with a 1 µm and one with a 10 µm impactor; the difference between their signals gave the fraction of particulate larger than 1 µm. [SMK-01 p.4 · MEASURED · nominal]
- Because the P-Trak's isopropanol condensate might not flow back to its wick in low gravity (ref. 5), its condensing section was given very small grooves to help the condensate return. [SMK-01 p.4 · MEASURED · nominal]
- A separate space experiment tested these changes with good results, indicating that the modified counter could be used in low gravity. [SMK-01 p.4 · CITED]
- The MPASS optics were optimized with a Mie-scattering model for aerosols that scatter light like smoke: geometric mean diameters of 0.1 to 1.0 µm, geometric standard deviations of 1.6 to 1.9, log-normal size distributions, and a fixed real refractive index of 1.6. [SMK-01 p.6 · MODELED · nominal]
- The authors' premise: reading two moments lets a detector correct its signal for particle size, which earlier single-moment spacecraft detectors cannot (ref. 10), so the alarm can be made less sensitive to the larger particles typical of dust (advantage discussed in ref. 13). [SMK-01 p.6 · AUTHOR-INTERPRETATION]
- The assembly was installed in the Microgravity Science Glovebox (MSG), an ISS facility that supplies containment, power, data, video and uplink commanding (schematic in Fig. 2). [SMK-01 p.4 · MEASURED · nominal; SMK-01 p.5 · Fig. 2 · MEASURED · nominal]
- A run: a small material sample was overheated in the smoke generation duct for about 60 s while a moving piston in the ageing chamber (piston volume 6000 cm³) drew the smoke in at a controlled flow; the smoke was held for a preset time so the particles could coagulate, then the piston pushed it into the diagnostics duct holding the moment instruments plus a space shuttle smoke detector and an ISS smoke detector. [SMK-01 p.4–5 · MEASURED · nominal; SMK-01 p.11 · MEASURED · nominal]
- Fig. 2 labels, as printed: Sample, Smoke generation duct, Video camera and Video FOV, Piston, Aging chamber, Diluter, PTrak, DustTrak, Ion chamber, Diagnostic duct, ISS detector, STS detector, Thermal precipitator. [SMK-01 p.5 · Fig. 2 · MEASURED · nominal]
- The ageing chamber stands in for the transport time from smoke source to detector; holding times ran from 11 to 1800 s (SAME-2). [SMK-01 p.1 · MEASURED · nominal]
- While the moment instruments measured, a thermal precipitator laid a sample of the smoke on a Transmission Electron Microscope (TEM) grid by thermophoresis: the aerosol flowed between the grid and a heated wire, which drives the particles onto the grid (Fig. 3 shows the partly disassembled module: inlet manifold on the left, hot-wire leads in a red Vespel block in the middle, outlet valves on the right). [SMK-01 p.5 · Fig. 3 · MEASURED · nominal]
- After the mission the grids were removed and examined in a TEM for particle morphology and size, an independent check on the size results. [SMK-01 p.1 · MEASURED · nominal; SMK-01 p.5 · MEASURED · nominal]

#### Ground calibration of the moment instruments
| Set | Aerosol | Gravity, platform | Reference instruments | Not reported by this source | Citation |
|---|---|---|---|---|---|
| C8 | monodisperse dioctyl phthalate (DOP) droplets (a spray of DOP diluted in isopropanol, evaporated and recondensed; droplet size set by the dilution; stable for tens of minutes) or polystyrene spheres | ground, before flight | sampled at the same time as the SAME instrument under test: a TSI 3022A particle counter (number), a tapered element oscillating microbalance (mass) and a TSI Electrical Aerosol Detector (first moment) | ambient temperature, pressure, sample flow rate | [SMK-01 p.5 · MEASURED · nominal]

- Calibration was needed to interpret the flight data and was done on the ground before flight; the DOP droplet generator follows the approach of Mulholland and Liu (ref. 11) (conditions C8). [SMK-01 p.5 · MEASURED · nominal]
- P-Trak (Fig. 4): the effect of particle diameter became more evident as number concentration rose (conditions C8, DOP droplets of 100, 600 and 1200 nm). [SMK-01 p.5–6 · Fig. 4 · MEASURED]
- For the flight data a separate P-Trak correlation was built for each particle size, and the one closest to the initial estimate of average particle size was applied. [SMK-01 p.5 · MODELED · nominal]
- Ionization chamber (Fig. 5): particle size had little effect, so one correlation served for all sizes (conditions C8, DOP droplets of 100 to 1200 nm). [SMK-01 p.5–6 · Fig. 5 · MEASURED]
- Theory predicts that the DustTrak response changes non-monotonically as particle size grows and varies with the particles' refractive index. [SMK-01 p.5 · AUTHOR-INTERPRETATION]
- So the DustTrak was calibrated for the smoke of each material, on the expectation that refractive properties stay the same while average size changes; for the reported results it was calibrated directly, per smoke source, against mass concentration from a tapered element oscillating microbalance, and estimated material densities gave the diameter of average mass of each sample. [SMK-01 p.5–6 · MEASURED · nominal]
- Fig. 4 plots P-Trak output (x, count/cc) against the TSI 3022A reference (y, count/cc) for 100 nm, 600 nm and 1200 nm droplets (conditions C8); the table gives values read from the figure (read tolerance ±25,000 count/cc on x and ±50,000 on y; the two right-hand columns are medians of the markers within ±3,000 of that P-Trak output). [SMK-01 p.6 · Fig. 4 · MEASURED · nominal]

| Set | Droplet size | Highest-output point: P-Trak → reference, count/cc | Highest reference value in the series | Reference at P-Trak 100,000 | Reference at P-Trak 200,000 | Citation |
|---|---|---|---|---|---|---|
| C8 | 100 nm | ~254,000 → ~497,000 | ~506,000 at P-Trak ~244,000 | ~162,000 | ~349,000 | [SMK-01 p.6 · Fig. 4 · MEASURED · ~fig]
| C8 | 600 nm | ~280,000 → ~493,000 | ~500,000 at P-Trak ~269,000 | ~153,000 | ~317,000 | [SMK-01 p.6 · Fig. 4 · MEASURED · ~fig]
| C8 | 1200 nm | ~289,000 → ~466,000 | ~478,000 at P-Trak ~284,000 | ~143,000 | ~300,000 | [SMK-01 p.6 · Fig. 4 · MEASURED · ~fig]

- Fig. 5 plots ionization chamber output (x, volts) against the Electrical Aerosol Detector's first-moment output (y, "EAD Output", no unit printed) for 100, 150, 300, 600, 750 and 1200 nm droplets (conditions C8); every series starts at about 4.62 to 4.65 V with EAD output near 0 (read tolerance ±0.25 V on x and ±25 on y; the two right-hand columns of the table are medians of the markers within ±0.03 V). [SMK-01 p.6 · Fig. 5 · MEASURED · nominal, ~fig]

| Set | Droplet size | Highest-output point: volts → EAD output | Highest EAD output, if elsewhere | EAD output at 5.0 V | EAD output at 5.5 V | Citation |
|---|---|---|---|---|---|---|
| C8 | 100 nm | ~5.98 → ~259 | — | ~55 | ~154 | [SMK-01 p.6 · Fig. 5 · MEASURED · ~fig]
| C8 | 150 nm | ~6.13 → ~280 | ~284 at ~6.10 V | ~55 | ~135 | [SMK-01 p.6 · Fig. 5 · MEASURED · ~fig]
| C8 | 300 nm | ~6.12 → ~277 | — | ~51 | ~156 | [SMK-01 p.6 · Fig. 5 · MEASURED · ~fig]
| C8 | 600 nm | ~6.63 → ~423 | ~435 at ~6.56 V | ~53 | ~144 | [SMK-01 p.6 · Fig. 5 · MEASURED · ~fig]
| C8 | 750 nm | ~6.46 → ~351 | ~353 at ~6.39 V | ~46 | ~145 | [SMK-01 p.6 · Fig. 5 · MEASURED · ~fig]
| C8 | 1200 nm | ~6.13 → ~266 | ~270 (voltage not read) | ~48 | ~151 | [SMK-01 p.6 · Fig. 5 · MEASURED · ~fig]

#### SAME-2 test matrix
- Materials (p.7): more than 100 samples were tested (printed as "Over 100 sample materials"), covering 6 materials: Teflon™, Kapton™, Pyrell™, silicone rubber, cellulose (lamp wick) and dibutyl phthalate on a porous wick. [SMK-01 p.7 · MEASURED]
- The abstract instead names five materials representative of those in spacecraft (Teflon, Kapton, cotton, silicone rubber and Pyrell), heated below their ignition point under conditions controlled for repeatable sample surface temperature and airflow (see Conflicts for the count). [SMK-01 p.1 · MEASURED · nominal]
- Airflow past the sample while it was heated: baseline 8 cm/s, runs down to 2 cm/s, and a limited set with no airflow; the abstract gives the range as quiescent to 8 cm/s. [SMK-01 p.7 · MEASURED; SMK-01 p.1 · MEASURED · nominal]
- The zero-flow condition was not in the original SAME hardware design; it was run in 11 tests by changing how the hardware's valves were operated. [SMK-01 p.11 · MEASURED · nominal]
- Sample temperature was chosen per material from its pyrolysis properties: the baseline gave 1 to 2 mg of weight loss in 60 s with a reasonable signal on every moment instrument, and further, higher temperatures were picked that would not saturate the instruments. [SMK-01 p.7 · MEASURED · nominal]
- Typical runs gave a few million particles per cm³ (cc) and mass concentrations of 2 to 15 mg/m³, though some runs had fewer particles; the instruments usually sampled billions of particles, and several million in the test with the lowest concentration (SAME-2, ISS MSG). [SMK-01 p.7 · MEASURED]
- The TEM grids recovered from the SAME-1 thermal precipitators were contaminated with extraneous particles, whose origin was still under investigation at the paper's date. [SMK-01 p.7 · MEASURED]
- For SAME-2 stricter assembly controls were followed, and many good particle images were obtained. [SMK-01 p.7 · MEASURED · nominal]

#### Measured diameters for baseline runs (Table 1)
| Set | Material and heating | Airflow past the sample | Gravity, platform | Instruments | Not reported by this source | Citation |
|---|---|---|---|---|---|---|
| C9 | the material in the row, overheated about 60 s below ignition in the smoke generation duct at its baseline temperature (set for 1 to 2 mg weight loss in 60 s) | 8 cm/s (baseline) | microgravity, ISS, MSG, SAME-2 (2010) | P-Trak (M0), ionization chamber (M1), DustTrak calibrated per smoke source (M3) | sample temperature values, sample size, cabin atmosphere, number of runs behind each row | [SMK-01 p.1 · MEASURED · nominal; SMK-01 p.4–6 · MEASURED · nominal; SMK-01 p.7 · MEASURED · nominal]

- Table 1 gives diameters in micrometres for the baseline runs of each material, unaged and aged 720 s; its diameter-of-average-mass column is headed "(M3/M0)", while p.3 defines D1.5 as (M3/M0)^1/3. [SMK-01 p.3 · AUTHOR-INTERPRETATION; SMK-01 p.7 · Table 1 · AUTHOR-INTERPRETATION]

| Set | Material | Ageing | Geometric mean diameter D_g, µm | Count mean diameter M1/M0, µm | Diameter of average mass, µm | σ_g | Citation |
|---|---|---|---|---|---|---|---|
| C9 | Kapton | unaged | 0.042 | 0.056 | 0.101 | 2.154 | [SMK-01 p.7 · Table 1 · MEASURED]
| C9 | Kapton | aged 720 s | 0.089 | 0.109 | 0.161 | 1.872 | [SMK-01 p.7 · Table 1 · MEASURED]
| C9 | Lampwick | unaged | 0.090 | 0.128 | 0.258 | 2.312 | [SMK-01 p.7 · Table 1 · MEASURED]
| C9 | Lampwick | aged 720 s | 0.229 | 0.276 | 0.398 | 1.834 | [SMK-01 p.7 · Table 1 · MEASURED]
| C9 | Silicone | unaged | 0.128 | 0.196 | 0.465 | 2.530 | [SMK-01 p.7 · Table 1 · MEASURED]
| C9 | Silicone | aged 720 s | 0.269 | 0.355 | 0.619 | 2.108 | [SMK-01 p.7 · Table 1 · MEASURED]
| C9 | Teflon | unaged | 0.081 | 0.101 | 0.170 | 2.198 | [SMK-01 p.7 · Table 1 · MEASURED]
| C9 | Teflon | aged 720 s | 0.070 | 0.105 | 0.232 | 2.442 | [SMK-01 p.7 · Table 1 · MEASURED]
| C9 | Pyrell | unaged | 0.149 | 0.204 | 0.384 | 2.211 | [SMK-01 p.7 · Table 1 · MEASURED]
| C9 | Pyrell | aged 720 s | 0.293 | 0.359 | 0.539 | 1.892 | [SMK-01 p.7 · Table 1 · MEASURED]

- The count mean diameter and the diameter of average mass do not depend on the shape of the distribution, but D_g and σ_g rest on the log-normal assumption, which the data cannot test directly because that would take an instrument that sorts particles into size bins. [SMK-01 p.7 · AUTHOR-INTERPRETATION]
- Two signs support a log-normal approximation (conditions C9): in the cases listed, the count mean diameter is below the diameter of average mass, a necessary condition for a log-normal distribution (Fig. 1); and every σ_g is physically reasonable, above 1 (Eq. 3) and below about 3.5, the practical ceiling for aerosol geometric standard deviations. [SMK-01 p.7 · AUTHOR-INTERPRETATION; SMK-01 p.7 · Table 1 · MEASURED]
- The authors summarise the ageing results as a substantial increase in the observed diameters, with the count mean diameter, as they expected, increasing more than the diameter of average mass (conditions C9, unaged against aged 720 s; see Conflicts for the Table 1 values). [SMK-01 p.7 · AUTHOR-INTERPRETATION]
- Teflon is the exception in Table 1: with ageing its D_g falls from 0.081 to 0.070 µm and its σ_g rises from 2.198 to 2.442, while its count mean (0.101 to 0.105 µm) and diameter of average mass (0.170 to 0.232 µm) rise (conditions C9). [INFERRED from: SMK-01 p.7]
- The authors' explanation: coagulation joins particles two at a time, and in a polydisperse aerosol a collision usually pairs one of the smallest, most mobile particles with one of the largest, which hardly changes the large particle but removes the small one; that shifts the count mean (linear in diameter) more than the diameter of average mass (cube root). [SMK-01 p.7 · AUTHOR-INTERPRETATION]
- Theory cited by the paper (ref. 14) predicts that this process yields a near log-normal distribution whose standard deviation tends toward a self-preserving value of 1.32. [SMK-01 p.7 · CITED]
- Overall, Teflon and Kapton gave very small particles, while lamp wick and silicone gave substantially larger diameters of average mass, especially when aged (conditions C9). [SMK-01 p.8 · MEASURED]
- Reported earlier (ref. 10): DustTrak results for lamp wick and silicone showed that substantial parts of the particle distribution had aerodynamic diameters above 1 µm. [SMK-01 p.8 · CITED]
- Detector implication the authors draw: the much smaller Kapton and Teflon particles will be hard for light-scattering devices to detect, whereas the large lamp-wick and silicone particles would give very large light-scattering signals. [SMK-01 p.8 · AUTHOR-INTERPRETATION]
- As Urban et al. (ref. 13) discuss, without some particle-size discrimination it is hard to give a system enough gain to alarm on the weak signal of small particles such as Teflon and Kapton smoke without excessive nuisance alarms from large dust particles. [SMK-01 p.8 · CITED]
- Hence, the authors suggest, detecting these particles against the background environment will need a system that measures more than one moment of the size distribution. [SMK-01 p.8 · AUTHOR-INTERPRETATION]

#### Effect of airflow past the sample on particle size (Figs. 6–8)
- Figures 6, 7 and 8 plot the lampwick, Kapton and Teflon results against duct air velocity; the authors read them as showing a strong rise in particle size at low flow (SAME-2, ISS). [SMK-01 p.8 · AUTHOR-INTERPRETATION; SMK-01 p.8 · Fig. 6 · MEASURED; SMK-01 p.8 · Fig. 7 · MEASURED; SMK-01 p.9 · Fig. 8 · MEASURED; SMK-01 p.1 · MEASURED · nominal; SMK-01 p.4 · MEASURED · nominal]
- From this the authors expect smoke trapped inside an avionics enclosure to be substantially larger than smoke released into ventilated spaces. [SMK-01 p.8 · AUTHOR-INTERPRETATION]

| Set | Material (figure) | Heating and ageing | Airflow past the sample | Gravity, platform | Plotted measures | Not reported by this source | Citation |
|---|---|---|---|---|---|---|---|
| C10 | lampwick (Fig. 6), Kapton (Fig. 7), Teflon (Fig. 8) | not stated for these figures | as plotted, 0 to about 8 cm/s (Kapton: no point at 0) | ISS, SAME-2 | arithmetic mean diameter, diameter of average mass and geometric mean diameter (µm, left axis) and σ_g (right axis), each with a linear least-squares fit; repeatability of the diameters estimated at ±15 % | sample temperature, ageing time, cabin atmosphere, run labels of the points | [SMK-01 p.8 · Fig. 6 · MEASURED · nominal; SMK-01 p.8 · Fig. 7 · MEASURED · nominal; SMK-01 p.9 · Fig. 8 · MEASURED · nominal; SMK-01 p.1 · MEASURED · nominal; SMK-01 p.4 · MEASURED · nominal]

- Values read from Figs. 6–8 are approximate (read tolerance ±0.05 µm in Figs. 6 and 8, ±0.025 µm in Fig. 7, ±0.5 for σ_g); the highest-velocity markers sit at about 8.1 on the axis (Kapton also has one point per series at about 8.0), while the text gives the baseline as 8 cm/s; where one velocity has several points, each series lists them in reading order, not matched across series (conditions C10). [SMK-01 p.8 · Fig. 6 · MEASURED · ~fig; SMK-01 p.8 · Fig. 7 · MEASURED · ~fig; SMK-01 p.9 · Fig. 8 · MEASURED · ~fig; SMK-01 p.7 · MEASURED · nominal]

| Set | Material (figure) | Air velocity, cm/s | Arithmetic mean diameter, µm | Diameter of average mass, µm | Geometric mean diameter, µm | σ_g | Citation |
|---|---|---|---|---|---|---|---|
| C10 | lampwick (Fig. 6) | 0 (two points) | ~0.167; ~0.441 | ~0.401; ~0.598 | ~0.107; ~0.379 | ~2.54; ~1.73 | [SMK-01 p.8 · Fig. 6 · MEASURED · ~fig]
| C10 | lampwick (Fig. 6) | 2 | ~0.293 | ~0.478 | ~0.229 | ~2.00 | [SMK-01 p.8 · Fig. 6 · MEASURED · ~fig]
| C10 | lampwick (Fig. 6) | ~8 | ~0.123 | ~0.288 | ~0.080 | ~2.50 | [SMK-01 p.8 · Fig. 6 · MEASURED · ~fig]
| C10 | lampwick, fit lines (Fig. 6) | 0 → ~8.1 | ~0.314 → ~0.129 | ~0.510 → ~0.296 | ~0.251 → ~0.084 | ~2.08 → ~2.46 | [SMK-01 p.8 · Fig. 6 · MODELED · ~fig]
| C10 | Kapton (Fig. 7) | 2 | ~0.152 | ~0.259 | ~0.116 | ~2.07 | [SMK-01 p.8 · Fig. 7 · MEASURED · ~fig]
| C10 | Kapton (Fig. 7) | 4 | ~0.114 | ~0.212 | ~0.084 | ~2.19 | [SMK-01 p.8 · Fig. 7 · MEASURED · ~fig]
| C10 | Kapton (Fig. 7) | ~8.0 | ~0.094 | ~0.181 | ~0.067 | ~2.24 | [SMK-01 p.8 · Fig. 7 · MEASURED · ~fig]
| C10 | Kapton (Fig. 7) | ~8.1 (four points) | ~0.058; ~0.058; ~0.049; ~0.056 | ~0.105; ~0.088; ~0.110; ~0.097 | ~0.043; ~0.047; ~0.032; ~0.043 | ~2.15; ~1.89; ~2.46; ~2.08 | [SMK-01 p.8 · Fig. 7 · MEASURED · ~fig]
| C10 | Kapton, fit lines (Fig. 7) | ~2 → ~8.1 | ~0.149 → ~0.063 | ~0.261 → ~0.117 | ~0.112 → ~0.046 | ~2.11 → ~2.19 | [SMK-01 p.8 · Fig. 7 · MODELED · ~fig]
| C10 | Teflon (Fig. 8) | 0 (two points) | ~0.196; ~0.172 | ~0.280; ~0.305 | ~0.164; ~0.129 | ~1.81; ~2.13 | [SMK-01 p.9 · Fig. 8 · MEASURED · ~fig]
| C10 | Teflon (Fig. 8) | 2 | ~0.275 | ~0.360 | ~0.240 | ~1.68 | [SMK-01 p.9 · Fig. 8 · MEASURED · ~fig]
| C10 | Teflon (Fig. 8) | ~8 (two points) | ~0.208; ~0.148 | ~0.251; ~0.252 | ~0.189; ~0.113 | ~1.54; ~2.07 | [SMK-01 p.9 · Fig. 8 · MEASURED · ~fig]
| C10 | Teflon, fit lines (Fig. 8) | 0 → ~8.1 | ~0.211 → ~0.187 | ~0.315 → ~0.260 | ~0.174 → ~0.160 | ~1.90 → ~1.79 | [SMK-01 p.9 · Fig. 8 · MODELED · ~fig]

#### Smoke mass concentration and the zero-flow case
- Expected: at a fixed wire temperature, more convective flow should raise the pyrolysis rate and with it the mass concentration of the aerosol. [SMK-01 p.11 · AUTHOR-INTERPRETATION]
- Found: only some results follow this; mass concentration rose slightly with flow for silicone rubber, lampwick and Pyrell and fell for Teflon and Kapton (fixed wire temperature, SAME-2, ISS; not reported by this source: the wire temperatures, flow values and ageing times behind this statement). [SMK-01 p.11 · MEASURED]
- A possible reason the authors give: a fixed wire temperature need not give the same sample-surface temperature distribution at different airspeeds; the variations should be small, but because pyrolysis kinetics depend exponentially on temperature, a changed heat-transport environment could shift the surface temperature between the wire coils. [SMK-01 p.11 · AUTHOR-INTERPRETATION]
- Zero flow is a special case: in microgravity (μ-g) the transport is then governed by molecular diffusion and thermal expansion. [SMK-01 p.11 · AUTHOR-INTERPRETATION]
- Estimate: over 60 s the gases diffuse about 4 cm, so for a cube the smoke stays in roughly 64 cm³ instead of spreading through the 6000 cm³ piston; with as many particles as in a flow case, the starting concentration is about 50 times higher, which should mean more coagulation and larger particles. [SMK-01 p.11 · MODELED]
- Found: for all materials the diameter of average mass was 30 % to 40 % larger in the zero-flow tests than in the flow tests (SAME-2, ISS, μ-g; not reported by this source: heating level, ageing time and flow speed of the compared tests). [SMK-01 p.11 · MEASURED]
- Zero flow gave a very high particulate concentration, in which ageing ran faster than in the dilute ageing chamber. [SMK-01 p.11 · AUTHOR-INTERPRETATION]
- Side effect: about half the smoke left the system by diffusing out of the inlet into the MSG volume, so total particle counts were lower than normal and the TEM grids held few particles (zero-flow tests). [SMK-01 p.11–12 · MEASURED]
- The authors stress that this condition exists only in low gravity: in the same experiment at 1 g, buoyancy of the rising gases would greatly widen the mixing zone, so the larger zero-flow particles matter when developing better spacecraft fire detectors. [SMK-01 p.12 · AUTHOR-INTERPRETATION]
- With zero flow, heat moves mainly by conduction rather than convection, which the authors expect to raise the gas temperature markedly compared with 8 cm/s airflow. [SMK-01 p.12 · AUTHOR-INTERPRETATION]
- Found: Pyrell smoke changed shape, from fractal-like clusters of up to 30 primary spheres at 8 cm/s airflow to spherical particles at zero flow (TEM images, Fig. 13, Runs 63 and 95). [SMK-01 p.12 · Fig. 13 · MEASURED · single-test]

#### Particle morphology on the TEM grids
- In all, 72 smoke samples were collected on TEM grids with the thermal precipitator and imaged to see how particle morphology varied with flow, material and heating level (SAME-2). [SMK-01 p.10 · MEASURED]
- Silicone rubber and DBP showed no particles visible in the TEM. [SMK-01 p.10 · MEASURED]
- The presumed reason the authors give: the particles were condensed liquid that evaporated before they could be imaged. [SMK-01 p.10 · AUTHOR-INTERPRETATION]
- The authors state that liquid particles coalesce on collision into larger droplets, which they give as the case for the lampwick, silicone rubber and Kapton smokes, and that solid particles keep their structure when they stick, forming low-density fractal-like agglomerates of many primary particles, which they give as the case for the Teflon and Pyrell smokes; they cite Fig. 11, whose images are of Teflon, Pyrell, lampwick and Kapton (see Conflicts for silicone rubber). [SMK-01 p.11 · AUTHOR-INTERPRETATION; SMK-01 p.10 · Fig. 11 · MEASURED]

| Set | Sampling and imaging | Gravity, platform | Not reported by this source | Citation |
|---|---|---|---|---|
| C11 | smoke laid on a TEM grid by the thermal precipitator, imaged in a TEM after the flight; scale bar 2 µm in Figs. 11 and 12, 5 µm in Fig. 13 | ISS, MSG, SAME-2 | heating level and ageing time of each run, cabin atmosphere | [SMK-01 p.4 · MEASURED · nominal; SMK-01 p.5 · MEASURED · nominal; SMK-01 p.7 · MEASURED · nominal; SMK-01 p.10 · Fig. 11 · MEASURED · nominal; SMK-01 p.11 · Fig. 12 · MEASURED · nominal; SMK-01 p.12 · Fig. 13 · MEASURED · nominal]

| Set | Run | Material | Airflow while heated | Figure | What the image shows | Citation |
|---|---|---|---|---|---|---|
| C11 | Run 56 | Teflon | not reported by this source | Fig. 11 | solid particles stuck into an agglomerate structure | [SMK-01 p.10 · Fig. 11 · MEASURED · single-test; SMK-01 p.11 · AUTHOR-INTERPRETATION]
| C11 | Run 54 | Lampwick | not reported by this source | Fig. 11 | liquid particles coalesced into droplets | [SMK-01 p.10 · Fig. 11 · MEASURED · single-test; SMK-01 p.11 · AUTHOR-INTERPRETATION]
| C11 | Run 62 | Kapton | not reported by this source | Fig. 11; Fig. 12 (unaged and aged) | liquid particles coalesced into droplets; after ageing the smallest particles are gone | [SMK-01 p.10 · Fig. 11 · MEASURED · single-test; SMK-01 p.11 · AUTHOR-INTERPRETATION; SMK-01 p.11 · Fig. 12 · MEASURED · single-test]
| C11 | Run 63 | Pyrell | 8 cm/s (Fig. 13 label) | Fig. 11; Fig. 12 (unaged and aged); Fig. 13 | agglomerates of fractal-like clusters; after ageing the smallest particles are gone | [SMK-01 p.10 · Fig. 11 · MEASURED · single-test; SMK-01 p.11 · AUTHOR-INTERPRETATION; SMK-01 p.11 · Fig. 12 · MEASURED · single-test; SMK-01 p.12 · Fig. 13 · MEASURED · single-test]
| C11 | Run 95 | Pyrell | none | Fig. 13 | spherical particles | [SMK-01 p.12 · Fig. 13 · MEASURED · single-test]
| C11 | Run 80 | Lampwick | 8 cm/s; the lampwick no-airflow panel is also labelled Run 80, as printed | Fig. 13 | images shown; the text gives no separate description of them | [SMK-01 p.12 · Fig. 13 · MEASURED · single-test]

- Ageing raised the average particle size (Table 1), but that change is hard to see in the TEM images; the clearest visible change is that the smallest particles disappear (Fig. 12; ageing time not given in its caption). [SMK-01 p.10 · MEASURED; SMK-01 p.11 · Fig. 12 · MEASURED]
- The authors' explanation: the smallest particles are the most mobile and are readily absorbed by larger ones; for semi-liquid particles this barely changes the larger particle's size, since diameter goes as the cube root of volume, and non-liquid small particles stuck to larger ones are unlikely to be visible in the TEM anyway. [SMK-01 p.10 · AUTHOR-INTERPRETATION]
- How the authors picture smoke forming: as the wire heats the sample, chemical bonds break and pyrolysis releases gaseous products, possibly including partly oxidized species from reaction with oxygen. [SMK-01 p.11 · AUTHOR-INTERPRETATION]
- Moving away from the wire, the gases cool and their species concentrations fall through conduction, diffusion and convection; once the pyrolysis gas passes a critical supersaturation, smoke particles nucleate and grow fast by condensation, within milliseconds or less. [SMK-01 p.11 · AUTHOR-INTERPRETATION]
- Over longer times, up to about 10^3 s, the growing particles collide through Brownian motion and stick together (coagulation). [SMK-01 p.11 · AUTHOR-INTERPRETATION]
- Per the authors, what mainly shapes the smoke in these tests is low gravity, the convective flow past the heated wire, the wire's temperature and the ageing time. [SMK-01 p.11 · AUTHOR-INTERPRETATION]
- A hotter wire pyrolyzes more of the sample, and the extra gas condenses on the nuclei, giving a higher aerosol mass concentration and a larger diameter of average mass. [SMK-01 p.11 · AUTHOR-INTERPRETATION]

#### Two-moment detector (MPASS) results
- Purpose: show how well a two-moment smoke detector works; a smoke detector is not calibrated for particular materials but carries one calibration for all conditions, so the aim is a flat response, whatever the smoke type or particle size, with the signal proportional only to one chosen moment such as mass or number concentration. [SMK-01 p.9 · MEASURED · nominal]

| Set | Data used | Correlation | Platform | Not reported by this source | Citation |
|---|---|---|---|---|---|
| C12 | every SAME-2 test point with a signal-to-noise ratio above 2, whatever the material, heating rate or ageing time | least-squares, third-order correlation predicting number and mass concentration from the MPASS output, with the other SAME measurements (number and mass concentration) as reference | ISS, SAME-2 | number of test points, cabin atmosphere | [SMK-01 p.9 · MODELED · nominal; SMK-01 p.4 · MEASURED · nominal]

- Figs. 9 (mass-normalized) and 10 (number-normalized) plot the normalized single-channel output ("channel 1") and the normalized correlation result ("2 channel parameter fit") against geometric mean diameter; an ideal response is a horizontal line, and the scatter is expressed as Δ, the least-squares variance relative to the mean (conditions C12). [SMK-01 p.9 · AUTHOR-INTERPRETATION; SMK-01 p.10 · Fig. 9 · MEASURED · nominal; SMK-01 p.10 · Fig. 10 · MEASURED · nominal]
- Axes: Fig. 9 y = volts/(mg/m³), 0 to 0.1; Fig. 10 y = volts/(#/cm³), 0 to 6 × 10^-5; in both, x = geometric mean diameter, 0 to 0.9 µm. [SMK-01 p.10 · Fig. 9 · MEASURED · nominal; SMK-01 p.10 · Fig. 10 · MEASURED · nominal]
- Printed Δ values (conditions C12): mass-normalized response, Δ = 0.18391 for the two-channel fit against 0.51716 for channel 1; number-normalized response, Δ = 0.83012 for the two-channel fit against 1.7181 for channel 1. [SMK-01 p.10 · Fig. 9 · MEASURED; SMK-01 p.10 · Fig. 10 · MEASURED]
- Found: in both figures the correlation cuts the relative variance by roughly a factor of at least 2 compared with a conventional single-output sensor (conditions C12). [SMK-01 p.9 · MEASURED; SMK-01 p.10 · Fig. 9 · MEASURED; SMK-01 p.10 · Fig. 10 · MEASURED]
- Found: the variance of the mass response is substantially lower than that of the number response (conditions C12). [SMK-01 p.9 · MEASURED; SMK-01 p.10 · Fig. 9 · MEASURED; SMK-01 p.10 · Fig. 10 · MEASURED]
- The authors note this fits the MPASS having been optimized originally for mass concentration, not number concentration. [SMK-01 p.9 · AUTHOR-INTERPRETATION]
- The plotted geometric mean diameters run from about 0.03 to about 0.43 µm, plus one isolated point at about 0.84 µm; in Fig. 10 many points of both series sit near 0 below about 0.2 µm (conditions C12; values read from raster images, read tolerance ±0.05 µm on x, ±0.01 volts/(mg/m³) in Fig. 9 and ±0.5 × 10^-5 volts/(#/cm³) in Fig. 10). [SMK-01 p.10 · Fig. 9 · MEASURED · ~fig; SMK-01 p.10 · Fig. 10 · MEASURED · ~fig]

| Set | Figure, series | Value at the largest diameter (~0.84 µm) | Spread of the series | Citation |
|---|---|---|---|---|
| C12 | Fig. 9 (mass-normalized), channel 1 | ~0.055 volts/(mg/m³) | ~0.005 (lowest, at ~0.11 to ~0.20 µm) to ~0.078 (highest, at ~0.30 µm) | [SMK-01 p.10 · Fig. 9 · MEASURED · ~fig]
| C12 | Fig. 9 (mass-normalized), 2 channel parameter fit | ~0.036 volts/(mg/m³) | ~0.021 (lowest, at ~0.19 µm) to ~0.052 (highest, at ~0.19 and ~0.28 µm) | [SMK-01 p.10 · Fig. 9 · MEASURED · ~fig]
| C12 | Fig. 10 (number-normalized), channel 1 | ~5.9 × 10^-5 volts/(#/cm³) | below ~0.43 µm: ~0 to ~2.3 × 10^-5 (highest at ~0.32 µm) | [SMK-01 p.10 · Fig. 10 · MEASURED · ~fig]
| C12 | Fig. 10 (number-normalized), 2 channel parameter fit | ~1.0 × 10^-5 volts/(#/cm³) | below ~0.43 µm: ~0 to ~1.6 × 10^-5 (highest at ~0.07 µm) | [SMK-01 p.10 · Fig. 10 · MEASURED · ~fig]

- The authors' reading: with suitable processing, the MPASS output can follow either number or mass concentration over a wide range of particle sizes and material compositions; by combining two moments it scales its response to the particle size, giving a truer measure of how much smoke is present than a single-moment detector. [SMK-01 p.9 · AUTHOR-INTERPRETATION]
- They add that the MPASS can therefore tell a strong signal from dense smoke apart from a strong signal from a thinner cloud of very large dust particles, which can cut false smoke alarms. [SMK-01 p.9 · AUTHOR-INTERPRETATION]

#### Authors' conclusions for smoke-detector design, with their limits
- Smoke particle size distributions differed substantially between the materials tested (the conclusions say five spacecraft materials). [SMK-01 p.12 · AUTHOR-INTERPRETATION]
- Under the SAME test conditions, every sample gave large numbers of sub-micrometre particles that an ionization smoke detector picks up readily. [SMK-01 p.12 · AUTHOR-INTERPRETATION]
- The ageing results suggest that some materials, silicone rubber for one, can make smoke that grows to sizes better suited to light-scattering detection. [SMK-01 p.12 · AUTHOR-INTERPRETATION]
- Zero flow gave smoke particles 2 to 3 times larger than the nominal 8 cm/s flow (SAME, ISS; the sentence does not name the size measure; compare the 30 % to 40 % figure above and see Conflicts). [SMK-01 p.12 · MEASURED]
- Limit the authors state: real spacecraft fires involve an even wider array of materials and broader flow and temperature conditions than were tested, so credible pre-fire overheat events can be expected to give broad smoke size distributions. [SMK-01 p.12 · AUTHOR-INTERPRETATION]
- Detection methods that measure more than one moment of the size distribution may detect better and reject false alarms better than single-moment detectors; the results from the prototype two-moment MPASS were very encouraging, showing real potential to respond across a broad particle range without excessive nuisance alarms. [SMK-01 p.12 · AUTHOR-INTERPRETATION]
- The TEM results show that fire particulate can be expected to take a broad range of morphologies, shaped by heating rate, material and flow conditions. [SMK-01 p.12 · AUTHOR-INTERPRETATION]

### Smoke and particles in microgravity
- Detecting fires in spacecraft is harder than on Earth because buoyancy affects the properties of the smoke a fire gives off, and spacecraft need fast detection with few false alarms. [OVR-12 p.26 · AUTHOR-INTERPRETATION]
- Found: fundamental microgravity research showed that flames in microgravity produce particulates of very different size (not reported by this source: fuels, particle sizes, conditions). [OVR-12 p.35 · MEASURED]
- Since many fire detectors work by sensing particulates from the fire, they would need different signatures for fires in microgravity; a terrestrial detector flown in space would be "looking" for the wrong thing. [OVR-12 p.35 · AUTHOR-INTERPRETATION]
- In gas-jet diffusion flames tested in drop towers and space facilities, the onset of smoke production in low gravity differed substantially from normal gravity and went against predictions in earlier literature (not reported by this source: fuels, conditions). [OVR-12 p.32 · CITED]
- The same experiments showed significant differences in primary soot particle size and a larger fractal dimension of the soot agglomerates (e.g., Greenberg et al., 1997; not reported by this source: sizes, conditions). [OVR-12 p.32 · CITED]
- The guide counts technologies to measure and characterize small aerosol particles among the most significant developments of the programme (e.g., Qi et al., 2008). [OVR-12 p.34 · CITED · nominal]

### ISS experiments: SAME and the Dust Aerosol measurement Feasibility Test
- Two recent experiments addressed spacecraft fire detection: the Dust Aerosol measurement Feasibility Test examined background aerosol particulate levels on the ISS, and the Smoke Aerosol Measurement Experiment (SAME) examined the particle-size distribution of smoke from spacecraft materials. [OVR-12 p.26 · CITED]
- SAME ran in the MSG in 2007 and 2010. [OVR-12 p.45 · AUTHOR-INTERPRETATION]
- The guide says these instruments can usefully guide designers of future spacecraft smoke detectors. [OVR-12 p.26 · AUTHOR-INTERPRETATION]

### Detectors
- NASA Glenn Research Center (GRC) runs active research programmes in both fire detection and fire suppression. [OVR-12 p.35 · AUTHOR-INTERPRETATION · nominal]
- One achievement is a new device that monitors particulates and chemical species at the same time to better detect the onset of a fire. [OVR-12 p.35 · MEASURED · nominal]
- Found: in tests run jointly with the Federal Aviation Administration, the device did better than the smoke detectors now used on aircraft both at rejecting false alarms and at catching real events (not reported by this source: test platform, fire sources). [OVR-12 p.35 · MEASURED]
- The device can be "tuned" to the particulate and species signatures of fires in microgravity. [OVR-12 p.35 · AUTHOR-INTERPRETATION · nominal]

## Spacecraft fire-safety frame (OVR-12)

### Hazard and how NASA controls it
- For the guide, fire safety is a key operational part of crewed exploration, aiming to make accidental fires in spacecraft and habitats both less likely and less harmful. [OVR-12 p.9 · AUTHOR-INTERPRETATION]
- It cites the 1967 Apollo 1 cabin fire during a launch-pad test, which killed three astronauts, and the 1970 Apollo 13 oxygen-tank explosion on the way to the Moon as showing the hazard of accidental spacecraft fires. [OVR-12 p.34–35 · CITED]
- A fire or explosion needs all three elements of the "fire triangle" (fuel, oxygen, an ignition source), and a crewed spacecraft necessarily contains all three. [OVR-12 p.35 · AUTHOR-INTERPRETATION]
- Spacecraft also often operate at an ambient oxygen mole fraction above that of air, have few ways to escape, and tolerate almost no damage to critical life-support systems. [OVR-12 p.35 · AUTHOR-INTERPRETATION · nominal]
- NASA therefore keeps a disciplined fire-safety culture: strict material controls, rigid design standards for electronic equipment and every possible ignition source, and suppression systems required on all spacecraft. [OVR-12 p.35 · AUTHOR-INTERPRETATION]
- Fire prevention, detection and suppression all differ fundamentally in space, so better knowledge of combustion in reduced gravity is called essential to adapt fire-safety concepts and systems to the stricter conditions of space. [OVR-12 p.9–10 · AUTHOR-INTERPRETATION]
- How such environmental changes affect combustion in reduced gravity is described as unclear and in need of better understanding for all mission-relevant scenarios. [OVR-12 p.9 · AUTHOR-INTERPRETATION]

### Three misconceptions the guide says research showed false
- NASA's approach to spacecraft fire safety was dominated by a general lack of knowledge of how fire behaves in microgravity, which led to several critical misconceptions. [OVR-12 p.35 · AUTHOR-INTERPRETATION]
- Misconception 1 (shown false): in still microgravity air a fire cannot burn steadily. [OVR-12 p.35 · CITED]
- Misconception 2 (shown false): a fire will put itself out if the ventilation is shut off. [OVR-12 p.35 · CITED]
- Misconception 3 (shown false): because reduced gravity is inherently safer, terrestrial fire standards and tests are a very conservative approach to fire safety. [OVR-12 p.35 · CITED]
- GRC research in ground laboratories, ground microgravity facilities and space experiments (summarized by Friedman and Ross, 2001, and Ruff et al., 2009) showed these assumptions to be false; the guide presents this as GRC's contribution to fire prevention through material flammability and screening. [OVR-12 p.35 · CITED]
- Elsewhere the guide recalls that many researchers, notable experts among them, had argued in print that without convection diffusion alone could not sustain a steady flame, and that two spaceflight experiments proved this wrong. [OVR-12 p.30 · AUTHOR-INTERPRETATION]

### Why Earth-based flammability tests may not be conservative
- Space-based and ground-based low-gravity experiments found substantial differences in how flames over solid materials behave in reduced gravity, many of them bearing directly on the spacecraft fire hazard. [OVR-12 p.18 · AUTHOR-INTERPRETATION]
- Microgravity experiments showed that the assumed safety margin of lower flammability in microgravity, based on quiescent tests, may not hold in most spacecraft environments, where ventilation flow strongly enhances flames. [OVR-12 p.18 · AUTHOR-INTERPRETATION]
- Found: in the low flows of microgravity or partial gravity, some materials burn at lower oxygen concentrations than in normal gravity (Fig. 8; not reported by this source: materials, oxygen values, pressure, flow speeds). [OVR-12 p.18 · MEASURED]
- Found: recent BASS results on the ISS indicate that NASA-STD-6001 Test 1 is not conservative: in microgravity, materials can keep burning at oxygen levels lower than on Earth (not reported by this source: materials, oxygen values, pressure, flow). [OVR-12 p.31 · MEASURED]
- Recent drop-tower results, cited without a reference, suggest that the current Test 1 might not be conservative. [OVR-12 p.23 · CITED]
- Fig. 8 "Flammability Map" is a schematic with no axis values: ambient oxygen concentration against forced or buoyant flow velocity; a U-shaped boundary encloses the "Flammable region", its low-flow minimum marked "0g Limit"; a point on the higher-flow branch is marked "Modified Test 1 Limit"; the band between those two oxygen levels is labelled "Enhanced Flammability" and their oxygen difference "Negative Oxygen Margin of Safety"; the caption places enhanced flammability in the low-convective-flow range. [OVR-12 p.18 · Fig. 8 · AUTHOR-INTERPRETATION · ~fig]
- For flame spread over solids, Fig. 8 is read with ambient oxygen mole fraction on the ordinate and gas velocity across the solid surface on the abscissa; the boundary is the limit of steady flame spread, which occurs inside it and not outside. [OVR-12 p.31 · AUTHOR-INTERPRETATION]
- Reduced-gravity facilities allow flames with characteristic velocities far below typical buoyancy-induced gas velocities (about 1 m/s in the candle flame of Fig. 1), giving flame stretch or strain rates unattainable in bench-scale tests on Earth. [OVR-12 p.31 · CITED · nominal]
- Conventional flame-limit theories all predicted that as the characteristic velocity of flame stretch decreased, the oxygen concentration needed for steady or quasi-steady burning would fall monotonically. [OVR-12 p.31 · CITED]
- Several classes of experiments showed otherwise: at low characteristic velocity (low flame stretch) radiative loss begins to dominate and finally extinguishes the flame at low enough velocity or stretch rate (e.g., Olson et al., 1988; reduced gravity; not reported by this source: fuels, pressure, platforms). [OVR-12 p.31 · CITED]
- The resulting curve gives a much lower flammability limit than first predicted. [OVR-12 p.31 · AUTHOR-INTERPRETATION]
- For flame spread over solids, the curve's minimum lies at a characteristic gas velocity on the order of 10 cm/s, which is also where flame spread rate peaks (reduced gravity; not reported by this source: materials, oxygen mole fraction at the minimum, pressure). [OVR-12 p.31 · CITED]
- That velocity is typical of spacecraft ventilation systems, so the guide sees the minimum as having large implications for material flammability in reduced gravity and for spacecraft fire safety. [OVR-12 p.31 · AUTHOR-INTERPRETATION]

## Reduced-gravity combustion research bearing on fire safety (OVR-12)

### Why burn things in microgravity
- Although studied for over 80 years, combustion remains one of the most poorly controlled phenomena; even a simple combustor such as a kitchen stove is beyond detailed numerical modelling. [OVR-12 p.8 · AUTHOR-INTERPRETATION]
- Combustion typically involves hundreds of chemical species and up to thousands of reactions, and these set flammability limits (combustor operating ranges) and pollutant emissions. [OVR-12 p.8 · AUTHOR-INTERPRETATION]
- Flames typically run on the order of 2,300 K against an ambient of about 300 K, an eight-fold density change over about a centimetre; the density gradient drives a strong flow that dominates all but the strongest imposed flows, lifts the flame upward, and causes the flicker of flames on Earth. [OVR-12 p.8 · AUTHOR-INTERPRETATION]
- In bench-scale experiments this buoyancy dominates and often hides the physics and chemistry of interest; without gravity, buoyancy can be suppressed and analyses reduced to much simpler one-dimensional systems. [OVR-12 p.8 · AUTHOR-INTERPRETATION]
- Ground platforms that vary or remove gravity's effects are limited in test time and size; long tests at realistic sizes, possible only in space facilities, are called essential. [OVR-12 p.8–9 · AUTHOR-INTERPRETATION]
- Benefits listed: removing the complex coupling between buoyant flow and energy feedback to the flame, realistic simulation of the fire risk in crewed spacecraft, and practical simulation of the gravity environment of reacting systems in future spacecraft. [OVR-12 p.10 · AUTHOR-INTERPRETATION]
- Images pairing 1-g and 0-g flames: candle flames (cover pages), and in Fig. 1 ethane jet flames, ethylene jet flames ("1-g Buoyant" against "micro-g non-buoyant"), candle flames, burning heptane droplets and flame spread over a butanol pool (the Fig. 1 microgravity candle flame burned aboard the Russian Mir station, and buoyancy-induced gas velocities in the Fig. 1 candle flame are about 1 m/s; not reported by this source: oxygen, pressure). [OVR-12 p.2 · MEASURED; OVR-12 p.9 · Fig. 1 · MEASURED; OVR-12 p.30 · CITED; OVR-12 p.31 · AUTHOR-INTERPRETATION · nominal]
- Over the two decades before the guide, microgravity combustion research focused mainly on fundamentals (droplet combustion, soot production, flame spread, smouldering, gas-jet flames), helped by synergistic programmes in Europe and Japan, and improved the ability to model droplet burning in spray combustors such as jet engines, to predict flame spread and soot production, and to detect and prevent spacecraft fires. [OVR-12 p.11 · AUTHOR-INTERPRETATION]
- Well over 200 principal investigators used reduced-gravity facilities, mostly drop towers and aircraft; the most promising experiments were chosen for space after thorough scientific and engineering review. [OVR-12 p.30 · MEASURED]
- The guide credits this work with numerous discoveries, attention to often-neglected phenomena, better understanding and prediction for all combustion systems, and a better ability to detect and prevent spacecraft fires. [OVR-12 p.30 · AUTHOR-INTERPRETATION]

### Droplets and cool flames
| Set | Fuel and form | Gravity, platform, facility | Atmosphere | Not reported by this source | Citation |
|---|---|---|---|---|---|
| C5 | single large alkane droplets | spaceflight microgravity, FLEX, ISS CIR with MDCA | quiescent ambient | droplet diameter, oxygen and diluent fractions, pressure, test count | [OVR-12 p.33 · MEASURED · nominal; OVR-12 p.36 · MEASURED · nominal]

- Long, high-quality microgravity makes possible the textbook case of a spherical droplet inside a spherical flame in an infinite, quiescent atmosphere, which researchers set up as a test bed for fundamental and applied combustion work. [OVR-12 p.11 · AUTHOR-INTERPRETATION · nominal]
- Microgravity also lets researchers study this classical problem (e.g., Dietrich et al., 1996; Nayagam et al., 1998), and nearly every combustion textbook analyses it. [OVR-12 p.32 · CITED · nominal]
- The droplet programmes combined drop towers, aircraft flying parabolic trajectories, 1-g laboratories, numerical and theoretical modelling, and finally space experiments. [OVR-12 p.11 · AUTHOR-INTERPRETATION · nominal]
- Topics studied: departures from quasi-steady burning, the transition from diffusive to radiative extinction, liquid-phase transport, the influence of convection on flame dynamics (Fig. 2), soot formation and destruction (Fig. 3), multi-component fuels, droplet-droplet interactions and flammability limits. [OVR-12 p.11 · AUTHOR-INTERPRETATION]
- For droplets, Fig. 8 is read with ambient oxygen mole fraction on the ordinate and droplet diameter on the abscissa, the boundary again marking flammability; the curve is reversed, since larger droplets have lower stretch rates or larger Damköhler numbers. [OVR-12 p.32 · AUTHOR-INTERPRETATION]
- Space tests and, to a limited extent, drop-tower tests showed that this droplet flammability limit exists (not reported by this source: fuels, diluents, pressure, droplet sizes). [OVR-12 p.32 · CITED]
- The curve matters for spacecraft fire-safety flammability limits and also practically: it arises from the coupling of heat and mass transport with chemical kinetics, whose mechanisms are building blocks for practical fuels, so droplet tests give benchmark data to validate physical and kinetic sub-models of practical fuels. [OVR-12 p.32 · AUTHOR-INTERPRETATION]
- Droplet flames burning with spherical symmetry show flame oscillations similar to those of the near-extinction candle flame (Dietrich et al., 1996). [OVR-12 p.33 · CITED]
- Found: recent FLEX spaceflight tests on single alkane droplets uncovered unexpected behaviour; a large droplet first burns briefly with a typical hot flame, which goes out, as expected, once radiative loss pulls the flame temperature below a critical value (conditions C5). [OVR-12 p.33 · MEASURED]
- Found: after that hot-flame extinction the droplet kept vaporizing at the same rate for an extended period, then abruptly stopped at a finite size just as a large vapour cloud formed (conditions C5). [OVR-12 p.33 · MEASURED]
- Explanation now accepted by the authors: a lower-temperature cool flame that forms after the visible flame goes out sustains this vaporization; vaporization stops when the cool flame dies and the vapour cloud forms, because the cool flame burns only part of the fuel leaving the droplet. [OVR-12 p.33–34 · AUTHOR-INTERPRETATION]
- Cool flames normally form as an intermediate stage between unreacted fuel and oxidizer and should not form after a hot flame goes out; many peers had thought cool-flame-supported droplet burning impossible, and it took the team one year to convince itself and another to convince the community. [OVR-12 p.34 · AUTHOR-INTERPRETATION]
- Found: the cool flame can burn for a prolonged time (conditions C5; durations not given). [OVR-12 p.34 · MEASURED]
- The guide ranks first among FLEX/FLEX-2 observations the cool flames, stable and quasi-steady, that appear in burning heptane droplets once the visible flame has gone out by radiative extinction (Nayagam et al., 2012; conditions C5). [OVR-12 p.36 · CITED]
- Microgravity droplet tests are called a unique platform for studying these low-temperature reactions. [OVR-12 p.34 · AUTHOR-INTERPRETATION]
- Proposed (Cool Flames initiative): a new research line growing out of this unprecedented CIR-FLEX finding, using the existing FLEX-2 CIR/MDCA hardware with some added diagnostics. [OVR-12 p.41 · AUTHOR-INTERPRETATION; OVR-12 p.42 · AUTHOR-INTERPRETATION · nominal]
- Its objectives: (i) across a range of fuels and conditions (e.g., pressure, diluent concentrations), the pre-conditions for hot-to-cool flame transition, cool-flame stability and spontaneous re-ignition; (ii) a robust numerical model with detailed chemistry to complement analytical Cool Flame Theory. [OVR-12 p.41 · AUTHOR-INTERPRETATION]
- Fire-safety relevance per the guide: reduced gravity has been shown to favour a low-temperature regime of very weak but persistent flames, invisible to the unaided eye, that re-ignite spontaneously long after the visible flame is out; the pre-conditions, chemistry and re-ignition mechanisms are poorly understood (not reported by this source: fuel, oxygen, diluent, pressure, flow). [OVR-12 p.41–42 · AUTHOR-INTERPRETATION]
- The initiative also bears on engines that rely on low-temperature combustion such as cool flames to cut emissions and fuel use (Homogeneous Charged Compression Ignition, Reactivity Controlled Compression Ignition). [OVR-12 p.41 · AUTHOR-INTERPRETATION]
- Programme gaps named in the guide: funding limits have severely cut the number of droplet researchers and projects; CIR/MDCA work should widen to practical fuels and surrogates, ideally aligned with Department of Energy and Department of Defense efforts; high-pressure droplet and spray combustion are virtually absent although liquid fuels supply most transport energy; and a comprehensive ground programme (drop towers plus theory and modelling), which gives physical insight, trains students and seeds the next space experiments, is missing. [OVR-12 p.36–37 · AUTHOR-INTERPRETATION]

### Gas flames and soot
- Past research included four space experiments on soot processes, flame-vortex interaction and flame stability. [OVR-12 p.13 · AUTHOR-INTERPRETATION · nominal]

| Experiment | Investigators | Platform and year | Enclosure | Notes | Citation |
|---|---|---|---|---|---|
| Laminar Soot Processes (LSP) | G. Faeth (U. Michigan) et al. | CM, shuttle STS-83 and STS-94 (1997), again STS-107 (2003) | sealed chamber | soot processes, ambient (no coflow) configuration | [OVR-12 p.13 · MEASURED · nominal]
| Turbulent Gas-jet Diffusion Flame (TGDF) | M. Y. Bahadori (SAIC) et al. | shuttle STS-87 (1997), automated, Get-Away-Special Canister in the payload bay | sealed chamber | flame not turbulent: an iris mechanism at its base induced vortices in the entrained air | [OVR-12 p.13 · MEASURED · nominal]
| Enclosed Laminar Flames (ELF) | L. D. Chen (U. Iowa) et al. | shuttle STS-87 (1997), crew-operated in the Middeck Glovebox | fan-driven flow duct | — | [OVR-12 p.13 · MEASURED · nominal]
| Smoke Point In Coflow Experiment (SPICE) | D. L. Urban (GRC) et al. | ISS MSG, 2009 | fan-driven flow duct | soot processes in coflow | [OVR-12 p.13 · MEASURED · nominal]

- All four were laminar, axisymmetric gas-jet diffusion flames. [OVR-12 p.13 · MEASURED · nominal]
- SPICE studied the transition from non-sooting to sooting flames, a major goal being simple predictions of soot emission; the smoke point, set by fuel chemistry and flow conditions, indicates how prone a fuel is to emit light and produce soot. [OVR-12 p.13–14 · AUTHOR-INTERPRETATION]
- Fig. 4: 2009 SPICE flames on the ISS going from non-smoking to a fully open, smoking tip as fuel flow increases (not reported by this source: fuel, oxygen, pressure, coflow speed). [OVR-12 p.13 · MEASURED · nominal; OVR-12 p.14 · Fig. 4 · MEASURED]
- Soot control remains one of the major unsolved problems of combustion and engine development. [OVR-12 p.14 · AUTHOR-INTERPRETATION]
- The Structure & Liftoff In Combustion Experiment (SLICE; M. B. Long, Yale U., et al.) used the SPICE hardware in the station glovebox to study lifted and lifting flames, in effect a second-generation ELF; it started and completed operations in 2012. [OVR-12 p.14 · MEASURED · nominal]
- SLICE studies flames that flow and chemistry detach from the burner so that they stabilize downstream; its twin aims are higher fuel efficiency and lower pollutant emission in practical devices, through better combustion modelling. [OVR-12 p.14–15 · AUTHOR-INTERPRETATION]
- Another passage describes SLICE as to be carried out with the SPICE hardware in the MSG, as a precursor to the CLD Flame experiment then in development for the CIR under ACME. [OVR-12 p.15 · AUTHOR-INTERPRETATION · nominal]
- Fig. 5: effect of raising coflow velocity on lifted-flame behaviour, from exploratory SLICE tests run on the ISS in 2009 within SPICE (image scale not constant; not reported by this source: coflow velocities, fuel, oxygen, pressure). [OVR-12 p.15 · Fig. 5 · MEASURED]
- The guide counts six experiments planned for the ISS in its current gas-flame programme. [OVR-12 p.14 · AUTHOR-INTERPRETATION · nominal]
- Planned: Advanced Combustion via Microgravity Experiments (ACME), five experiments developed together for the CIR and sharing one modular hardware set; topics: soot, flame stability and extinction, materials flammability, electric-field effects; start of operations expected in 2016. [OVR-12 p.14 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.44 · AUTHOR-INTERPRETATION · nominal]
- All ACME flames are laminar diffusion flames: two use a one-dimensional spherical flame around a porous spherical burner, one a porous plate burner, and two a gas-jet flame with and without coaxial air flow. [OVR-12 p.14 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.44 · AUTHOR-INTERPRETATION · nominal]

| ACME experiment (planned) | Investigators | Burner and method | Fuels, atmosphere, measurements | Aim | Citation |
|---|---|---|---|---|---|
| Burning Rate Emulator (BRE) | J. G. Quintiere (U. Maryland) et al. | flat porous burner fed with gaseous fuel; fuel flow set from the measured heat flux at the burner and surface temperature, mimicking how a condensed fuel's vaporization depends on thermal feedback | a few gaseous fuels matched to fuels such as paper, plastic and alcohol by surface temperature and smoke production | fire prevention, especially in spacecraft: ignition and extinction of materials, and whether existing flammability tests are relevant in low and partial gravity | [OVR-12 p.14 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.15 · AUTHOR-INTERPRETATION · nominal]
| Coflow Laminar Diffusion Flame (CLD Flame) | M. B. Long (Yale U.) et al. | lifted coflow flames, to avoid dependence on heat loss to the burner | diluted methane and ethylene flames in an air coflow; injection velocity and dilution varied from very dilute to highly sooting | extend the range of predictable flames by developing and testing kinetic and soot sub-models | [OVR-12 p.14 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.16 · AUTHOR-INTERPRETATION · nominal]
| Electric-Field Effects on Laminar Diffusion Flames (E-FIELD Flames) | D. Dunn-Rankin (UC Irvine) et al. | coflow flame, or perhaps a simple gas jet without coflow; up to 10 kV between the burner and a flat circular mesh above it | ion current through the flame and response time to electric forcing, against field strength and fuel dilution | how flames produce ions and how ions can control non-premixed flames | [OVR-12 p.14 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.16 · AUTHOR-INTERPRETATION · nominal]
| Flame Design | R. L. Axelbaum (Washington U.) et al. | spherical flames as in s-Flame; an inverse spherical flame if the Payload Safety Review Panel allows, otherwise a coflow burner with normal and inverse flames | ethylene or methane at various concentrations, oxygen-enriched atmospheres | soot inception and extinction limits, toward robust soot-free non-premixed flames; test whether the stoichiometric mixture fraction marks soot and flammability limits as the equivalence ratio does for premixed flames | [OVR-12 p.14 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.16–17 · AUTHOR-INTERPRETATION · nominal]
| Structure and Response of Spherical Diffusion Flames (s-Flame) | C. K. Law (Princeton U.) et al. | porous spherical burner issuing a fuel/inert mixture into the CIR chamber; flames ignited at non-steady conditions and left to drift toward extinction | hydrogen and methane (soot-free), ethylene (sooty); various inert diluents in fuel and chamber | structure and dynamics, including extinction, of soot-free and sooty flames; radiative and convective extinction limits (high and low system Damköhler numbers) | [OVR-12 p.14 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.17–18 · AUTHOR-INTERPRETATION · nominal]

- BRE's significance per the guide: it could measure burning rate efficiently and completely over a wide range of fuel properties and, by controlling the fuel properties behind different fire scenarios, establish whether existing flammability tests are relevant in low and partial gravity. [OVR-12 p.15 · AUTHOR-INTERPRETATION]
- Research, including microgravity work, shows predictive ability is significantly lacking at the extremes of fuel dilution (sooty pure-fuel flames and dilute flames near extinction); CLD Flame results are expected to apply to turbulent combustion, ignition and flame stability. [OVR-12 p.16 · AUTHOR-INTERPRETATION]
- Electric fields act on flames through the ions combustion produces: direct ion transport and the induced ion wind can change flame shape, shift soot or flammability limits, steer heat transfer and cut pollutant emission. [OVR-12 p.16 · AUTHOR-INTERPRETATION]
- Theory predicts pulsating instabilities in such spherical flames for fuel/diluent mixtures above a critical Lewis number (no reference printed); s-Flame aims to establish whether they exist, their onset and their nature. [OVR-12 p.18 · CITED]
- Fig. 6 (Flame Design, 2.2-second Drop Tower): a spherical diffusion flame on a visible porous burner at the end of a test, 1.51 mg/s of 100% ethylene issuing into air at atmospheric pressure (not reported by this source: burner diameter, ignition). [OVR-12 p.17 · Fig. 6 · MEASURED · single-test]
- Fig. 7 (s-Flame, 2.2-second Drop Tower): a partially premixed spherical flame on a visible porous burner, the gas being 25% propane, 2% oxygen, 49% argon and 24% nitrogen (not reported by this source: ambient atmosphere, pressure, flow rate). [OVR-12 p.17 · Fig. 7 · MEASURED · single-test]
- Cover image, a prelude to Flame Design in NASA Glenn's 2.2-Second Drop Tower: ethylene flowing from a porous sphere into quiescent air forms a spherical flame, with glowing soot trapped inside the blue flame and a bright arc of large soot particles in front (not reported by this source: pressure, oxygen beyond "air", ignition, duration). [OVR-12 p.2 · MEASURED · nominal, single-test]
- A gas-jet flame is a fuel gas issuing from a nozzle into an initially still oxidizing atmosphere; on Earth such flames serve to study simple-fuel kinetics, flame stability and soot formation and destruction, but in bench-scale laminar tests buoyancy is hard to suppress. [OVR-12 p.32 · AUTHOR-INTERPRETATION]
- In drop-tower and space tests, jet-flame heights differ strikingly from normal gravity when the jet Reynolds number is low or moderate (e.g., Hegde et al., 1994; Urban et al., 1998; not reported by this source: fuels, oxygen, pressure, Reynolds numbers). [OVR-12 p.32 · CITED]
- These data serve as benchmarks for detailed chemical kinetic and soot formation and destruction models. [OVR-12 p.32 · AUTHOR-INTERPRETATION]
- Outlook: gas diffusion-flame research mainly targets better combustion technology on Earth, where flames are often turbulent, at elevated pressure and partly premixed; microgravity allows momentum-dominated flames with larger scales and longer residence times, and tests on pulsed laminar flames and vortex-flame interaction (e.g., TGDF) can advance turbulence understanding; high-pressure combustion is strongly affected by buoyancy and hard to study in normal gravity. [OVR-12 p.37 · AUTHOR-INTERPRETATION]
- The ACME investigations, planned to follow FLEX, examine gas-jet diffusion flames, and the hardware in development will also take burner-stabilized, partially premixed flames; simplified precursor experiments were under way in the MSG to give ACME investigators interim data. [OVR-12 p.37 · AUTHOR-INTERPRETATION · nominal]
- These experiments again use microgravity's simple flame geometry to develop, validate and refine chemical kinetic models relevant to nearly all combustion systems on Earth. [OVR-12 p.37 · AUTHOR-INTERPRETATION]

### Solid fuels and material flammability
| Set | Material and form | Gravity, platform, facility | Atmosphere and flow | Not reported by this source | Citation |
|---|---|---|---|---|---|
| C6 | 2-cm diameter acrylic sphere | microgravity, ISS, BASS | 17% O2, 12 cm/s flow; nitrogen has been used for BASS tests as low as 17% O2 | pressure, ignition method | [OVR-12 p.18 · MEASURED · nominal; OVR-12 p.19 · MEASURED · nominal; OVR-12 p.20 · Fig. 11 · MEASURED · nominal]
| C7 | 2-cm wide cotton-fiberglass fabric | microgravity, BASS (the BASS text points to Figs. 11 to 13) | opposed flow cut in steps from 10 cm/s to below 1 cm/s | oxygen, pressure, ignition method | [OVR-12 p.20 · Fig. 12 · MEASURED · nominal; OVR-12 p.21 · MEASURED]

- Materials ignite more easily in low gravity because natural convection cools the fuel surface less. [OVR-12 p.18 · AUTHOR-INTERPRETATION]
- Found: once established, flames in slow airflow may spread preferentially into the oncoming air, depending on flow speed, the opposite of normal gravity (Fig. 9, Radiative Ignition and Transition to Spread Investigation, in the microgravity of spaceflight; not reported by this source: flow speeds, materials, oxygen, pressure). [OVR-12 p.18 · MEASURED; OVR-12 p.31 · MEASURED]
- Found: in spaceflight microgravity, a thin fuel ignited mid-sample spreads upstream into the oncoming air when forced flow is slow, whereas in normal gravity the flame always spreads downstream with the buoyant flow, even without forced flow (not reported by this source: flow speeds, oxygen, pressure). [OVR-12 p.31 · MEASURED]
- Found: radiant heat transfer strongly affects flammability; radiative heat loss from the surface lowers it, while an external radiant heat flux can make materials ignite and spread faster (not reported by this source: materials, oxygen, pressure, flow). [OVR-12 p.18 · MEASURED]
- BASS acrylic sphere, 2 cm diameter, burning on the ISS at 17% oxygen and 10 cm/s: occasional yellowish-red streaks appear where vapour bubbles formed in the solid ignite as they burst through the blue flame (nitrogen has more recently been used for BASS tests as low as 17% oxygen; not reported by this source: pressure). [OVR-12 p.2 · MEASURED · single-test; OVR-12 p.19 · MEASURED · nominal]
- A crew member holds a sample holder with a burned, bubbled BASS acrylic sheet, its bag labelled "2cm Acrylic Flat Sample". [OVR-12 p.3 · MEASURED · ~fig]
- Fig. 11 shows a flame sequence with images about 1.5 s apart (conditions C6). [OVR-12 p.20 · Fig. 11 · MEASURED · single-test]
- Found: with oxygen lowered from 21% (air) to 17%, the flame stays blue much longer, soot formation being delayed (conditions C6). [OVR-12 p.20 · Fig. 11 · MEASURED · single-test]
- The authors note this eases comparison with models, the high-resolution images allowing comparison of flame growth rate, flame-to-fuel distance and solid regression rate. [OVR-12 p.20 · Fig. 11 · AUTHOR-INTERPRETATION]
- Fig. 12: digital still images every 1.25 s; flow steps printed on the image are 10, 6, 4, 2, 1.5 and 1 cm/s, with an arrow marked "Airflow" pointing up; total burn time 90 s (conditions C7). [OVR-12 p.20 · Fig. 12 · MEASURED · ~fig, single-test]
- Found: the flame responds very rapidly to each flow change, and flow has dramatic effects on the flame and its spread rate (conditions C7). [OVR-12 p.20 · Fig. 12 · MEASURED · single-test]
- Near the limit, flame spread over solids can show a complex finger-like smouldering front under certain conditions (Olson et al., 1998), and flame spread across a liquid pool can pulsate in the gas phase under selected ambient conditions (e.g., Miller et al., 2000). [OVR-12 p.33 · CITED]
- Planned SoFIE status: the project is in its Science Definition phase, planning a CIR insert and a large flow duct in the MSG to serve up to five separate investigations. [OVR-12 p.22 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.44 · AUTHOR-INTERPRETATION]
- The investigations share SoFIE's overall objective: characterizing how solid spacecraft materials ignite and burn in practical shapes and realistic atmospheres. [OVR-12 p.22 · AUTHOR-INTERPRETATION; OVR-12 p.44 · AUTHOR-INTERPRETATION]
- Planned SoFIE investigation "Correlation of Flammability between Normal and Microgravity": map microgravity flammability of selected materials against ventilation flow, ambient oxygen and possibly pressure, to find the fundamental limiting oxygen concentration in microgravity, taken as the microgravity worst case and compared with the worst case of NASA-STD-6001 Test 1 (upward flame spread in normal gravity), so as to evaluate the oxygen safety margins of normal-gravity testing. [OVR-12 p.22 · AUTHOR-INTERPRETATION]
- It would also measure microgravity burning of real engineering materials planned for spacecraft against oxygen, pressure and flow speed for comparison with normal gravity, clarify how Test 1 limits relate to actual microgravity limits, and give a larger flammability safety margin through a slightly modified Test 1 protocol. [OVR-12 p.22–23 · AUTHOR-INTERPRETATION]
- Planned SoFIE investigation "Fundamentals of Flame Growth and Extinction in Microgravity": how flame growth, spread and decay over solids depend on gravity, flow velocity, oxygen percentage, pressure, sample size and preheating. [OVR-12 p.23 · AUTHOR-INTERPRETATION]
- In it, solid plastic spheres are to be burned in long tests so the whole flame history is recorded. [OVR-12 p.23 · AUTHOR-INTERPRETATION · nominal]
- A robust numerical model built from those results is to simulate transient flame growth in reduced gravity, relate material flammability between normal and reduced gravity, and examine the relevance of NASA-STD-6001 (Flammability, Offgassing, and Compatibility Requirements and Test Procedures) Test 1. [OVR-12 p.23 · AUTHOR-INTERPRETATION]
- Ground microgravity facilities have well-understood practical limits, and long ISS tests will have some too; carefully chosen ISS tests plus the model are expected to overcome many of them enough to improve markedly the understanding of how Earth flammability tests apply in space. [OVR-12 p.23 · AUTHOR-INTERPRETATION]
- Planned SoFIE investigation "Thermal and Species Field Effects on Material Flammability": theory and modelling suggest that a key difference between normal-gravity and microgravity flammability comes from how the flow field affects the overlap of the thermal and species fields in the flame zone. [OVR-12 p.23 · AUTHOR-INTERPRETATION]
- Its goal is the flame spread rate over thin fuels in quiescent microgravity, compared with a closed-form expression containing the relevant solid properties and environmental parameters. [OVR-12 p.23 · AUTHOR-INTERPRETATION]
- Gas temperature and carbon-dioxide and oxygen concentration fields are to be measured at key points to separate how the thermal field and the species field propagate, the separation being controlled by changing fuel thickness and ambient pressure. [OVR-12 p.23 · AUTHOR-INTERPRETATION · nominal]
- That separation is postulated to be the mechanism of radiative flame extinction. [OVR-12 p.23 · AUTHOR-INTERPRETATION]
- Expected outcome: fundamentals-based quantitative criteria for flammability in microgravity, where radiative heat transfer dominates because the lack of buoyant or forced flow makes residence times long, possibly leading to a critical fuel thickness, forced velocity or oxygen level that makes a material inherently fire safe. [OVR-12 p.24 · AUTHOR-INTERPRETATION]
- Planned SoFIE investigation "Narrow Channel as a 1-g Flammability Test Method": flame spread rate over a representative thick solid against forced opposed-flow velocity, oxygen and pressure, especially for NASA's SEA in microgravity. [OVR-12 p.24–25 · AUTHOR-INTERPRETATION]
- Opposed-flow extinction limits are to be found by lowering the flow velocity until the flame goes out at a given oxygen concentration and pressure. [OVR-12 p.25 · AUTHOR-INTERPRETATION · nominal]
- The data would show whether one gap height in the Narrow Channel device reproduces these results in normal gravity, or how the gap must change with conditions; the flight tests would compare directly with Narrow Channel tests and the numerical model, so that normal-gravity Narrow Channel tests could predict aspects of microgravity flammability for many candidate materials. [OVR-12 p.25 · AUTHOR-INTERPRETATION]
- Outlook: new initiatives are needed for continuing long-duration solid-fuel testing in microgravity, and a robust ground-based solid-fuel programme should be restarted to refine and extend flight research; since many earlier results came from ground tests, the guide judges this well worth the modest cost. [OVR-12 p.38 · AUTHOR-INTERPRETATION]
- This investment is expected to improve evaluation of material flammability and fire risk in low gravity for the practical materials and flow configurations of future spacecraft. [OVR-12 p.38 · AUTHOR-INTERPRETATION]

### Premixed flames and flame balls
- Earlier premixed-flame work in space was limited to very fuel-lean mixtures in which mass diffusivity dominated thermal diffusivity (very low Lewis number); under those conditions steady flame balls proved possible (Fig. 14), a classical phenomenon unique to microgravity. [OVR-12 p.25 · CITED · nominal]
- SOFBALL, of P. Ronney (USC), ran in the CM on shuttle missions STS-83 and STS-94 in 1997 and again on STS-107 in 2003. [OVR-12 p.25 · CITED · nominal]
- Flame balls, stationary spherical premixed flames, had been predicted to exist when (among other conditions) the bulk mixture's thermal diffusivity is much lower than the mass diffusivity of the limiting reactant, i.e., at low Lewis number, but were thought a purely mathematical exercise. [OVR-12 p.30 · AUTHOR-INTERPRETATION]
- Found: SOFBALL, burning premixed fuel/oxidizer/diluent mixtures in a large chamber, showed conclusively that flame balls exist, producing the weakest flames ever burned (about 1 W), some lasting over 40 minutes until the experiment timed out (e.g., Ronney et al., 1998; not reported by this source: compositions, pressure). [OVR-12 p.30 · CITED]
- This validated earlier theory, improved understanding of reactions near extinction limits and gave clean test beds for numerical models. [OVR-12 p.25 · CITED]
- Premixed flames in microgravity become unstable in gas mixtures of both low and high Lewis number (e.g., Pearlman and Ronney, 1994). [OVR-12 p.33 · CITED]
- Experts agree that premixed flames, the basic unit of combustion, are key to understanding turbulent combustion; fuel-lean burners and engines promise higher thermal efficiency and lower emissions. [OVR-12 p.39 · AUTHOR-INTERPRETATION]
- Real accidental explosions can start from tiny kernels of barely flammable mixtures (Fig. 19), so settling the extinction limits, if they exist, is of paramount importance, with impact from cars and propulsion to fire safety and Type Ia supernovae (not reported by this source: fuel, gravity, oxygen, pressure). [OVR-12 p.39 · AUTHOR-INTERPRETATION]
- Laminar burning velocity, the propagation rate of a flame relative to the gas ahead of it, is called perhaps the most important premixed-combustion parameter, indicating burning intensity and the tendency toward blowout, flashback and combustion instability; the fidelity of computational fluid dynamics (CFD) combustor codes depends on reliable laminar flame speeds. [OVR-12 p.39–40 · AUTHOR-INTERPRETATION]
- Status in the guide: premixed flames are in the current baseline, but the ISS budget funds no specific premixed experiment or insert. [OVR-12 p.39 · AUTHOR-INTERPRETATION]
- Future premixed studies are expected to explore the true limits of reactivity, with uses in terrestrial combustion and in astrophysical models of stellar ignition and explosions (not reported by this source: conditions). [OVR-12 p.39 · AUTHOR-INTERPRETATION]

### Flames near their limits (candles and instabilities)
- Candle flames on Mir (Dietrich et al., 2000): contrary to published speculation, in some tests the flame lasted more than 45 minutes and went out only when its fuel ran out; despite a much lower burning rate (nearly invisible to the eye, needing a very long shutter time to photograph), it burned to a lower ambient oxygen mole fraction than an identical candle would on Earth (not reported by this source: oxygen values, pressure). [OVR-12 p.30 · CITED]
- In normal gravity, flames approaching their flammability limit are often "blown off" by the strong buoyant flow; in microgravity the same near-limit flames often behave very differently. [OVR-12 p.33 · CITED]
- The Mir candle flame, as it used up the ambient oxygen and neared extinction, oscillated in most tests; the oscillations grew until extinction and could last for long periods, over one minute in extreme cases (Dietrich et al., 2000; not reported by this source: oxygen, pressure). [OVR-12 p.30 · CITED; OVR-12 p.33 · CITED]
- These instabilities, hidden in normal gravity by buoyant flow, show what microgravity reveals about flame behaviour; strongly exothermic reactions with nonlinear radiative and diffusive losses of heat and mass give modellers a rich basis to build and validate flame models. [OVR-12 p.33 · AUTHOR-INTERPRETATION]

### Future initiatives envisioned in the guide
- Combustion research is called an active field with direct uses on Earth, in fundamental science and for NASA's exploration goals; the New Initiative programme rests on continued use of CIR inserts plus one more CIR insert, with topics drawn from the data sources the Decadal survey considered. [OVR-12 p.36 · AUTHOR-INTERPRETATION]
- Besides SoFIE and ACME planned for the CIR, new initiatives are envisioned; some, such as Cool Flames in CIR, a NASA Flammability Test Campaign and a Schlieren Diagnostic in MSG, could come sooner as spin-offs needing fewer resources. [OVR-12 p.41 · AUTHOR-INTERPRETATION]
- Other envisioned initiatives: Clean-airLab (carbon sequestration and pollution reduction), NanopropLab (self-assembling propellants and catalysts), CombustionLab (high pressures for engines and supernova formation), and CyberLab (a Fire Database Reference with transport measurements at flame conditions, flame speeds and chemical kinetics). [OVR-12 p.42 · AUTHOR-INTERPRETATION]
- The guide closes that microgravity combustion research has strongly influenced the discipline, that spacecraft fire-safety research directions promise large gains in vehicle safety, and that microgravity remains a critical resource the field wants to keep using. [OVR-12 p.42 · AUTHOR-INTERPRETATION]

## Facilities and their limits

### FLEX hardware in FLX-03
- For the methanol tests, the MDCA was installed in the CIR in the ISS US Module; with the MDCA insert in place the CIR's cylindrical combustion chamber has a free volume of about 95 L; the MDCA deploys droplets of chosen size free-floating by an opposed-needle technique, and two symmetrically positioned hot-wire igniters light them. [FLX-03 p.1 · MEASURED · nominal]
- Diagnostics: a black-and-white back-lit camera imaging the droplet, a UV-sensitive flame camera filtered to see OH* chemiluminescence at 310 nm, and a CCD colour camera with a wider view angle. [FLX-03 p.1 · MEASURED · nominal]
- Before a run, the CIR's Fuel and Oxidizer Management Assembly (FOMA) fills the combustion chamber with the chosen oxygen/nitrogen/carbon-dioxide mixture at a selected pressure; several droplets were typically burned in each fill before the chamber was vented to space vacuum and refilled. [FLX-03 p.2 · MEASURED · nominal]
- Further details of the experiments and operating procedures are in Dietrich et al. (FLX-03 ref. [1]). [FLX-03 p.2 · CITED]

### ISS combustion facilities (OVR-12)
- Combustion Integrated Rack (CIR): designed for experiments on fire prevention, detection and suppression in space; delivered on STS-126 (November 2008) and installed in the U.S. Laboratory. [OVR-12 p.43 · AUTHOR-INTERPRETATION · nominal]
- The CIR offers a 100-litre chamber with eight optical windows, easily reconfigured diagnostics, digital cameras and lighting with large data storage, gas distribution and cleanup, passive vibration isolation and vacuum, for gaseous, liquid and solid combustion tests. [OVR-12 p.43–44 · AUTHOR-INTERPRETATION · nominal]
- Multi-user Droplet Combustion Apparatus (MDCA), a CIR insert, operational at the guide's date: dispenses, deploys and ignites droplets of 1 to 5 mm, free-floating or fiber-supported, in 0 to 3 atm with up to 40% oxygen by volume, the balance a range of inert gases or mixtures. [OVR-12 p.12 · AUTHOR-INTERPRETATION · nominal]
- Microgravity Science Glovebox (MSG): a rack in the U.S. Laboratory operating since July 2002, a workbench-type facility; its enclosed volume is held below ISS cabin pressure, giving two levels of containment for small parts, particulates, fluids and gases to protect the crew. [OVR-12 p.44–45 · AUTHOR-INTERPRETATION · nominal]
- MSG resources: a 255-litre enclosed work space, 1,000 W of dc power (120, 28, +12 and 5 Vdc), 1,000 W of cooling, video and data recording with real-time downlink, ground commanding, ISS vacuum exhaust and vacuum resource systems, and a gaseous nitrogen supply. [OVR-12 p.45 · AUTHOR-INTERPRETATION · nominal]
- The MSG has supported more than 10,000 hours of payload operations in fields from cryogenic fluid management and fluid physics to spacecraft fire safety, combustion, materials science, plant growth, human health and life support, and is called ideal for studying gravity's role and using the ISS as an exploration technology platform. [OVR-12 p.45 · AUTHOR-INTERPRETATION]
- Combustion work in the MSG: SAME in 2007 and 2010, SPICE in 2009, SLICE in 2012, and BASS since 2012. [OVR-12 p.45 · AUTHOR-INTERPRETATION]
- The glovebox is normally limited to ISS air, nominally 21% oxygen by volume at one atmosphere; nitrogen has more recently been used for BASS tests down to 17% oxygen. [OVR-12 p.19 · MEASURED · nominal]
- SoFIE insert (planned): flight hardware under development as a CIR insert, planned for launch in 2019, plus a larger, improved flow duct like the BASS one for some investigations; in its concept (Fig. 10) a recirculating flow gives a region of well-characterized jet flow in which solid samples burn (diagram labels "Axi-symmetric", "flow in", "flow out", "Recirculation tube"). [OVR-12 p.19 · Fig. 10 · AUTHOR-INTERPRETATION · nominal, ~fig; OVR-12 p.44 · AUTHOR-INTERPRETATION · nominal]
- SoFIE chamber (planned): 10 to 40% oxygen by volume at 0.2 to 1.5 atm; SEA relevant to NASA can be studied, and ventilation-range airflows of 0 to 30 cm/s are to be supplied to the flame, with a well-characterized flow field to give models accurate boundary conditions. [OVR-12 p.19 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.21 · AUTHOR-INTERPRETATION · nominal]
- SoFIE fuel choices weigh material, preparation and purity, geometry, external heating, pre-ignition conditions and ignition, with plastics such as PMMA or Delrin the most likely; burning, extinguishing and re-igniting a sample several times would save the slow work of opening the chamber to change specimens. [OVR-12 p.19 · AUTHOR-INTERPRETATION · nominal]
- The SoFIE insert could later serve further investigators selected through NASA Research Announcements (NRA) studying solid-fuel flammability and flame spread for fuels of different geometry over a range of oxygen, pressure, flow and external heat flux (p.38 says "principal investigators", p.44 "private investigators"). [OVR-12 p.38 · AUTHOR-INTERPRETATION · nominal; OVR-12 p.44 · AUTHOR-INTERPRETATION · nominal]
- Drop towers named: NASA Glenn's 2.2-Second Drop Tower (used for ACME preludes) and the Zero Gravity Facility (ZGF), the 5.2-second drop tower. [OVR-12 p.2 · MEASURED; OVR-12 p.27 · MEASURED · nominal]

| Appendix table | MDCA | ACME | SoFIE | MSG | Citation |
|---|---|---|---|---|---|
| Up mass (kg) | 254 | 250 | 250 | 40 | [OVR-12 p.52 · Table Appendix · AUTHOR-INTERPRETATION · nominal]
| Volume (m3) | 0.48 | 0.5 | 0.5 | 0.1 | [OVR-12 p.52 · Table Appendix · AUTHOR-INTERPRETATION · nominal]
| Power (kW) | 0.73 | 0.75 | 0.75 | 0.05 | [OVR-12 p.52 · Table Appendix · AUTHOR-INTERPRETATION · nominal]
| Data volume (GB) | 72 | 72 | 72 | 10 | [OVR-12 p.52 · Table Appendix · AUTHOR-INTERPRETATION · nominal]
| Diagnostics | radiometer; cameras: analog color, low-light-level UV, two HiBMs | radiometers; cameras: two color, low-light-level UV, two HiBMs; photomultiplier tubes; gas chromatograph; ion-current measurement | as for ACME | radiometer; fuel flow; air flow; video camera; digital still camera | [OVR-12 p.52 · Table Appendix · AUTHOR-INTERPRETATION · nominal]
| TSC capable | yes | yes | yes | yes | [OVR-12 p.52 · Table Appendix · AUTHOR-INTERPRETATION · nominal]
| On orbit at the guide's date | yes | no | no | yes | [OVR-12 p.52 · Table Appendix · AUTHOR-INTERPRETATION]
| Experiments supported | FLEX, FLEX-2, FLEX-ICE-GA, FLEX-2J (future) | planned: BRE, CLD Flame, E-FIELD Flames, Flame Design, s-Flame | planned: Flame Spread, GEL, Narrow Channel, SMμRF, MIST | SPICE, SLICE, BASS | [OVR-12 p.52 · Table Appendix · AUTHOR-INTERPRETATION]

- The CIR mini-facilities and inserts are summarized in the guide's appendix table (above). [OVR-12 p.44 · AUTHOR-INTERPRETATION]

### Measuring the gravity level
- The words microgravity, reduced gravity, low gravity, zero gravity and weightlessness are often swapped freely for surroundings in which gravity's body force is far below Earth's; this vagueness raises the question of how to measure such an environment and its disturbances. [OVR-12 p.43 · AUTHOR-INTERPRETATION]
- Disturbances come from crew activity (exercise, push-offs and landings, opening and closing drawers and doors), equipment operation, vehicle docking and undocking, thruster firings and other movements, and must be measured to judge their effect on experiment data. [OVR-12 p.43 · AUTHOR-INTERPRETATION]
- The Space Acceleration Measurement System (SAMS, tri-axis accelerometers) measures the vibratory environment and the Microgravity Acceleration Measurement System (MAMS) the quasi-steady one, MAMS covering very low-frequency disturbances below 0.01 Hz that SAMS cannot detect. [OVR-12 p.43 · AUTHOR-INTERPRETATION · nominal]
- SAMS flew on Mir from 1994 to 1998, continued on 20 shuttle missions and currently flies on the ISS; SAMS and MAMS have measured ISS accelerations since 2001 and currently record disturbances at 21 locations, SAMS covering all three laboratories and MAMS data being mapped to any location with rigid-body assumptions. [OVR-12 p.43 · AUTHOR-INTERPRETATION]
- With the Principal Investigator Microgravity Services (PIMS) project, they support NASA's Physical Sciences Research Program, vehicle loads and dynamics monitoring, and investigators who need to know the acceleration environment. [OVR-12 p.43 · AUTHOR-INTERPRETATION]

### Diagnostics, design lessons and constraints
- Drop-tower and space experiments face severe space, weight, volume, safety and power limits, which make hardware and diagnostics hard but drove technology with uses far beyond microgravity combustion. [OVR-12 p.34 · AUTHOR-INTERPRETATION; OVR-12 p.47 · AUTHOR-INTERPRETATION]
- Diagnostic advances include full-field, quantitative soot volume fraction measured by laser-light extinction (Greenberg et al., 1997a), which enables benchmark soot data, and GRC's Rainbow Schlieren Deflectometry, which gave the first full-field quantitative gas temperatures in microgravity combustion tests (Greenberg et al., 1995). [OVR-12 p.34 · CITED]
- Design lessons: keep experiments as simple as possible, since added complexity raises cost and stretches development past a Ph.D. student's tenure; design them flexible and repairable, since ISS crews operate an experiment for months and can become adept at repairs with clear procedures. [OVR-12 p.47 · AUTHOR-INTERPRETATION]
- Future needs include advanced diagnostics, which require more space and power; crew time is among the most severe limits and should be assumed to stay as scarce as before, so experiments should start, run and finish autonomously with minimal maintenance, and test matrices should need little crew handling of fuel and oxygen supplies, sample and holder changes, or diagnostic adjustment. [OVR-12 p.47 · AUTHOR-INTERPRETATION]
- Flight experiments may be limited by power, crew time or volume; launch or landing scrubs are not unusual, so alternative plans reduce risk; ground-based simulators may be needed to optimize procedures, and many experiments need unique hardware. [OVR-12 p.48 · AUTHOR-INTERPRETATION]
- Records of earlier work: the NASA ISS Program Science Office database (including International Partners' research); a catalogue of past, current and proposed experiments, facilities and results at www.nasa.gov/iss-science; and the Space Life & Physical Sciences Research and Applications Division Task Book at https://taskbook.nasaprs.com/Publication/welcome.cfm. [OVR-12 p.48 · AUTHOR-INTERPRETATION]
- Web pointers: http://www.nasa.gov/iss-science (station science); http://www.nasa.gov/mission_pages/station/research/facilities_category.html (facilities); http://www.nasa.gov/externalflash/ISSRG/index.htm (interactive ISS reference guide). [OVR-12 p.55 · AUTHOR-INTERPRETATION]

## Terms and acronyms
| Term | Meaning | Citation |
|---|---|---|
| ACME | Advanced Combustion via Microgravity Experiments | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| BASS | Burning and Suppression of Solids | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| BRE | Burning Rate Emulator | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| CFD | computational fluid dynamics | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| CIR | Combustion Integrated Rack | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| CLD | Coflow Laminar Diffusion | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| CM | Combustion Module | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| CNES | French Space Agency | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| CSD | Comparative Soot Diagnostics, an earlier low-gravity experiment on smoke from several spacecraft materials | [SMK-01 p.2 · CITED]
| DBP | dibutyl phthalate: the p.7 material list names dibutyl-phthalate deposited on a porous wick, and p.10 reports TEM results for "DBP" | [INFERRED from: SMK-01 p.7; SMK-01 p.10]
| DECLIC | DEvice for the study of Critical LIquids and Crystallization | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| DOP | dioctyl phthalate, used to make monodisperse calibration droplets | [SMK-01 p.5 · MEASURED · nominal]
| E-FIELD | Electric-Field Effects on Laminar Diffusion | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| EAD | the TSI Electrical Aerosol Detector, the first-moment reference in the SAME ground calibration; Fig. 5 labels its axis "EAD Output (first moment)" | [INFERRED from: SMK-01 p.5; SMK-01 p.6]
| ELF | Enclosed Laminar Flames | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| EXPRESS | EXpedite the Processing of Experiments to Space Station | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| FLEX | Flame Extinguishment Experiment | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| GRC | Glenn Research Center | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| HTI, HTI-R | High Temperature Insert; High Temperature Insert (refurbished) | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| ISS | International Space Station | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| LOI | Limiting Oxygen Index (plural LOIs, limiting oxygen indices) | [OVR-12 p.36 · AUTHOR-INTERPRETATION; OVR-12 p.53 · AUTHOR-INTERPRETATION]
| LSP | Laminar Soot Processes | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| MAMS | Microgravity Acceleration Measurement System | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| MDCA | Multi-user Droplet Combustion Apparatus | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| MPASS | Multi-Parameter Aerosol Scattering Sensor | [SMK-01 p.6 · MEASURED · nominal]
| MSG | Microgravity Science Glovebox | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| PIMS | Principal Investigator Microgravity Services | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| PMMA | polymethylmethacrylate | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| POC | Point of Contact | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| SAME | Smoke Aerosol Measurement Experiment | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| SAME-1, SAME-2 | the first SAME flight (2007, ISS Expedition 15) and its reflight (2010, ISS Expedition 24) | [SMK-01 p.1 · MEASURED · nominal; SMK-01 p.2–3 · MEASURED · nominal; SMK-01 p.4 · MEASURED · nominal]
| SAMS | Space Acceleration Measurement System | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| SCWM, SCWO | Super-Critical Water Mixture; Super-Critical Water Oxidation | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| SEA | Space Exploration Atmospheres | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| SLICE | Structure & Liftoff In Combustion Experiment | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| SOFBALL | Structure of Flame Balls at Low Lewis-number | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| SoFIE | Solid Fuel Ignition and Extinction | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| SPICE | Smoke Point In Coflow Experiment | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| TEM | Transmission Electron Microscope | [SMK-01 p.1 · MEASURED · nominal]
| TGDF | Turbulent Gas-jet Diffusion Flame | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| TSC | Telescience Support Center | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| ZGF | Zero Gravity Facility | [OVR-12 p.53 · AUTHOR-INTERPRETATION]
| Inverse flame (coflow burner, planned for Flame Design if inverse spherical flame testing is not allowed) | oxygen/inert mixture injected from a central tube, fuel from a surrounding annulus | [OVR-12 p.17 · AUTHOR-INTERPRETATION]
| Narrow Channel | a 1-g material flammability test that limits buoyant flow by constraining flame height; restricting the plume controls flame size, so the flames in many ways resemble microgravity flames | [OVR-12 p.25 · AUTHOR-INTERPRETATION]
| FLX-03 symbols | x_o∞ ambient oxygen mole fraction; d droplet diameter; K_e measured burning-rate constant (mm²/s); K_c classical quasi-steady theoretical burning-rate constant; d_f flame diameter; d_f/d flame stand-off ratio; d_0 initial droplet diameter and d_e extinction diameter (mm) | [FLX-03 p.2 · Fig. 1a · AUTHOR-INTERPRETATION; FLX-03 p.2 · AUTHOR-INTERPRETATION; FLX-03 p.3–4 · Fig. 3 · AUTHOR-INTERPRETATION]
| SMK-01 symbols | M0, M1, M3 zeroth, first and third moments of the particle-size distribution (number concentration, diameter concentration, volume or mass concentration); D0.5 count (arithmetic) mean diameter = M1/M0; D1.5 diameter of average mass = (M3/M0)^1/3; D_g geometric mean diameter; σ_g geometric standard deviation; N_t total number concentration; Δ least-squares variance relative to the mean (scatter of the MPASS response) | [SMK-01 p.3 · AUTHOR-INTERPRETATION; SMK-01 p.3 · Eq. 3 · MODELED; SMK-01 p.9 · AUTHOR-INTERPRETATION]

## Supersessions
<!-- none: the register links no document of this set to another (no supersedes or version_of entry) -->

## Conflicts
| Quantity | Source A: value · conditions · citation | Source B: value · conditions · citation | Reason for the difference |
|---|---|---|---|
| SLICE status | started and completed its operations in 2012; MSG list gives SLICE in 2012 · OVR-12 p.14, p.45 | "will be carried out" with the SPICE hardware in the MSG, as a precursor to CLD Flame · OVR-12 p.15 | not stated in the sources [OVR-12 p.14 · AUTHOR-INTERPRETATION; OVR-12 p.45 · AUTHOR-INTERPRETATION; OVR-12 p.15 · AUTHOR-INTERPRETATION · nominal]
| CIR combustion chamber volume | about 95 L: free volume of the cylindrical chamber with the MDCA insert installed · FLX-03 p.1 | 100 L: "100-liter chamber" provided by the CIR, no insert stated · OVR-12 p.43–44 | not stated in the sources [FLX-03 p.1 · MEASURED · nominal; OVR-12 p.43–44 · AUTHOR-INTERPRETATION · nominal]
| Initial diameters of the FLEX methanol droplets in FLX-03 | 2 to 4 mm, as the text states it (abstract, test count, conclusions) · FLX-03 p.1, p.2, p.6 | Fig. 3 (1 atm) plots initial diameters from about 1.71 mm to about 4.42 mm; read below 2 mm: about 1.71†, 1.80†, 1.80† and 1.95 mm; above 4 mm: about 4.01, 4.31 and 4.42 mm (read tolerance ±0.1 mm; † partly hidden marker, centre estimated) · FLX-03 p.4 | not stated in the sources [FLX-03 p.1 · MEASURED · nominal; FLX-03 p.2 · MEASURED; FLX-03 p.6 · MEASURED; FLX-03 p.4 · Fig. 3 · MEASURED · ~fig]
| Number of shuttle missions that flew premixed-flame (flame-ball) work | "two separate space shuttle missions" · OVR-12 p.25 | SOFBALL on STS-83 and STS-94 (1997) and again on STS-107 (2003) · OVR-12 p.25 | not stated in the sources [OVR-12 p.25 · CITED · nominal]
| Number of materials tested in SAME-2 | five materials representative of those in spacecraft (Teflon, Kapton, cotton, silicone rubber and Pyrell), heated below ignition · abstract, SMK-01 p.1; the conclusions also speak of the five spacecraft materials tested · SMK-01 p.12 | 6 materials over more than 100 samples: Teflon, Kapton, Pyrell, silicone rubber, cellulose (lamp wick) and dibutyl phthalate on a porous wick · SMK-01 p.7 | not stated in the sources [SMK-01 p.1 · MEASURED · nominal; SMK-01 p.12 · AUTHOR-INTERPRETATION; SMK-01 p.7 · MEASURED]
| How much larger smoke particles are with zero airflow past the heated sample (SAME-2, ISS) | diameter of average mass 30 % to 40 % larger in the zero-flow tests than in the flow tests, for all materials · SMK-01 p.11 | particles 2 to 3 times larger than at the nominal 8 cm/s flow; the size measure is not named · SMK-01 p.12 (Conclusions) | not stated in the sources [SMK-01 p.11 · MEASURED; SMK-01 p.12 · MEASURED; SMK-01 p.1 · MEASURED · nominal]
| Teflon smoke diameters at about 8 cm/s airflow (SAME-2, ISS) | Table 1 baseline runs at 8 cm/s, unaged / aged 720 s: count mean 0.101 / 0.105 µm, diameter of average mass 0.170 / 0.232 µm, D_g 0.081 / 0.070 µm · SMK-01 p.7 | Fig. 8 points at about 8 cm/s (plotted at ~8.1), two per series: arithmetic (count) mean ~0.208 and ~0.148 µm, diameter of average mass ~0.251 and ~0.252 µm, D_g ~0.189 and ~0.113 µm (read ±0.05 µm; sample temperature and ageing time not stated for the figure) · SMK-01 p.9 | not stated in the sources [SMK-01 p.7 · Table 1 · MEASURED; SMK-01 p.9 · Fig. 8 · MEASURED · ~fig; SMK-01 p.1 · MEASURED · nominal; SMK-01 p.4 · MEASURED · nominal]
| Change in the diameters with ageing, Table 1 baseline runs (unaged against aged 720 s) | the ageing results show a substantial increase in the observed diameters, and, as expected, the increase in the count mean diameter is greater than the corresponding increase in the diameter of average mass · SMK-01 p.7 (text) | Table 1, unaged → aged 720 s, count mean diameter and diameter of average mass in µm: Kapton 0.056 → 0.109 and 0.101 → 0.161; Lampwick 0.128 → 0.276 and 0.258 → 0.398; Silicone 0.196 → 0.355 and 0.465 → 0.619; Teflon 0.101 → 0.105 and 0.170 → 0.232; Pyrell 0.204 → 0.359 and 0.384 → 0.539; Teflon geometric mean diameter 0.081 → 0.070 · SMK-01 p.7 · Table 1 | not stated in the sources [SMK-01 p.7 · AUTHOR-INTERPRETATION; SMK-01 p.7 · Table 1 · MEASURED]
| Silicone rubber smoke on the TEM grids | silicone rubber and DBP presented no particles visible in the TEM, presumably because the particles were condensed liquid that evaporated before they could be imaged; Fig. 11 shows images for Teflon (Run 56), Pyrell (Run 63), lampwick (Run 54) and Kapton (Run 62) · SMK-01 p.10 | liquid particles coalescing into larger droplets given as the case for the lampwick, silicone rubber and Kapton smokes, citing Fig. 11 · SMK-01 p.11 | not stated in the sources [SMK-01 p.10 · MEASURED; SMK-01 p.10 · AUTHOR-INTERPRETATION; SMK-01 p.10 · Fig. 11 · MEASURED; SMK-01 p.11 · AUTHOR-INTERPRETATION]

## Open items / gaps
- Not found in the 3 curated documents: measured background aerosol levels on the ISS from the Dust Aerosol measurement Feasibility Test, and numerical particle-size results from the first SAME flight (SAME-1, 2007).
- Not found in the 3 curated documents: per-test data on solid materials (material, oxygen, pressure, flow, nitrogen use and outcome for each BASS or other solid-fuel burn).
- Not found in the 3 curated documents: what the names HiBMs, GEL, SMμRF, FLEX-ICE-GA and FLEX-2J stand for.
- Not found in the 3 curated documents: specifications or performance data of the water-mist portable fire extinguishers sent to the ISS.
- Not found in the 3 curated documents: a numerical limiting oxygen index (LOI) for methanol or heptane droplets in microgravity.
- Not found in the 3 curated documents: smoke-particle sizes measured in normal gravity (1 g) for the SAME materials, for direct comparison with the SAME-2 results.
