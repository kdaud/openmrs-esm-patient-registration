import React from 'react';
import { TextInput } from '../../basic-input/text/text-input.component';
import styles from './../../input.css';

interface AddressInputProps {
  address1Name: string;
  address2Name: string;
  cityVillageName: string;
  stateProvinceName: string;
  countryName: string;
  postalCodeName: string;
}

export const AddressInput: React.FC<AddressInputProps> = ({
  address1Name,
  address2Name,
  cityVillageName,
  stateProvinceName,
  countryName,
  postalCodeName,
}) => {
  return (
    <main>
      <section className={`${styles.fieldRow} ${styles.subFieldRow}`}>
        <TextInput label="Address 1" placeholder="" name={address1Name} showLabel={true} />
        <TextInput label="Address 2" placeholder="" name={address2Name} showLabel={true} />
      </section>
      <section className={`${styles.fieldRow} ${styles.subFieldRow}`}>
        <TextInput label="City/Village" placeholder="" name={cityVillageName} showLabel={true} />
        <TextInput label="State/Province" placeholder="" name={stateProvinceName} showLabel={true} />
      </section>
      <section className={`${styles.fieldRow} ${styles.subFieldRow}`}>
        <TextInput label="Country" placeholder="" name={countryName} showLabel={true} />
        <TextInput label="Postal Code" placeholder="" name={postalCodeName} showLabel={true} />
      </section>
    </main>
  );
};