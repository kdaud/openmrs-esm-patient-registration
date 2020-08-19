import React from 'react';
import { FormValues } from '../../patient-registration.component';
import { NameInput } from '../../input/custom-input/name/name-input.component';
import { UnidentifiedPatientInput } from '../../input/custom-input/unidentified-patient/unidentified-patient-input.component';
import { SelectInput } from '../../input/basic-input/select/select-input.component';
import { DateInput } from '../../input/basic-input/date/date-input.component';
import { EstimatedAgeInput } from '../../input/custom-input/estimated-age/estimated-age-input.component';
import { CheckboxInput } from '../../input/basic-input/checkbox/checkbox-input.component';
import styles from './../section.css';

interface DemographicsSectionProps {
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
  values: FormValues;
}

export const DemographicsSection: React.FC<DemographicsSectionProps> = ({ setFieldValue, values }) => {
  return (
    <section className={styles.formSection} aria-label="Demographics Section">
      <h5 className={`omrs-type-title-5 ${styles.formSectionTitle}`}>Demographics</h5>
      <section className={styles.fieldGroup}>
        <NameInput givenName="givenName" middleName="middleName" familyName="familyName" labelRequired={true} />
        <UnidentifiedPatientInput name="unidentifiedPatient" setName={setFieldValue} />
      </section>
      <section className={styles.fieldGroup}>
        <SelectInput
          name="gender"
          options={['Male', 'Female', 'Other', 'Unknown']}
          label="Gender"
          showLabel={true}
          labelRequired={true}
        />
      </section>
      <section className={styles.fieldGroup}>
        <DateInput label="Date of Birth" name="birthdate" showLabel={true} labelRequired={true} />
        <CheckboxInput label="Estimated Birthdate" name="birthdateEstimated" />
      </section>
      {values.birthdateEstimated ? (
        <section className={styles.fieldGroup}>
          <EstimatedAgeInput yearsName="yearsEstimated" monthsName="monthsEstimated" setBirthdate={setFieldValue} />
        </section>
      ) : null}
    </section>
  );
};