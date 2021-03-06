import expressionEvaluator from '../../evaluator/expressionEvaluator';

/**
 * Default validator
 */
export default function (propertyMetadata, modelValue, model, validator) {
    if (propertyMetadata.type == 'entity' || propertyMetadata.type == 'array') return undefined;
    if (!propertyMetadata.error) return undefined;
    
    return expressionEvaluator.evaluate(propertyMetadata.error, model);
}