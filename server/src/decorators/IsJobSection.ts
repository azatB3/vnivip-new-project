import {registerDecorator, ValidationArguments, ValidationOptions} from "class-validator";

export function IsJobSection(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        enum JobSection {
            ADMINISTRATION = 'ADMINISTRATION',
            ACADEMIC_COUNCIL = 'ACADEMIC_COUNCIL',
            COUNCIL_OF_YOUNG_SCIENTISTS = 'COUNCIL_OF_YOUNG_SCIENTISTS',
            DEPARTMENT_OF_VIROLOGY = 'DEPARTMENT_OF_VIROLOGY',
            DEPARTMENT_OF_MOLECULAR_GENETIC_RESEARCH = 'DEPARTMENT_OF_MOLECULAR_GENETIC_RESEARCH',
            DEPARTMENT_OF_PROTOZOOLOGY = 'DEPARTMENT_OF_PROTOZOOLOGY',
            DEPARTMENT_OF_PHARMACOLOGY_AND_TOXICOLOGY = 'DEPARTMENT_OF_PHARMACOLOGY_AND_TOXICOLOGY',
            PRODUCTION_DEPARTMENT = 'PRODUCTION_DEPARTMENT',
        }

        return registerDecorator({
            name: 'IsJobSection',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (value === JobSection.ADMINISTRATION
                        || value === JobSection.ACADEMIC_COUNCIL
                        || value === JobSection.COUNCIL_OF_YOUNG_SCIENTISTS
                        || value === JobSection.DEPARTMENT_OF_VIROLOGY
                        || value === JobSection.DEPARTMENT_OF_MOLECULAR_GENETIC_RESEARCH
                        || value === JobSection.DEPARTMENT_OF_PROTOZOOLOGY
                        || value === JobSection.DEPARTMENT_OF_PHARMACOLOGY_AND_TOXICOLOGY
                        || value === JobSection.PRODUCTION_DEPARTMENT) return true;
                    return false;
                },
            }
        });
    }
}