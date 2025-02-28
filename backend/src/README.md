# Evaluation-Backend


bug lors de la création skill front end = Blocage d’une requête multiorigine (Cross-Origin Request) : la politique « Same Origin » ne permet pas de consulter la ressource distante située sur http://localhost:3101/api/skills/createSkill. Raison : échec de la requête CORS. Code d’état : (null).

bug lors de la suppression coté front = Token manquant 