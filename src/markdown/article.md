# Test Article

Additionally, `FieldRow` subtypes have a `useFormatterOnDidBeginEditing` property. When using a `DecimalRow` with a formatter that allows decimal values and conforms to the user's locale (e.g. `DecimalFormatter`), if `useFormatterDuringInput` is `false`, `useFormatterOnDidBeginEditing` must be set to `true` so that the decimal mark in the value being edited matches the decimal mark on the keyboard.

```swift
public protocol FormatterProtocol {
    func getNewPosition(
        forPosition forPosition: UITextPosition,
        inTextInput textInput: UITextInput,
        oldValue: String?, newValue: String?
    ) -> UITextPosition
}
```

Additionally, `FieldRow` subtypes have a `useFormatterOnDidBeginEditing` property. When using a `DecimalRow` with a formatter that allows decimal values and conforms to the user's locale (e.g. `DecimalFormatter`), if `useFormatterDuringInput` is `false`, `useFormatterOnDidBeginEditing` must be set to `true` so that the decimal mark in the value being edited matches the decimal mark on the keyboard.
