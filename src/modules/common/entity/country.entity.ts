import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'country' })
export class CountryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  iso: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', name: 'nice_name', nullable: false })
  niceName: string;

  @Column({ type: 'text', nullable: true })
  iso3: string;

  @Column({ type: 'smallint', name: 'num_code', nullable: true })
  numCode: string;

  @Column({ type: 'integer', name: 'phone_code', nullable: true })
  phoneCode: string;

  @Column({ type: 'text', nullable: true })
  code: string;
}
