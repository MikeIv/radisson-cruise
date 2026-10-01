/**
 * Сезонное отображение трамвайчиков.
 * true — кнопки, пункты меню, карточки и страницы открыты.
 * false — скрыты до следующего сезона, /trams и /trams/schedule ведут на главную.
 *
 * tramCategoryTypeIds — единственный список типов трамвайчиков.
 * simple === true у карточки categories означает покупку билета на борту трамвайчика.
 */
export const tramsSeasonOpen = false

export const tramCategoryTypeIds = [14, 15, 16]

export function isTramTypeId(typeId) {
  return tramCategoryTypeIds.includes(Number(typeId))
}

export function isTramCategory(card) {
  if (!card) {
    return false
  }

  return card.simple === true || isTramTypeId(card.type_id)
}
