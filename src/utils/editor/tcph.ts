export function get() {
    // TODO: escape backslashes in strings
    let uir = '../queries/tpch1.uir';
    return queries.length > 0 ? queries : [''];
}

const queries = [
    `const %1342[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1698[72] ="\\012\\000\\000\\000\\007\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\/-)U\\000\\000sf%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1808[28] ="\\004\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000\\007\\000\\000\\000\\010\\000\\000\\000\\011\\000\\000\\000\\012\\000\\000\\000"

const %17586[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %20522[1] =" "

define int32 @_10_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_0, i64 72)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_2, %state, global %1342)
  return 1
}

define int32 @_10_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load int32 %left
  %MaterializationHelper_cpp_229_ = getelementptr int8 %left, i64 4
  %MaterializationHelper_cpp_230_0 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_230_1 = load int32 %right
  %MaterializationHelper_cpp_229_2 = getelementptr int8 %right, i64 4
  %MaterializationHelper_cpp_230_3 = load int32 %MaterializationHelper_cpp_229_2
  %Char1_cpp_85_ = cmpult i32 %MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_1
  %Char1_cpp_85_5 = zext i32 %Char1_cpp_85_
  %Char1_cpp_85_6 = cmpult i32 %MaterializationHelper_cpp_230_1, %MaterializationHelper_cpp_230_
  %Char1_cpp_85_7 = zext i32 %Char1_cpp_85_6
  %Char1_cpp_85_8 = sub i32 %Char1_cpp_85_7, %Char1_cpp_85_5
  %Char1_cpp_85_9 = cmpult i32 %MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_3
  %Char1_cpp_85_10 = zext i32 %Char1_cpp_85_9
  %Char1_cpp_85_11 = cmpult i32 %MaterializationHelper_cpp_230_3, %MaterializationHelper_cpp_230_0
  %Char1_cpp_85_12 = zext i32 %Char1_cpp_85_11
  %Char1_cpp_85_13 = sub i32 %Char1_cpp_85_12, %Char1_cpp_85_10
  %SortTranslator_cpp_103_ = cmpeq i32 %Char1_cpp_85_8, 0
  %SortTranslator_cpp_103_14 = SExt i32 %SortTranslator_cpp_103_
  %SortTranslator_cpp_103_15 = and i32 %Char1_cpp_85_13, %SortTranslator_cpp_103_14
  %SortTranslator_cpp_103_16 = or i32 %Char1_cpp_85_8, %SortTranslator_cpp_103_15
  return %SortTranslator_cpp_103_16
}

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %1120)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %1241, int64 %1255)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %1476, int8* %1490, int8* %1504)

define int32 @_10_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %1698, i64 1, global %1808, i32 7)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %1955, int8* %1969, int64 %1983, object umbra::Relation::RestrictionInfo* %1997, int64 %2011, int32* %2025, int32 %2039)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %2125, int32 %2139, int32 %2153, int32 %2167, int32 %2181)

define int32 @_10_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 72)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %2363, int64 %2377)

define int32 @_10_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %2533)

define int32 @_10_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2665, int32 %2679)

define int32 @_10_groupby_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_310_, 2451059
  condbr %Date_cpp_57_ %then %contScan

then:
  %RelationMappedLogic_cpp_303_6 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3145728
  %RelationMappedLogic_cpp_310_7 = load int32 %RelationMappedLogic_cpp_303_6, %localTid
  %RelationMappedLogic_cpp_303_8 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3407872
  %RelationMappedLogic_cpp_310_9 = load int32 %RelationMappedLogic_cpp_303_8, %localTid
  %RelationMappedLogic_cpp_303_10 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1048576
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_10, %localTid
  %RelationMappedLogic_cpp_303_11 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_309_12 = load int64 %RelationMappedLogic_cpp_303_11, %localTid
  %RelationMappedLogic_cpp_303_13 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2097152
  %RelationMappedLogic_cpp_309_14 = load int64 %RelationMappedLogic_cpp_303_13, %localTid
  br %cont

cont:
  %Numeric_cpp_763_ = checkedssub i64 100, %RelationMappedLogic_cpp_309_14 %cont15 %overflow

cont15:
  %BigNumeric_cpp_863_ = ashr i64 %RelationMappedLogic_cpp_309_12, 63
  %BigNumeric_cpp_863_16 = builddata128 d128 %RelationMappedLogic_cpp_309_12 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_17 = ashr i64 %Numeric_cpp_763_, 63
  %BigNumeric_cpp_863_18 = builddata128 d128 %Numeric_cpp_763_ %BigNumeric_cpp_863_17
  %Numeric_cpp_698_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_16, %BigNumeric_cpp_863_18)
  br %cont19

cont19:
  %Numeric_cpp_763_21 = checkedssub i64 100, %RelationMappedLogic_cpp_309_14 %cont20 %overflow

cont20:
  %BigNumeric_cpp_863_22 = ashr i64 %RelationMappedLogic_cpp_309_12, 63
  %BigNumeric_cpp_863_23 = builddata128 d128 %RelationMappedLogic_cpp_309_12 %BigNumeric_cpp_863_22
  %BigNumeric_cpp_863_24 = ashr i64 %Numeric_cpp_763_21, 63
  %BigNumeric_cpp_863_25 = builddata128 d128 %Numeric_cpp_763_21 %BigNumeric_cpp_863_24
  %Numeric_cpp_698_26 = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_23, %BigNumeric_cpp_863_25)
  %RelationMappedLogic_cpp_303_27 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2621440
  %RelationMappedLogic_cpp_309_28 = load int64 %RelationMappedLogic_cpp_303_27, %localTid
  br %cont29

cont29:
  %Numeric_cpp_600_ = checkedsadd i64 100, %RelationMappedLogic_cpp_309_28 %cont30 %overflow

cont30:
  %BigNumeric_cpp_863_31 = ashr i64 %Numeric_cpp_600_, 63
  %BigNumeric_cpp_863_32 = builddata128 d128 %Numeric_cpp_600_ %BigNumeric_cpp_863_31
  %BigNumeric_cpp_630_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%Numeric_cpp_698_26, %BigNumeric_cpp_863_32)
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_310_7
  %Hash_cpp_265_33 = zext i64 %RelationMappedLogic_cpp_310_9
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_33, 32
  %Hash_cpp_269_34 = or i64 %Hash_cpp_265_, %Hash_cpp_269_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_269_34
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_269_34
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_35 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_36 = mul i64 %Hash_cpp_380_35, 2685821657736338717
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_380_36, 1023
  %PreaggregationLogic_cpp_20_37 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_37, i32 0, i32 0
  %PreaggregationLogic_cpp_25_38 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_380_36
  condbr %PreaggregationLogic_cpp_25_38 %then39 %else

then39:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_380_36)
  store int32 %RelationMappedLogic_cpp_310_7, %PreaggregationLogic_cpp_29_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 4
  store int32 %RelationMappedLogic_cpp_310_9, %MaterializationHelper_cpp_983_
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 8
  store int64 %RelationMappedLogic_cpp_309_, %GroupByTranslator_cpp_207_
  %MaterializationHelper_cpp_983_40 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 8
  store int64 %RelationMappedLogic_cpp_309_12, %MaterializationHelper_cpp_983_40
  %MaterializationHelper_cpp_983_41 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 16
  store data128 %Numeric_cpp_698_, %MaterializationHelper_cpp_983_41
  %MaterializationHelper_cpp_983_42 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 32
  store data128 %BigNumeric_cpp_630_, %MaterializationHelper_cpp_983_42
  %MaterializationHelper_cpp_983_43 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 48
  store int64 i64 1, %MaterializationHelper_cpp_983_43
  %MaterializationHelper_cpp_983_44 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 56
  store int64 %RelationMappedLogic_cpp_309_14, %MaterializationHelper_cpp_983_44
  br %cont70

else:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_37, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_36_
  %MaterializationHelper_cpp_876_45 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 4
  %MaterializationHelper_cpp_876_46 = load int32 %MaterializationHelper_cpp_876_45
  %Char1_cpp_75_ = cmpeq i32 %RelationMappedLogic_cpp_310_7, %MaterializationHelper_cpp_876_
  %Char1_cpp_75_47 = cmpeq i32 %RelationMappedLogic_cpp_310_9, %MaterializationHelper_cpp_876_46
  %ConsumerContext_cpp_407_ = and bool %Char1_cpp_75_, %Char1_cpp_75_47
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %then39 %else48

else48:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 8
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_217_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_, %RelationMappedLogic_cpp_309_ %cont49 %overflow

cont49:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_217_
  %MaterializationHelper_cpp_977_50 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 8
  %MaterializationHelper_cpp_977_51 = load int64 %MaterializationHelper_cpp_977_50
  %Numeric_cpp_777_53 = checkedsadd i64 %MaterializationHelper_cpp_977_51, %RelationMappedLogic_cpp_309_12 %cont52 %overflow

cont52:
  %MaterializationHelper_cpp_983_54 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 8
  store int64 %Numeric_cpp_777_53, %MaterializationHelper_cpp_983_54
  %MaterializationHelper_cpp_977_55 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 16
  %MaterializationHelper_cpp_977_56 = load data128 %MaterializationHelper_cpp_977_55
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_56, %Numeric_cpp_698_)
  %MaterializationHelper_cpp_983_57 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 16
  store data128 %BigNumeric_cpp_688_, %MaterializationHelper_cpp_983_57
  %MaterializationHelper_cpp_977_58 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 32
  %MaterializationHelper_cpp_977_59 = load data128 %MaterializationHelper_cpp_977_58
  %BigNumeric_cpp_688_60 = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_59, %BigNumeric_cpp_630_)
  %MaterializationHelper_cpp_983_61 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 32
  store data128 %BigNumeric_cpp_688_60, %MaterializationHelper_cpp_983_61
  %MaterializationHelper_cpp_977_62 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 48
  %MaterializationHelper_cpp_977_63 = load int64 %MaterializationHelper_cpp_977_62
  %Aggregate_cpp_166_ = add i64 %MaterializationHelper_cpp_977_63, 1
  %MaterializationHelper_cpp_983_64 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 48
  store int64 %Aggregate_cpp_166_, %MaterializationHelper_cpp_983_64
  %MaterializationHelper_cpp_977_65 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 56
  %MaterializationHelper_cpp_977_66 = load int64 %MaterializationHelper_cpp_977_65
  %Numeric_cpp_777_68 = checkedsadd i64 %MaterializationHelper_cpp_977_66, %RelationMappedLogic_cpp_309_14 %cont67 %overflow

cont67:
  %MaterializationHelper_cpp_983_69 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 56
  store int64 %Numeric_cpp_777_68, %MaterializationHelper_cpp_983_69
  br %cont70

cont70:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

declare data128 @_ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_(data128 %4891, data128 %4905)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %6093, int64 %6107)

declare data128 @_ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_(data128 %7636, data128 %7650)

define int32 @_10_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %8775)

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %8857, int8* %8871, int64 %8885)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %8976, int8* %8990)

define int32 @_10_groupby_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_112_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %GroupByTranslator_cpp_112_
  %MaterializationHelper_cpp_876_2 = getelementptr int8 %GroupByTranslator_cpp_112_, i64 4
  %MaterializationHelper_cpp_876_3 = load int32 %MaterializationHelper_cpp_876_2
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_4 = load int32 %GroupByTranslator_cpp_113_
  %MaterializationHelper_cpp_876_5 = getelementptr int8 %GroupByTranslator_cpp_113_, i64 4
  %MaterializationHelper_cpp_876_6 = load int32 %MaterializationHelper_cpp_876_5
  %Char1_cpp_75_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_4
  %Char1_cpp_75_7 = cmpeq i32 %MaterializationHelper_cpp_876_3, %MaterializationHelper_cpp_876_6
  %ConsumerContext_cpp_407_ = and bool %Char1_cpp_75_, %Char1_cpp_75_7
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %noMatch %else

else:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 24
  %GroupByTranslator_cpp_121_8 = getelementptr int8 %chainEntry, i64 24
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_121_8
  %MaterializationHelper_cpp_977_9 = load int64 %GroupByTranslator_cpp_121_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_977_9 %cont %overflow

cont:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_121_8
  %MaterializationHelper_cpp_977_10 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 8
  %MaterializationHelper_cpp_977_11 = load int64 %MaterializationHelper_cpp_977_10
  %MaterializationHelper_cpp_977_12 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 8
  %MaterializationHelper_cpp_977_13 = load int64 %MaterializationHelper_cpp_977_12
  %Numeric_cpp_777_15 = checkedsadd i64 %MaterializationHelper_cpp_977_11, %MaterializationHelper_cpp_977_13 %cont14 %overflow

cont14:
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 8
  store int64 %Numeric_cpp_777_15, %MaterializationHelper_cpp_983_
  %MaterializationHelper_cpp_977_16 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 16
  %MaterializationHelper_cpp_977_17 = load data128 %MaterializationHelper_cpp_977_16
  %MaterializationHelper_cpp_977_18 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 16
  %MaterializationHelper_cpp_977_19 = load data128 %MaterializationHelper_cpp_977_18
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_17, %MaterializationHelper_cpp_977_19)
  %MaterializationHelper_cpp_983_20 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 16
  store data128 %BigNumeric_cpp_688_, %MaterializationHelper_cpp_983_20
  %MaterializationHelper_cpp_977_21 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 32
  %MaterializationHelper_cpp_977_22 = load data128 %MaterializationHelper_cpp_977_21
  %MaterializationHelper_cpp_977_23 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 32
  %MaterializationHelper_cpp_977_24 = load data128 %MaterializationHelper_cpp_977_23
  %BigNumeric_cpp_688_25 = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_22, %MaterializationHelper_cpp_977_24)
  %MaterializationHelper_cpp_983_26 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 32
  store data128 %BigNumeric_cpp_688_25, %MaterializationHelper_cpp_983_26
  %MaterializationHelper_cpp_977_27 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 48
  %MaterializationHelper_cpp_977_28 = load int64 %MaterializationHelper_cpp_977_27
  %MaterializationHelper_cpp_977_29 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 48
  %MaterializationHelper_cpp_977_30 = load int64 %MaterializationHelper_cpp_977_29
  %Aggregate_cpp_175_ = add i64 %MaterializationHelper_cpp_977_28, %MaterializationHelper_cpp_977_30
  %MaterializationHelper_cpp_983_31 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 48
  store int64 %Aggregate_cpp_175_, %MaterializationHelper_cpp_983_31
  %MaterializationHelper_cpp_977_32 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 56
  %MaterializationHelper_cpp_977_33 = load int64 %MaterializationHelper_cpp_977_32
  %MaterializationHelper_cpp_977_34 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 56
  %MaterializationHelper_cpp_977_35 = load int64 %MaterializationHelper_cpp_977_34
  %Numeric_cpp_777_37 = checkedsadd i64 %MaterializationHelper_cpp_977_33, %MaterializationHelper_cpp_977_35 %cont36 %overflow

cont36:
  %MaterializationHelper_cpp_983_38 = getelementptr int8 %GroupByTranslator_cpp_121_8, i64 56
  store int64 %Numeric_cpp_777_37, %MaterializationHelper_cpp_983_38
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_39 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_39, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 88
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 8

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %9316)

define int32 @_10_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %13226)

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %13358, int8* %13372)

define int32 @_10_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %1342)
  return 0
}

define int32 @_10_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %13738)

define int32 @_10_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_140_
  %MaterializationHelper_cpp_876_1 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 4
  %MaterializationHelper_cpp_876_2 = load int32 %MaterializationHelper_cpp_876_1
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 8
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_248_
  %MaterializationHelper_cpp_977_3 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 8
  %MaterializationHelper_cpp_977_4 = load int64 %MaterializationHelper_cpp_977_3
  %MaterializationHelper_cpp_977_5 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 16
  %MaterializationHelper_cpp_977_6 = load data128 %MaterializationHelper_cpp_977_5
  %MaterializationHelper_cpp_977_7 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 32
  %MaterializationHelper_cpp_977_8 = load data128 %MaterializationHelper_cpp_977_7
  %MaterializationHelper_cpp_876_9 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 48
  %MaterializationHelper_cpp_876_10 = load int64 %MaterializationHelper_cpp_876_9
  %MaterializationHelper_cpp_977_11 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 56
  %MaterializationHelper_cpp_977_12 = load int64 %MaterializationHelper_cpp_977_11
  %BigNumeric_cpp_863_ = ashr i64 %MaterializationHelper_cpp_977_, 63
  %BigNumeric_cpp_863_13 = builddata128 d128 %MaterializationHelper_cpp_977_ %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_14 = ashr i64 %MaterializationHelper_cpp_876_10, 63
  %BigNumeric_cpp_863_15 = builddata128 d128 %MaterializationHelper_cpp_876_10 %BigNumeric_cpp_863_14
  %Numeric_cpp_627_ = call d128 _ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j (%BigNumeric_cpp_863_13, %BigNumeric_cpp_863_15, i32 19)
  %BigNumeric_cpp_863_16 = ashr i64 %MaterializationHelper_cpp_977_4, 63
  %BigNumeric_cpp_863_17 = builddata128 d128 %MaterializationHelper_cpp_977_4 %BigNumeric_cpp_863_16
  %BigNumeric_cpp_863_18 = ashr i64 %MaterializationHelper_cpp_876_10, 63
  %BigNumeric_cpp_863_19 = builddata128 d128 %MaterializationHelper_cpp_876_10 %BigNumeric_cpp_863_18
  %Numeric_cpp_627_20 = call d128 _ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j (%BigNumeric_cpp_863_17, %BigNumeric_cpp_863_19, i32 19)
  %BigNumeric_cpp_863_21 = ashr i64 %MaterializationHelper_cpp_977_12, 63
  %BigNumeric_cpp_863_22 = builddata128 d128 %MaterializationHelper_cpp_977_12 %BigNumeric_cpp_863_21
  %BigNumeric_cpp_863_23 = ashr i64 %MaterializationHelper_cpp_876_10, 63
  %BigNumeric_cpp_863_24 = builddata128 d128 %MaterializationHelper_cpp_876_10 %BigNumeric_cpp_863_23
  %Numeric_cpp_627_25 = call d128 _ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j (%BigNumeric_cpp_863_22, %BigNumeric_cpp_863_24, i32 19)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_310_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 112)
  store int32 %MaterializationHelper_cpp_876_, %SortTranslator_cpp_310_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %SortTranslator_cpp_310_, i64 4
  store int32 %MaterializationHelper_cpp_876_2, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_310_, i64 8
  store data128 %MaterializationHelper_cpp_977_6, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_26 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  store data128 %MaterializationHelper_cpp_977_8, %MaterializationHelper_cpp_150_26
  %MaterializationHelper_cpp_150_27 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store data128 %Numeric_cpp_627_, %MaterializationHelper_cpp_150_27
  %MaterializationHelper_cpp_150_28 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 48
  store data128 %Numeric_cpp_627_20, %MaterializationHelper_cpp_150_28
  %MaterializationHelper_cpp_150_29 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 64
  store data128 %Numeric_cpp_627_25, %MaterializationHelper_cpp_150_29
  %MaterializationHelper_cpp_150_30 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 80
  store int64 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_150_30
  %MaterializationHelper_cpp_150_31 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 88
  store int64 %MaterializationHelper_cpp_977_4, %MaterializationHelper_cpp_150_31
  %MaterializationHelper_cpp_150_32 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 96
  store int64 %MaterializationHelper_cpp_876_10, %MaterializationHelper_cpp_150_32
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 12
}

declare data128 @_ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j(data128 %15297, data128 %15311, int32 %15325)

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %15828, int64 %15842)

define int32 @_10_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %17124, int32 %17138)

define int32 @_10_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 15
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %17332)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %17414, object umbra::SortOperator* %17428)

define int32 @_10_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %17586)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 24808
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 17)
  return 16
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %17554)

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %17670, int8* %17684, int8* %17698)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %17839, object umbra::SortOperator* %17853)

define int32 @_10_sort_groupby_extra10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %17586, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 17
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %18093, int8* %18107, int8* %18121, int32 %18135)

define int32 @_10_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 18, i32 19, i32 20)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 21)
  return 22
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %18394, object umbra::SortOperator* %18408, bool %18422)

define int32 @_10_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_326_ = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %SortTranslator_cpp_326_0 = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_329_ = cmpne ptr %SortTranslator_cpp_326_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_329_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%SortTranslator_cpp_326_, %body %SortTranslator_cpp_341_, %cont]
  %CodeGen_hpp_1103_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load int32 %CodeGen_hpp_1103_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %CodeGen_hpp_1103_, i64 4
  %MaterializationHelper_cpp_230_1 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 8
  %MaterializationHelper_cpp_230_2 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_3 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_4 = load data128 %MaterializationHelper_cpp_229_3
  %MaterializationHelper_cpp_229_5 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_6 = load data128 %MaterializationHelper_cpp_229_5
  %MaterializationHelper_cpp_229_7 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 48
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_229_7
  %MaterializationHelper_cpp_229_9 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 64
  %MaterializationHelper_cpp_230_10 = load data128 %MaterializationHelper_cpp_229_9
  %MaterializationHelper_cpp_229_11 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 80
  %MaterializationHelper_cpp_230_12 = load int64 %MaterializationHelper_cpp_229_11
  %MaterializationHelper_cpp_229_13 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 88
  %MaterializationHelper_cpp_230_14 = load int64 %MaterializationHelper_cpp_229_13
  %MaterializationHelper_cpp_229_15 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 96
  %MaterializationHelper_cpp_230_16 = load int64 %MaterializationHelper_cpp_229_15
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then %else

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont

else:
  br %cont

cont:
  call void _ZN5umbra12Char1Runtime6outputERNS_12OutputTargetENS_4TypeEj (ptr 0x55a1d1d8c7c0, i64 648518346341351424, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra12Char1Runtime6outputERNS_12OutputTargetENS_4TypeEj (ptr 0x55a1d1d8c7c0, i64 648518346341351424, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x55a1d1d8c7c0, i64 432345564428894720, %MaterializationHelper_cpp_230_12)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x55a1d1d8c7c0, i64 432345564428894720, %MaterializationHelper_cpp_230_14)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158684926976, %MaterializationHelper_cpp_230_2)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158903031296, %MaterializationHelper_cpp_230_4)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158785594624, %MaterializationHelper_cpp_230_6)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158785594624, %MaterializationHelper_cpp_230_8)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55a1d1d8c7c0, i64 504403158785594624, %MaterializationHelper_cpp_230_10)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %20522, i32 1)
  call void _ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x55a1d1d8c7c0, i64 360287970189639680, %MaterializationHelper_cpp_230_16)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 21
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %20313, int8 %20327)

declare void @_ZN5umbra12Char1Runtime6outputERNS_12OutputTargetENS_4TypeEj(object umbra::OutputTarget* %20454, int64 %20468, int32 %20482)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %20544, int32 %20558)

declare void @_ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %20656, int64 %20670, int64 %20684)

declare void @_ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %20808, int64 %20822, data128 %20836)

declare void @_ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %21132, int64 %21146, int64 %21160)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %21243)

define int32 @_10_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_10_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 24808
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_1)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %21665)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %21748)
`,
    `const %3627[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000d\\000\\000\\000\\000\\000\\000\\000\\000"

const %3984[72] ="\\001\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\031\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\0-0U\\000\\000\\006\\000\\000\\000EUROPE\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %4094[8] ="\\000\\000\\000\\000\\001\\000\\000\\000"

const %8390[0] =""

const %8429[12] ="\\000\\000\\000\\000\\001\\000\\000\\000\\002\\000\\000\\000"

const %12830[28] ="\\000\\000\\000\\000\\001\\000\\000\\000\\002\\000\\000\\000\\003\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000"

const %19207[72] ="\\005\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\004\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\0-0U\\000\\000\\017\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %19318[16] ="\\000\\000\\000\\000\\002\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000"

const %21673[21] ="\\000\\000\\000\\000\\000\\000\\000\\000\\005\\000\\000\\000\\005\\000\\000\\000BRASS"

const %27127[8] ="\\000\\000\\000\\000\\002\\000\\000\\000"

const %30898[8] ="\\000\\000\\000\\000\\003\\000\\000\\000"

const %34659[12] ="\\000\\000\\000\\000\\001\\000\\000\\000\\003\\000\\000\\000"

const %50824[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %53561[1] =" "

define int32 @_9_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_1, i32 0)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_3, i32 0)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 608
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 704
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 800
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_7, i32 0)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 848
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_8)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 944
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_9, i32 0)
  %CompilationContext_cpp_214_10 = getelementptr int8 %state, i64 992
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_10)
  %CompilationContext_cpp_214_11 = getelementptr int8 %state, i64 1088
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_11, i32 0)
  %CompilationContext_cpp_214_12 = getelementptr int8 %state, i64 1136
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_12, i64 12)
  %CompilationContext_cpp_214_14 = getelementptr int8 %state, i64 25728
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_14, i32 0)
  %CompilationContext_cpp_214_15 = getelementptr int8 %state, i64 25776
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_15)
  %CompilationContext_cpp_214_16 = getelementptr int8 %state, i64 25872
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_16, i32 0)
  %CompilationContext_cpp_214_17 = getelementptr int8 %state, i64 25920
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_17, i32 0)
  %CompilationContext_cpp_214_18 = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_18, %state, global %3627)
  return 1
}

define int32 @_9_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_229_ = getelementptr int8 %left, i64 16
  %MaterializationHelper_cpp_230_0 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_1 = getelementptr int8 %left, i64 32
  %MaterializationHelper_cpp_230_2 = load int64 %MaterializationHelper_cpp_229_1
  %MaterializationHelper_cpp_229_3 = getelementptr int8 %left, i64 40
  %MaterializationHelper_cpp_230_4 = load int32 %MaterializationHelper_cpp_229_3
  %MaterializationHelper_cpp_230_5 = load data128 %right
  %MaterializationHelper_cpp_229_6 = getelementptr int8 %right, i64 16
  %MaterializationHelper_cpp_230_7 = load data128 %MaterializationHelper_cpp_229_6
  %MaterializationHelper_cpp_229_8 = getelementptr int8 %right, i64 32
  %MaterializationHelper_cpp_230_9 = load int64 %MaterializationHelper_cpp_229_8
  %MaterializationHelper_cpp_229_10 = getelementptr int8 %right, i64 40
  %MaterializationHelper_cpp_230_11 = load int32 %MaterializationHelper_cpp_229_10
  %Numeric_cpp_323_ = cmpslt i64 %MaterializationHelper_cpp_230_9, %MaterializationHelper_cpp_230_2
  %Numeric_cpp_323_13 = zext i32 %Numeric_cpp_323_
  %Numeric_cpp_323_14 = cmpslt i64 %MaterializationHelper_cpp_230_2, %MaterializationHelper_cpp_230_9
  %Numeric_cpp_323_15 = zext i32 %Numeric_cpp_323_14
  %Numeric_cpp_323_16 = sub i32 %Numeric_cpp_323_15, %Numeric_cpp_323_13
  %SortTranslator_cpp_72_ = cmpne i32 %Numeric_cpp_323_16, 0
  condbr %SortTranslator_cpp_72_ %then %cont

then:
  return %Numeric_cpp_323_16

cont:
  %Char_cpp_136_ = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_5)
  %SortTranslator_cpp_72_17 = cmpne i32 %Char_cpp_136_, 0
  condbr %SortTranslator_cpp_72_17 %then18 %cont19

then18:
  return %Char_cpp_136_

cont19:
  %Char_cpp_136_20 = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_7)
  %Integer_cpp_93_ = cmpslt i32 %MaterializationHelper_cpp_230_4, %MaterializationHelper_cpp_230_11
  %Integer_cpp_93_21 = zext i32 %Integer_cpp_93_
  %Integer_cpp_93_22 = cmpslt i32 %MaterializationHelper_cpp_230_11, %MaterializationHelper_cpp_230_4
  %Integer_cpp_93_23 = zext i32 %Integer_cpp_93_22
  %Integer_cpp_93_24 = sub i32 %Integer_cpp_93_23, %Integer_cpp_93_21
  %SortTranslator_cpp_103_ = cmpeq i32 %Char_cpp_136_20, 0
  %SortTranslator_cpp_103_25 = SExt i32 %SortTranslator_cpp_103_
  %SortTranslator_cpp_103_26 = and i32 %Integer_cpp_93_24, %SortTranslator_cpp_103_25
  %SortTranslator_cpp_103_27 = or i32 %Char_cpp_136_20, %SortTranslator_cpp_103_26
  return %SortTranslator_cpp_103_27
}

declare int32 @_ZN5umbra11CharRuntime7compareENS_9data128_tES1_(data128 %1292, data128 %1306)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %1849)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %2049, int32 %2063)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %3137, int64 %3151)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %3762, int8* %3776, int8* %3790)

define int32 @_9_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 7, global %3984, i64 1, global %4094, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %4221, int8* %4235, int64 %4249, object umbra::Relation::RestrictionInfo* %4263, int64 %4277, int32* %4291, int32 %4305)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %4391, int32 %4405, int32 %4419, int32 %4433, int32 %4447)

define int32 @_9_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %4605)

define int32 @_9_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %4757)

define int32 @_9_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %4889, int32 %4903)

define int32 @_9_join_tablescan_region(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 36
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, 5715724631927685126
  condbr %Char_cpp_114_ %then %cont11

then:
  %Char_cpp_115_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_9 = cmpeq i64 %Char_cpp_115_, 17744
  condbr %Char_cpp_115_9 %then10 %else

then10:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {5715724631927685126,17744})
  br %cont

cont:
  %6823 = phi bool [bool true, %then10 %Char_cpp_118_, %else]
  br %cont11

cont11:
  %6866 = phi bool [%6823, %cont bool false, %loopTuples]
  condbr %6866 %then12 %contScan

then12:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5
}

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %6749, data128 %6763)

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %7239, int64 %7253, int64 %7267)

define int32 @_9_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %7728)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %7810, int8* %7824, int32 %7838)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %7878, int32 %7892)

define int32 @_9_join_tablescan_region_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %8136, object umbra::ChainingHashTable::Collector* %8150)

define int32 @_9_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 6, global %8390, i64 0, global %8429, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %8276)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %8308)

define int32 @_9_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_nation(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 40
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_9 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_9, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_10 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_11 = add i64 %RelationMappedLogic_cpp_320_10, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_12 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_11, %RelationMappedLogic_cpp_320_10
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_12
  %Hash_cpp_265_13 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_375_14 = crc32 i64 5961697176435608501, %Hash_cpp_265_13
  %Hash_cpp_376_15 = crc32 i64 2231409791114444147, %Hash_cpp_265_13
  %Hash_cpp_380_16 = rotr i64 %Hash_cpp_376_15, 32
  %Hash_cpp_380_17 = xor i64 %Hash_cpp_375_14, %Hash_cpp_380_16
  %Hash_cpp_380_18 = mul i64 %Hash_cpp_380_17, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_18, i64 20)
  store int32 %RelationMappedLogic_cpp_308_8, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 12
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %10483, int64 %10497)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %11736, data128 %11750)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %11851, int8* %11865)

define int32 @_9_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

define int32 @_9_join_join_tablescan_nation_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 15
}

define int32 @_9_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 1, global %8390, i64 0, global %12830, i32 7)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

define int32 @_9_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_supplier(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 80
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_10 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_11 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2621440
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_11, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_12 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_13 = add i64 %RelationMappedLogic_cpp_320_12, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_14 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_13, %RelationMappedLogic_cpp_320_12
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_14
  %RelationMappedLogic_cpp_303_15 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_15, %localTid
  %RelationMappedLogic_cpp_303_16 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4194304
  %RelationMappedLogic_cpp_319_17 = getelementptr data128 %RelationMappedLogic_cpp_303_16, %localTid
  %RelationMappedLogic_cpp_320_18 = load int64 %RelationMappedLogic_cpp_319_17
  %RelationMappedLogic_cpp_320_19 = load int64 %RelationMappedLogic_cpp_319_17, i32 1
  %RelationMappedLogic_cpp_321_20 = trunc i32 %RelationMappedLogic_cpp_320_18
  %RelationMappedLogic_cpp_322_21 = cmpult i32 12, %RelationMappedLogic_cpp_321_20
  %RelationMappedLogic_cpp_322_22 = add i64 %RelationMappedLogic_cpp_320_19, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_23 = select i64 %RelationMappedLogic_cpp_322_21, %RelationMappedLogic_cpp_322_22, %RelationMappedLogic_cpp_320_19
  %RelationMappedLogic_cpp_324_24 = builddata128 d128 %RelationMappedLogic_cpp_320_18 %RelationMappedLogic_cpp_322_23
  %RelationMappedLogic_cpp_303_25 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_26 = getelementptr data128 %RelationMappedLogic_cpp_303_25, %localTid
  %RelationMappedLogic_cpp_320_27 = load int64 %RelationMappedLogic_cpp_319_26
  %RelationMappedLogic_cpp_320_28 = load int64 %RelationMappedLogic_cpp_319_26, i32 1
  %RelationMappedLogic_cpp_321_29 = trunc i32 %RelationMappedLogic_cpp_320_27
  %RelationMappedLogic_cpp_322_30 = cmpult i32 12, %RelationMappedLogic_cpp_321_29
  %RelationMappedLogic_cpp_322_31 = add i64 %RelationMappedLogic_cpp_320_28, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_32 = select i64 %RelationMappedLogic_cpp_322_30, %RelationMappedLogic_cpp_322_31, %RelationMappedLogic_cpp_320_28
  %RelationMappedLogic_cpp_324_33 = builddata128 d128 %RelationMappedLogic_cpp_320_27 %RelationMappedLogic_cpp_322_32
  %RelationMappedLogic_cpp_303_34 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_319_35 = getelementptr data128 %RelationMappedLogic_cpp_303_34, %localTid
  %RelationMappedLogic_cpp_320_36 = load int64 %RelationMappedLogic_cpp_319_35
  %RelationMappedLogic_cpp_320_37 = load int64 %RelationMappedLogic_cpp_319_35, i32 1
  %RelationMappedLogic_cpp_321_38 = trunc i32 %RelationMappedLogic_cpp_320_36
  %RelationMappedLogic_cpp_322_39 = cmpult i32 12, %RelationMappedLogic_cpp_321_38
  %RelationMappedLogic_cpp_322_40 = add i64 %RelationMappedLogic_cpp_320_37, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_41 = select i64 %RelationMappedLogic_cpp_322_39, %RelationMappedLogic_cpp_322_40, %RelationMappedLogic_cpp_320_37
  %RelationMappedLogic_cpp_324_42 = builddata128 d128 %RelationMappedLogic_cpp_320_36 %RelationMappedLogic_cpp_322_41
  %Hash_cpp_265_43 = zext i64 %RelationMappedLogic_cpp_308_10
  %Hash_cpp_375_44 = crc32 i64 5961697176435608501, %Hash_cpp_265_43
  %Hash_cpp_376_45 = crc32 i64 2231409791114444147, %Hash_cpp_265_43
  %Hash_cpp_380_46 = rotr i64 %Hash_cpp_376_45, 32
  %Hash_cpp_380_47 = xor i64 %Hash_cpp_375_44, %Hash_cpp_380_46
  %Hash_cpp_380_48 = mul i64 %Hash_cpp_380_47, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_48, i64 92)
  store int32 %RelationMappedLogic_cpp_308_10, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %RelationMappedLogic_cpp_324_24)
  %MaterializationHelper_cpp_150_49 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_49, %RelationMappedLogic_cpp_324_33)
  %MaterializationHelper_cpp_150_50 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 48
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_50, %RelationMappedLogic_cpp_324_42)
  %MaterializationHelper_cpp_150_51 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 64
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_51, %MaterializationHelper_cpp_230_8)
  %MaterializationHelper_cpp_150_52 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 80
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_150_52
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 19
}

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %18044, data128 %18058)

define int32 @_9_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25920
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 22)
  return 21
}

define int32 @_9_join_join_tablescan_supplier_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25920
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 22
}

define int32 @_9_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 0, global %19207, i64 1, global %19318, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 23, i32 24, i32 25)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 26)
  return 27
}

define int32 @_9_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_tablescan_part(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 112
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4456448
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, 15
  condbr %Integer_cpp_83_ %then %contScan

then:
  %RelationMappedLogic_cpp_303_6 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3407872
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_6, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_7 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_8 = add i64 %RelationMappedLogic_cpp_320_7, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_9 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_8, %RelationMappedLogic_cpp_320_7
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_9
  %Text_cpp_355_ = call bool _ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc (%RelationMappedLogic_cpp_324_, global %21673)
  condbr %Text_cpp_355_ %then10 %contScan

then10:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_11 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_12 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_319_13 = getelementptr data128 %RelationMappedLogic_cpp_303_12, %localTid
  %RelationMappedLogic_cpp_320_14 = load int64 %RelationMappedLogic_cpp_319_13
  %RelationMappedLogic_cpp_320_15 = load int64 %RelationMappedLogic_cpp_319_13, i32 1
  %RelationMappedLogic_cpp_321_16 = trunc i32 %RelationMappedLogic_cpp_320_14
  %RelationMappedLogic_cpp_322_17 = cmpult i32 12, %RelationMappedLogic_cpp_321_16
  %RelationMappedLogic_cpp_322_18 = add i64 %RelationMappedLogic_cpp_320_15, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_19 = select i64 %RelationMappedLogic_cpp_322_17, %RelationMappedLogic_cpp_322_18, %RelationMappedLogic_cpp_320_15
  %RelationMappedLogic_cpp_324_20 = builddata128 d128 %RelationMappedLogic_cpp_320_14 %RelationMappedLogic_cpp_322_19
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_11
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_21 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_22 = mul i64 %Hash_cpp_380_21, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_22, i64 20)
  store int32 %RelationMappedLogic_cpp_308_11, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_20)
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 26
}

declare bool @_ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc(data128 %21716, int8* %21730)

define int32 @_9_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25728
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 29)
  return 28
}

define int32 @_9_join_tablescan_part_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25728
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 29
}

define int32 @_9_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 608
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 7, global %3984, i64 1, global %4094, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 30, i32 31, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 33)
  return 34
}

define int32 @_9_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_tablescan_region23(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 36
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, 5715724631927685126
  condbr %Char_cpp_114_ %then %cont11

then:
  %Char_cpp_115_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_9 = cmpeq i64 %Char_cpp_115_, 17744
  condbr %Char_cpp_115_9 %then10 %else

then10:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {5715724631927685126,17744})
  br %cont

cont:
  %25819 = phi bool [bool true, %then10 %Char_cpp_118_, %else]
  br %cont11

cont11:
  %25855 = phi bool [%25819, %cont bool false, %loopTuples]
  condbr %25855 %then12 %contScan

then12:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 33
}

define int32 @_9_planStep24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 800
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 36)
  return 35
}

define int32 @_9_join_tablescan_region_extra25(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 800
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 36
}

define int32 @_9_planStep26(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 704
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 6, global %8390, i64 0, global %27127, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 37, i32 38, i32 39)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 40)
  return 41
}

define int32 @_9_planStep27(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep28(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep29(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_nation30(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 40
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 800
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_9 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_375_10 = crc32 i64 5961697176435608501, %Hash_cpp_265_9
  %Hash_cpp_376_11 = crc32 i64 2231409791114444147, %Hash_cpp_265_9
  %Hash_cpp_380_12 = rotr i64 %Hash_cpp_376_11, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_10, %Hash_cpp_380_12
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
  store int32 %RelationMappedLogic_cpp_308_8, %ChainingHashTableLogic_cpp_78_
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 40
}

define int32 @_9_planStep31(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 944
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 43)
  return 42
}

define int32 @_9_join_join_tablescan_nation_extra32(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 944
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 43
}

define int32 @_9_planStep33(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 848
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 1, global %8390, i64 0, global %30898, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 44, i32 45, i32 46)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 47)
  return 48
}

define int32 @_9_planStep34(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep35(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep36(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_supplier37(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 80
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 944
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_9 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_375_10 = crc32 i64 5961697176435608501, %Hash_cpp_265_9
  %Hash_cpp_376_11 = crc32 i64 2231409791114444147, %Hash_cpp_265_9
  %Hash_cpp_380_12 = rotr i64 %Hash_cpp_376_11, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_10, %Hash_cpp_380_12
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
  store int32 %RelationMappedLogic_cpp_308_8, %ChainingHashTableLogic_cpp_78_
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 47
}

define int32 @_9_planStep38(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1088
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 50)
  return 49
}

define int32 @_9_join_join_tablescan_supplier_extra39(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1088
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 50
}

define int32 @_9_planStep40(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 992
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 2, global %8390, i64 0, global %34659, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 51, i32 52, i32 53)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 54)
  return 55
}

define int32 @_9_planStep41(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 12)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %34993, int64 %35007)

define int32 @_9_planStep42(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %35163)

define int32 @_9_planStep43(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupby_join_tablescan_partsupp(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 36
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1088
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %RelationMappedLogic_cpp_303_8 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 786432
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_8, %localTid
  %RelationMappedLogic_cpp_308_9 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_10 = zext i64 %RelationMappedLogic_cpp_308_9
  %Hash_cpp_375_11 = crc32 i64 5961697176435608501, %Hash_cpp_265_10
  %Hash_cpp_376_12 = crc32 i64 2231409791114444147, %Hash_cpp_265_10
  %Hash_cpp_380_13 = rotr i64 %Hash_cpp_376_12, 32
  %Hash_cpp_380_14 = xor i64 %Hash_cpp_375_11, %Hash_cpp_380_13
  %Hash_cpp_380_15 = mul i64 %Hash_cpp_380_14, 2685821657736338717
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_380_15, 1023
  %PreaggregationLogic_cpp_20_16 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_16, i32 0, i32 0
  %PreaggregationLogic_cpp_25_17 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_380_15
  condbr %PreaggregationLogic_cpp_25_17 %then %else18

then:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_380_15)
  store int32 %RelationMappedLogic_cpp_308_9, %PreaggregationLogic_cpp_29_
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 4
  store int64 %RelationMappedLogic_cpp_309_, %GroupByTranslator_cpp_207_
  br %cont23

else18:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_16, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_36_
  %Integer_cpp_83_19 = cmpeq i32 %RelationMappedLogic_cpp_308_9, %MaterializationHelper_cpp_876_
  %ConsumerContext_cpp_417_20 = not bool %Integer_cpp_83_19
  condbr %ConsumerContext_cpp_417_20 %then %else21

else21:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 4
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_217_
  %Numeric_cpp_277_ = cmpslt i64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_977_
  condbr %Numeric_cpp_277_ %then22 %cont

then22:
  store int64 %RelationMappedLogic_cpp_309_, %GroupByTranslator_cpp_217_
  br %cont

cont:
  br %cont23

cont23:
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 54
}

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %37821, int64 %37835)

define int32 @_9_planStep44(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1136
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 57)
  return 56
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %38884, int8* %38898, int64 %38912)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %39003, int8* %39017)

define int32 @_9_groupby_join_tablescan_partsupp_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_112_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %GroupByTranslator_cpp_112_
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_2 = load int32 %GroupByTranslator_cpp_113_
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_2
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %noMatch %else

else:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 20
  %GroupByTranslator_cpp_121_3 = getelementptr int8 %chainEntry, i64 20
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_121_3
  %MaterializationHelper_cpp_977_4 = load int64 %GroupByTranslator_cpp_121_
  %Numeric_cpp_277_ = cmpslt i64 %MaterializationHelper_cpp_977_4, %MaterializationHelper_cpp_977_
  condbr %Numeric_cpp_277_ %then5 %cont

then5:
  store int64 %MaterializationHelper_cpp_977_4, %GroupByTranslator_cpp_121_3
  br %cont

cont:
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_6 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_6, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 28
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 57
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %39363)

define int32 @_9_planStep45(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1136
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 58, i32 59, i32 60)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 61)
  return 62
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %41458, int8* %41472)

define int32 @_9_planStep46(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep47(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep48(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopDoneloopHashChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_140_
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 4
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_248_
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25728
  %Hash_cpp_265_ = zext i64 %MaterializationHelper_cpp_876_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_1 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_2 = mul i64 %Hash_cpp_380_1, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_2)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopChain %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_3 = load data128 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %Hash_cpp_265_5 = zext i64 %MaterializationHelper_cpp_230_
  %Hash_cpp_375_6 = crc32 i64 5961697176435608501, %MaterializationHelper_cpp_977_
  %Hash_cpp_376_7 = crc32 i64 2231409791114444147, %MaterializationHelper_cpp_977_
  %Hash_cpp_375_8 = crc32 i64 %Hash_cpp_375_6, %Hash_cpp_265_5
  %Hash_cpp_376_9 = crc32 i64 %Hash_cpp_376_7, %Hash_cpp_265_5
  %Hash_cpp_380_10 = rotr i64 %Hash_cpp_376_9, 32
  %Hash_cpp_380_11 = xor i64 %Hash_cpp_375_8, %Hash_cpp_380_10
  %Hash_cpp_380_12 = mul i64 %Hash_cpp_380_11, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_12, i64 28)
  store int64 %MaterializationHelper_cpp_977_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 8
  store int32 %MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 12
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_3)
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 61
}

define int32 @_9_planStep49(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25872
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 64)
  return 63
}

define int32 @_9_join_join_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25872
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 64
}

define int32 @_9_planStep50(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25776
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 2, global %8390, i64 0, global %34659, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 65, i32 66, i32 67)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 68)
  return 69
}

define int32 @_9_planStep51(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %3627)
  return 0
}

define int32 @_9_planStep52(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %45268)

define int32 @_9_planStep53(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_sort_join_join_tablescan_partsupp(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 36
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 786432
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25872
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %RelationMappedLogic_cpp_309_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %RelationMappedLogic_cpp_309_
  %Hash_cpp_375_6 = crc32 i64 %Hash_cpp_375_, %Hash_cpp_265_
  %Hash_cpp_376_7 = crc32 i64 %Hash_cpp_376_, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_7, 32
  %Hash_cpp_380_8 = xor i64 %Hash_cpp_375_6, %Hash_cpp_380_
  %Hash_cpp_380_9 = mul i64 %Hash_cpp_380_8, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_9)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_52, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int64 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 8
  %MaterializationHelper_cpp_230_10 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 12
  %MaterializationHelper_cpp_230_11 = load data128 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_10
  %Numeric_cpp_276_ = cmpeq i64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_407_ = and bool %Integer_cpp_83_, %Numeric_cpp_276_
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %RelationMappedLogic_cpp_303_13 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_14 = load int32 %RelationMappedLogic_cpp_303_13, %localTid
  %CompilationContext_cpp_214_15 = getelementptr int8 %state, i64 25920
  %Hash_cpp_265_16 = zext i64 %RelationMappedLogic_cpp_308_14
  %Hash_cpp_375_17 = crc32 i64 5961697176435608501, %Hash_cpp_265_16
  %Hash_cpp_376_18 = crc32 i64 2231409791114444147, %Hash_cpp_265_16
  %Hash_cpp_380_19 = rotr i64 %Hash_cpp_376_18, 32
  %Hash_cpp_380_20 = xor i64 %Hash_cpp_375_17, %Hash_cpp_380_19
  %Hash_cpp_380_21 = mul i64 %Hash_cpp_380_20, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_23 = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_15, %Hash_cpp_380_21)
  %ChainingHashTableLogic_cpp_110_24 = isnotnull ptr %ChainingHashTableLogic_cpp_108_23
  condbr %ChainingHashTableLogic_cpp_110_24 %looploopHashChain25 %loopDoneloopHashChain26

looploopHashChain25:
  %hashEntry27 = phi ptr [%ChainingHashTableLogic_cpp_108_23, %else %ChainingHashTableLogic_cpp_136_, %continueProbe22]
  %ChainingHashTableLogic_cpp_115_28 = getelementptr int8 %hashEntry27, i64 16
  %MaterializationHelper_cpp_230_29 = load int32 %ChainingHashTableLogic_cpp_115_28
  %MaterializationHelper_cpp_233_30 = getelementptr int8 %ChainingHashTableLogic_cpp_115_28, i64 4
  %MaterializationHelper_cpp_230_31 = load data128 %MaterializationHelper_cpp_233_30
  %MaterializationHelper_cpp_229_32 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 16
  %MaterializationHelper_cpp_230_33 = load data128 %MaterializationHelper_cpp_229_32
  %MaterializationHelper_cpp_229_34 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 32
  %MaterializationHelper_cpp_230_35 = load data128 %MaterializationHelper_cpp_229_34
  %MaterializationHelper_cpp_229_36 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 48
  %MaterializationHelper_cpp_230_37 = load data128 %MaterializationHelper_cpp_229_36
  %MaterializationHelper_cpp_229_38 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 64
  %MaterializationHelper_cpp_230_39 = load data128 %MaterializationHelper_cpp_229_38
  %MaterializationHelper_cpp_229_40 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 80
  %MaterializationHelper_cpp_230_41 = load int64 %MaterializationHelper_cpp_229_40
  %Integer_cpp_83_43 = cmpeq i32 %RelationMappedLogic_cpp_308_14, %MaterializationHelper_cpp_230_29
  %ConsumerContext_cpp_417_44 = not bool %Integer_cpp_83_43
  condbr %ConsumerContext_cpp_417_44 %continueProbe22 %else45

else45:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_301_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 108)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%SortTranslator_cpp_301_, %MaterializationHelper_cpp_230_39)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %SortTranslator_cpp_301_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %MaterializationHelper_cpp_230_35)
  %MaterializationHelper_cpp_150_46 = getelementptr int8 %SortTranslator_cpp_301_, i64 32
  store int64 %MaterializationHelper_cpp_230_41, %MaterializationHelper_cpp_150_46
  %MaterializationHelper_cpp_150_47 = getelementptr int8 %SortTranslator_cpp_301_, i64 40
  store int32 %MaterializationHelper_cpp_230_10, %MaterializationHelper_cpp_150_47
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_301_, i64 44
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_11)
  %MaterializationHelper_cpp_150_48 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_48, %MaterializationHelper_cpp_230_31)
  %MaterializationHelper_cpp_150_49 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_49, %MaterializationHelper_cpp_230_33)
  %MaterializationHelper_cpp_150_50 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 48
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_50, %MaterializationHelper_cpp_230_37)
  %SortTranslator_cpp_303_ = call bool _ZN5umbra12SortOperator15finishTopKTupleEv (%Pipeline_cpp_276_)
  br %loopDoneloopHashChain26

continueProbe22:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_15, %hashEntry27)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain25 %loopDoneloopHashChain26

loopDoneloopHashChain26:
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_52 = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_53 = isnotnull ptr %ChainingHashTableLogic_cpp_136_52
  condbr %ChainingHashTableLogic_cpp_137_53 %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 68
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %49077, int64 %49091)

declare bool @_ZN5umbra12SortOperator15finishTopKTupleEv(object umbra::SortOperator* %49763)

define int32 @_9_planStep54(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 71)
  return 70
}

define int32 @_9_sort_join_join_tablescan_partsupp_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 71
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %50584)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %50666, object umbra::SortOperator* %50680)

define int32 @_9_planStep55(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %50824)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 25968
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 73)
  return 72
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %50908, int8* %50922, int8* %50936)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %51077, object umbra::SortOperator* %51091)

define int32 @_9_sort_join_join_tablescan_partsupp_extra56(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %50824, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 73
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %51341, int8* %51355, int8* %51369, int32 %51383)

define int32 @_9_planStep57(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 74, i32 75, i32 76)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 77)
  return 78
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %51635, object umbra::SortOperator* %51649, bool %51663)

define int32 @_9_planStep58(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep59(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep60(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_326_ = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %SortTranslator_cpp_326_0 = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_329_ = cmpne ptr %SortTranslator_cpp_326_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_329_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%SortTranslator_cpp_326_, %body %SortTranslator_cpp_341_, %cont]
  %CodeGen_hpp_1103_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load data128 %CodeGen_hpp_1103_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %CodeGen_hpp_1103_, i64 16
  %MaterializationHelper_cpp_230_1 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_2 = getelementptr int8 %CodeGen_hpp_1103_, i64 32
  %MaterializationHelper_cpp_230_3 = load int64 %MaterializationHelper_cpp_229_2
  %MaterializationHelper_cpp_229_4 = getelementptr int8 %CodeGen_hpp_1103_, i64 40
  %MaterializationHelper_cpp_230_5 = load int32 %MaterializationHelper_cpp_229_4
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 44
  %MaterializationHelper_cpp_230_6 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_7 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_229_7
  %MaterializationHelper_cpp_229_9 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_10 = load data128 %MaterializationHelper_cpp_229_9
  %MaterializationHelper_cpp_229_11 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 48
  %MaterializationHelper_cpp_230_12 = load data128 %MaterializationHelper_cpp_229_11
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then %else

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont

else:
  br %cont

cont:
  call void _ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x55e80b5527c0, i64 432345564428894720, %MaterializationHelper_cpp_230_3)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 720575940798709760, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 720575940798709760, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x55e80b5527c0, i64 288230376151711744, %MaterializationHelper_cpp_230_5)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 720575940798709760, %MaterializationHelper_cpp_230_6)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 792633535088295936, %MaterializationHelper_cpp_230_12)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 720575940630937600, %MaterializationHelper_cpp_230_8)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 792633536111706112, %MaterializationHelper_cpp_230_10)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 77
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %53352, int8 %53366)

declare void @_ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %53493, int64 %53507, int64 %53521)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %53583, int32 %53597)

declare void @_ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %53647, int64 %53661, data128 %53675)

declare void @_ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi(object umbra::OutputTarget* %53799, int64 %53813, int32 %53827)

declare void @_ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %53951, int64 %53965, data128 %53979)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %54186)

define int32 @_9_planStep61(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_9_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 608
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 704
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 800
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_7)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 848
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_8)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 944
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_9)
  %CompilationContext_cpp_214_10 = getelementptr int8 %state, i64 992
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_10)
  %CompilationContext_cpp_214_11 = getelementptr int8 %state, i64 1088
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_11)
  %CompilationContext_cpp_214_12 = getelementptr int8 %state, i64 1136
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_12)
  %CompilationContext_cpp_214_13 = getelementptr int8 %state, i64 25728
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_13)
  %CompilationContext_cpp_214_14 = getelementptr int8 %state, i64 25776
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_14)
  %CompilationContext_cpp_214_15 = getelementptr int8 %state, i64 25872
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_15)
  %CompilationContext_cpp_214_16 = getelementptr int8 %state, i64 25920
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_16)
  %CompilationContext_cpp_214_17 = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_17)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %54608)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %54760)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %55536)
`,
    `const %1483[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000"

const %1839[72] ="\\006\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\012\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000WU\\000\\000\\010\\000\\000\\000BUILDING\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1949[8] ="\\000\\000\\000\\000\\006\\000\\000\\000"

const %6269[72] ="\\004\\000\\000\\000\\007\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000WU\\000\\000\\177a%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %6380[16] ="\\000\\000\\000\\000\\001\\000\\000\\000\\004\\000\\000\\000\\007\\000\\000\\000"

const %11196[72] ="\\012\\000\\000\\000\\011\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000WU\\000\\000\\/))a%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %11307[16] ="\\000\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000\\012\\000\\000\\000"

const %19536[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %21808[1] =" "

define int32 @_9_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_1, i32 0)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_3, i32 0)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_4, %state, global %1483)
  return 1
}

define int32 @_9_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_229_ = getelementptr int8 %left, i64 16
  %MaterializationHelper_cpp_230_0 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_230_1 = load data128 %right
  %MaterializationHelper_cpp_229_2 = getelementptr int8 %right, i64 16
  %MaterializationHelper_cpp_230_3 = load int32 %MaterializationHelper_cpp_229_2
  %BigNumeric_cpp_448_ = call i32 _ZN5umbra17BigNumericRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_1, %MaterializationHelper_cpp_230_)
  %Date_cpp_61_ = cmpult i32 %MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_3
  %Date_cpp_61_5 = zext i32 %Date_cpp_61_
  %Date_cpp_61_6 = cmpult i32 %MaterializationHelper_cpp_230_3, %MaterializationHelper_cpp_230_0
  %Date_cpp_61_7 = zext i32 %Date_cpp_61_6
  %Date_cpp_61_8 = sub i32 %Date_cpp_61_7, %Date_cpp_61_5
  %SortTranslator_cpp_103_ = cmpeq i32 %BigNumeric_cpp_448_, 0
  %SortTranslator_cpp_103_9 = SExt i32 %SortTranslator_cpp_103_
  %SortTranslator_cpp_103_10 = and i32 %Date_cpp_61_8, %SortTranslator_cpp_103_9
  %SortTranslator_cpp_103_11 = or i32 %BigNumeric_cpp_448_, %SortTranslator_cpp_103_10
  return %SortTranslator_cpp_103_11
}

declare int32 @_ZN5umbra17BigNumericRuntime7compareENS_9data128_tES1_(data128 %595, data128 %609)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %1043)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %1243, int32 %1257)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %1617, int8* %1631, int8* %1645)

define int32 @_9_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 3, global %1839, i64 1, global %1949, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %2076, int8* %2090, int64 %2104, object umbra::Relation::RestrictionInfo* %2118, int64 %2132, int32* %2146, int32 %2160)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %2246, int32 %2260, int32 %2274, int32 %2288, int32 %2302)

define int32 @_9_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %2484)

define int32 @_9_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %2636)

define int32 @_9_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2768, int32 %2782)

define int32 @_9_join_tablescan_customer(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 96
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4194304
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, 5497018562138603528
  condbr %Char_cpp_114_ %then %cont11

then:
  %Char_cpp_115_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_9 = cmpeq i64 %Char_cpp_115_, 1196312900
  condbr %Char_cpp_115_9 %then10 %else

then10:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {5497018562138603528,1196312900})
  br %cont

cont:
  %4702 = phi bool [bool true, %then10 %Char_cpp_118_, %else]
  br %cont11

cont11:
  %4745 = phi bool [%4702, %cont bool false, %loopTuples]
  condbr %4745 %then12 %contScan

then12:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5
}

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %4628, data128 %4642)

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %5118, int64 %5132, int64 %5146)

define int32 @_9_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %5607)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %5689, int8* %5703, int32 %5717)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %5757, int32 %5771)

define int32 @_9_join_tablescan_customer_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %6015, object umbra::ChainingHashTable::Collector* %6029)

define int32 @_9_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 4, global %6269, i64 1, global %6380, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %6155)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %6187)

define int32 @_9_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupjoin_join_tablescan_orders(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 76
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_310_, 2449791
  condbr %Date_cpp_57_ %then %contScan

then:
  %RelationMappedLogic_cpp_303_6 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_6, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_7 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_8 = mul i64 %Hash_cpp_380_7, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_8)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %then %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_9 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_10 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_308_11 = load int32 %RelationMappedLogic_cpp_303_10, %localTid
  %Hash_cpp_265_12 = zext i64 %RelationMappedLogic_cpp_308_9
  %Hash_cpp_375_13 = crc32 i64 5961697176435608501, %Hash_cpp_265_12
  %Hash_cpp_376_14 = crc32 i64 2231409791114444147, %Hash_cpp_265_12
  %Hash_cpp_380_15 = rotr i64 %Hash_cpp_376_14, 32
  %Hash_cpp_380_16 = xor i64 %Hash_cpp_375_13, %Hash_cpp_380_15
  %Hash_cpp_380_17 = mul i64 %Hash_cpp_380_16, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_17, i64 42)
  store int32 %RelationMappedLogic_cpp_308_9, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  store int32 %RelationMappedLogic_cpp_308_11, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 4
  store int32 %RelationMappedLogic_cpp_308_9, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_150_18 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 8
  store int32 %RelationMappedLogic_cpp_310_, %MaterializationHelper_cpp_150_18
  %MaterializationHelper_cpp_161_19 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 12
  store int8 i8 0, %MaterializationHelper_cpp_161_19
  %GroupJoinTranslator_cpp_204_ = getelementptr int8 %MaterializationHelper_cpp_161_19, i32 1
  store int32 %RelationMappedLogic_cpp_310_, %GroupJoinTranslator_cpp_204_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupJoinTranslator_cpp_204_, i64 4
  store int32 %RelationMappedLogic_cpp_308_11, %MaterializationHelper_cpp_983_
  %GroupJoinTranslator_cpp_208_ = getelementptr int8 %MaterializationHelper_cpp_161_19, i64 9
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupJoinTranslator_cpp_208_, i64 16
  store data128 d128 {0,0}, %GroupJoinTranslator_cpp_208_
  store int8 i8 1, %MaterializationHelper_cpp_726_
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 12
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %8610, int64 %8624)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %10217, int8* %10231)

define int32 @_9_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

define int32 @_9_groupjoin_join_tablescan_orders_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 15
}

define int32 @_9_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %11196, i64 1, global %11307, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

define int32 @_9_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupjoin_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 2449793, %RelationMappedLogic_cpp_310_
  condbr %Date_cpp_57_ %then %contScan

then:
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %then %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_233_12 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 12
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %RelationMappedLogic_cpp_303_13 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_13, %localTid
  %RelationMappedLogic_cpp_303_14 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2097152
  %RelationMappedLogic_cpp_309_15 = load int64 %RelationMappedLogic_cpp_303_14, %localTid
  br %cont

cont:
  %Numeric_cpp_763_ = checkedssub i64 100, %RelationMappedLogic_cpp_309_15 %cont16 %overflow

cont16:
  %BigNumeric_cpp_863_ = ashr i64 %RelationMappedLogic_cpp_309_, 63
  %BigNumeric_cpp_863_17 = builddata128 d128 %RelationMappedLogic_cpp_309_ %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_18 = ashr i64 %Numeric_cpp_763_, 63
  %BigNumeric_cpp_863_19 = builddata128 d128 %Numeric_cpp_763_ %BigNumeric_cpp_863_18
  %Numeric_cpp_698_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_17, %BigNumeric_cpp_863_19)
  %GroupJoinTranslator_cpp_241_ = atomicrmwxchg int8 i8 2, %MaterializationHelper_cpp_233_12
  %CodeGen_cpp_399_ = cmpeq i8 %GroupJoinTranslator_cpp_241_, 2
  condbr %CodeGen_cpp_399_ %then20 %else21

then20:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%MaterializationHelper_cpp_233_12, i8 2)
  br %cont22

else21:
  br %cont22

cont22:
  %GroupJoinTranslator_cpp_245_ = getelementptr int8 %MaterializationHelper_cpp_233_12, i64 9
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupJoinTranslator_cpp_245_, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_23 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_23 %then24 %else25

then24:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  store data128 %Numeric_cpp_698_, %GroupJoinTranslator_cpp_245_
  store int8 %MaterializationHelper_cpp_752_, %MaterializationHelper_cpp_726_
  br %cont26

else25:
  %MaterializationHelper_cpp_977_ = load data128 %GroupJoinTranslator_cpp_245_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_, %Numeric_cpp_698_)
  store data128 %BigNumeric_cpp_688_, %GroupJoinTranslator_cpp_245_
  br %cont26

cont26:
  atomicstore int8 i8 1, %MaterializationHelper_cpp_233_12
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 19

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

declare data128 @_ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_(data128 %14525, data128 %14539)

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %14699, int8 %14713)

declare data128 @_ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_(data128 %15223, data128 %15237)

define int32 @_9_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable7ScanJob4initEPvS2_ (%CompilationContext_cpp_220_0, %CompilationContext_cpp_214_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 21, i32 22, i32 23)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 24)
  return 25
}

declare void @_ZN5umbra17ChainingHashTable7ScanJob4initEPvS2_(int8* %15949, int8* %15963)

define int32 @_9_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %1483)
  return 0
}

define int32 @_9_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %16329)

define int32 @_9_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_sort_groupjoin(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %ChainingHashTableLogic_cpp_160_ = load object umbra::ChainingHashTable::ScanMorsel %localState, i32 0, i32 0
  %ChainingHashTableLogic_cpp_160_0 = load object umbra::ChainingHashTable::ScanMorsel %localState, i32 0, i32 1
  %ChainingHashTableLogic_cpp_161_ = cmpne ptr %ChainingHashTableLogic_cpp_160_, %ChainingHashTableLogic_cpp_160_0
  condbr %ChainingHashTableLogic_cpp_161_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%ChainingHashTableLogic_cpp_160_, %body %ChainingHashTableLogic_cpp_185_, %loopDoneEntries]
  %ChainingHashTableLogic_cpp_164_ = load int64 %slot
  %ChainingHashTableLogic_cpp_166_ = lshr i64 %ChainingHashTableLogic_cpp_164_, 16
  %ChainingHashTableLogic_cpp_167_ = inttoptr ptr %ChainingHashTableLogic_cpp_166_
  %ChainingHashTableLogic_cpp_168_ = isnotnull ptr %ChainingHashTableLogic_cpp_167_
  condbr %ChainingHashTableLogic_cpp_168_ %loopEntries %loopDoneEntries

loopEntries:
  %entry = phi ptr [%ChainingHashTableLogic_cpp_167_, %loopSlots %ChainingHashTableLogic_cpp_181_15, %continue]
  %ChainingHashTableLogic_cpp_174_ = getelementptr int8 %entry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_174_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_174_, i64 4
  %MaterializationHelper_cpp_233_5 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 12
  %GroupJoinTranslator_cpp_280_ = load int8 %MaterializationHelper_cpp_233_5
  %GroupJoinTranslator_cpp_280_6 = cmpeq i8 %GroupJoinTranslator_cpp_280_, 0
  condbr %GroupJoinTranslator_cpp_280_6 %continue %else

else:
  %GroupJoinTranslator_cpp_317_ = getelementptr int8 %MaterializationHelper_cpp_233_5, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %GroupJoinTranslator_cpp_317_
  %MaterializationHelper_cpp_876_7 = getelementptr int8 %GroupJoinTranslator_cpp_317_, i64 4
  %MaterializationHelper_cpp_876_8 = load int32 %MaterializationHelper_cpp_876_7
  %GroupJoinTranslator_cpp_324_ = getelementptr int8 %MaterializationHelper_cpp_233_5, i64 9
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupJoinTranslator_cpp_324_, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_9 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_9 %then %else10

then:
  br %cont

else10:
  %MaterializationHelper_cpp_977_ = load data128 %GroupJoinTranslator_cpp_324_
  br %cont

cont:
  %18126 = phi d128 [d128 {0,0}, %then %MaterializationHelper_cpp_977_, %else10]
  condbr %MaterializationHelper_cpp_780_9 %then11 %cont12

then11:
  call void _ZN5umbra16RuntimeFunctions21throwNotNullViolationEv ()
  br %cont12

cont12:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_301_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 28)
  store data128 %18126, %SortTranslator_cpp_301_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %SortTranslator_cpp_301_, i64 16
  store int32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_301_, i64 20
  store int32 %MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_13 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 4
  store int32 %MaterializationHelper_cpp_876_8, %MaterializationHelper_cpp_150_13
  %SortTranslator_cpp_303_ = call bool _ZN5umbra12SortOperator15finishTopKTupleEv (%Pipeline_cpp_276_)
  br %continue

continue:
  %ChainingHashTableLogic_cpp_181_ = getelementptr int8 %entry, i64 8
  %ChainingHashTableLogic_cpp_181_15 = load int8* %ChainingHashTableLogic_cpp_181_
  %ChainingHashTableLogic_cpp_182_ = isnotnull ptr %ChainingHashTableLogic_cpp_181_15
  condbr %ChainingHashTableLogic_cpp_182_ %loopEntries %loopDoneEntries

loopDoneEntries:
  %ChainingHashTableLogic_cpp_185_ = getelementptr int64 %slot, i32 1
  %ChainingHashTableLogic_cpp_186_ = cmpne ptr %ChainingHashTableLogic_cpp_185_, %ChainingHashTableLogic_cpp_160_0
  condbr %ChainingHashTableLogic_cpp_186_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 24
}

declare void @_ZN5umbra16RuntimeFunctions21throwNotNullViolationEv()

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %18248, int64 %18262)

declare bool @_ZN5umbra12SortOperator15finishTopKTupleEv(object umbra::SortOperator* %18626)

define int32 @_9_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 27)
  return 26
}

define int32 @_9_sort_groupjoin_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 27
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %19296)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %19378, object umbra::SortOperator* %19392)

define int32 @_9_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %19536)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 512
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 29)
  return 28
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %19620, int8* %19634, int8* %19648)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %19789, object umbra::SortOperator* %19803)

define int32 @_9_sort_groupjoin_extra19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %19536, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 29
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %20053, int8* %20067, int8* %20081, int32 %20095)

define int32 @_9_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 30, i32 31, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 33)
  return 34
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %20347, object umbra::SortOperator* %20361, bool %20375)

define int32 @_9_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep23(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_326_ = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %SortTranslator_cpp_326_0 = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_329_ = cmpne ptr %SortTranslator_cpp_326_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_329_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%SortTranslator_cpp_326_, %body %SortTranslator_cpp_341_, %cont]
  %CodeGen_hpp_1103_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load data128 %CodeGen_hpp_1103_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %CodeGen_hpp_1103_, i64 16
  %MaterializationHelper_cpp_230_1 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 20
  %MaterializationHelper_cpp_230_2 = load int32 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_3 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 4
  %MaterializationHelper_cpp_230_4 = load int32 %MaterializationHelper_cpp_229_3
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then %else

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont

else:
  br %cont

cont:
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x555713b497c0, i64 288230376151711744, %MaterializationHelper_cpp_230_2)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %21808, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x555713b497c0, i64 504403158684926976, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %21808, i32 1)
  call void _ZN5umbra11DateRuntime6outputERNS_12OutputTargetENS_4TypeEj (ptr 0x555713b497c0, i64 1008806316530991104, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %21808, i32 1)
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x555713b497c0, i64 288230376151711744, %MaterializationHelper_cpp_230_4)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 33
}

declare void @_ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi(object umbra::OutputTarget* %21740, int64 %21754, int32 %21768)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %21830, int32 %21844)

declare void @_ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %21894, int64 %21908, data128 %21922)

declare void @_ZN5umbra11DateRuntime6outputERNS_12OutputTargetENS_4TypeEj(object umbra::OutputTarget* %21998, int64 %22012, int32 %22026)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %22150)

define int32 @_9_planStep24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_9_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_4)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %22572)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %22724)
`,
    `const %962[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1318[72] ="\\004\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000lU\\000\\000\\022_%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000m_%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1428[12] ="\\000\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000"

const %5783[0] =""

const %5822[12] ="\\000\\000\\000\\000\\013\\000\\000\\000\\014\\000\\000\\000"

const %15825[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %17935[1] =" "

define int32 @_10_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_1, i32 0)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_2, i64 24)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_4, %state, global %962)
  return 1
}

define int32 @_10_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_230_0 = load data128 %right
  %Char_cpp_136_ = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_0)
  return %Char_cpp_136_
}

declare int32 @_ZN5umbra11CharRuntime7compareENS_9data128_tES1_(data128 %364, data128 %378)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %512)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %722, int32 %736)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %861, int64 %875)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %1096, int8* %1110, int8* %1124)

define int32 @_10_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 4, global %1318, i64 1, global %1428, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %1559, int8* %1573, int64 %1587, object umbra::Relation::RestrictionInfo* %1601, int64 %1615, int32* %1629, int32 %1643)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %1729, int32 %1743, int32 %1757, int32 %1771, int32 %1785)

define int32 @_10_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %1967)

define int32 @_10_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %2119)

define int32 @_10_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2251, int32 %2265)

define int32 @_10_join_tablescan_orders(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 76
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_310_, 2449261
  %Date_cpp_57_6 = cmpule i32 2449170, %RelationMappedLogic_cpp_310_
  %TableScanTranslator_cpp_425_ = and bool %Date_cpp_57_6, %Date_cpp_57_
  condbr %TableScanTranslator_cpp_425_ %then %contScan

then:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_7 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_7, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_8 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_9 = add i64 %RelationMappedLogic_cpp_320_8, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_10 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_9, %RelationMappedLogic_cpp_320_8
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_10
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_11 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_12 = mul i64 %Hash_cpp_380_11, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_12, i64 21)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_161_13 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  store int8 i8 0, %MaterializationHelper_cpp_161_13
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5
}

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %4498, int64 %4512, int64 %4526)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %4672, data128 %4686)

define int32 @_10_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %5121)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %5203, int8* %5217, int32 %5231)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %5271, int32 %5285)

define int32 @_10_join_tablescan_orders_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %5529, object umbra::ChainingHashTable::Collector* %5543)

define int32 @_10_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %5783, i64 0, global %5822, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %5669)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %5701)

define int32 @_10_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 24)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %6156, int64 %6170)

define int32 @_10_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %6326)

define int32 @_10_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_groupby_join_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3932160
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_303_6 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4194304
  %RelationMappedLogic_cpp_310_7 = load int32 %RelationMappedLogic_cpp_303_6, %localTid
  %Date_cpp_54_ = cmpult i32 %RelationMappedLogic_cpp_310_, %RelationMappedLogic_cpp_310_7
  condbr %Date_cpp_54_ %then %contScan

then:
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_8 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_9 = mul i64 %Hash_cpp_380_8, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_9)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %then %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_10 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_233_11 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %HashJoinTranslator_cpp_466_ = load int8 %MaterializationHelper_cpp_233_11
  %HashJoinTranslator_cpp_466_12 = cmpeq i8 %HashJoinTranslator_cpp_466_, 0
  condbr %HashJoinTranslator_cpp_466_12 %then13 %cont31

then13:
  %HashJoinTranslator_cpp_468_ = atomicrmwxchg int8 i8 2, %MaterializationHelper_cpp_233_11
  %HashJoinTranslator_cpp_468_14 = cmpeq i8 %HashJoinTranslator_cpp_468_, 0
  condbr %HashJoinTranslator_cpp_468_14 %then15 %cont30

then15:
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_10, i64 3749646514382295044)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_383_, 1023
  %PreaggregationLogic_cpp_20_16 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_16, i32 0, i32 0
  %PreaggregationLogic_cpp_25_17 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_383_
  condbr %PreaggregationLogic_cpp_25_17 %then18 %else19

then18:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_383_)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%PreaggregationLogic_cpp_29_, %MaterializationHelper_cpp_230_10)
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 16
  store int64 i64 1, %GroupByTranslator_cpp_207_
  br %cont29

else19:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_16, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_36_
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_230_10
  %Char_cpp_113_20 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_20
  condbr %Char_cpp_114_ %then21 %cont26

then21:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_22 = extractdata128 i64 %MaterializationHelper_cpp_230_10
  %Char_cpp_115_23 = cmpeq i64 %Char_cpp_115_22, %Char_cpp_115_
  condbr %Char_cpp_115_23 %then24 %else25

then24:
  br %cont

else25:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_10, %MaterializationHelper_cpp_876_)
  br %cont

cont:
  %9935 = phi bool [bool true, %then24 %Char_cpp_118_, %else25]
  br %cont26

cont26:
  %9978 = phi bool [%9935, %cont bool false, %else19]
  %ConsumerContext_cpp_417_27 = not bool %9978
  condbr %ConsumerContext_cpp_417_27 %then18 %else28

else28:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_217_
  %Aggregate_cpp_166_ = add i64 %MaterializationHelper_cpp_977_, 1
  store int64 %Aggregate_cpp_166_, %GroupByTranslator_cpp_217_
  br %cont29

cont29:
  br %cont30

cont30:
  br %cont31

cont31:
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 12
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %8160, int64 %8174)

declare int64 @_ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm(data128 %8952, int64 %8966)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %9338, int64 %9352)

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %9416, data128 %9430)

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %9861, data128 %9875)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %10252, int8* %10266)

define int32 @_10_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %10777, int8* %10791, int64 %10805)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %10896, int8* %10910)

define int32 @_10_groupby_join_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_112_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %GroupByTranslator_cpp_112_
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_2 = load data128 %GroupByTranslator_cpp_113_
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_113_3 = extractdata128 i64 %MaterializationHelper_cpp_876_2
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_3
  condbr %Char_cpp_114_ %then4 %cont8

then4:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_2
  %Char_cpp_115_5 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_6 = cmpeq i64 %Char_cpp_115_5, %Char_cpp_115_
  condbr %Char_cpp_115_6 %then7 %else

then7:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_2)
  br %cont

cont:
  %12441 = phi bool [bool true, %then7 %Char_cpp_118_, %else]
  br %cont8

cont8:
  %12477 = phi bool [%12441, %cont bool false, %then]
  %ConsumerContext_cpp_417_ = not bool %12477
  condbr %ConsumerContext_cpp_417_ %noMatch %else9

else9:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 32
  %GroupByTranslator_cpp_121_10 = getelementptr int8 %chainEntry, i64 32
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_121_10
  %MaterializationHelper_cpp_977_11 = load int64 %GroupByTranslator_cpp_121_
  %Aggregate_cpp_175_ = add i64 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_977_11
  store int64 %Aggregate_cpp_175_, %GroupByTranslator_cpp_121_10
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_12 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_12, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 40
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 15
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %11256)

define int32 @_10_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %13611, int8* %13625)

define int32 @_10_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %962)
  return 0
}

define int32 @_10_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %13981)

define int32 @_10_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_140_
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 16
  %MaterializationHelper_cpp_876_1 = load int64 %GroupByTranslator_cpp_248_
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_310_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 24)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%SortTranslator_cpp_310_, %MaterializationHelper_cpp_876_)
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_310_, i64 16
  store int64 %MaterializationHelper_cpp_876_1, %MaterializationHelper_cpp_161_
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 19
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %14816, int64 %14830)

define int32 @_10_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 22)
  return 21
}

define int32 @_10_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 22
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %15585)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %15667, object umbra::SortOperator* %15681)

define int32 @_10_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %15825)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 24960
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 24)
  return 23
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %15909, int8* %15923, int8* %15937)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %16078, object umbra::SortOperator* %16092)

define int32 @_10_sort_groupby_extra15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %15825, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 24
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %16342, int8* %16356, int8* %16370, int32 %16384)

define int32 @_10_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 25, i32 26, i32 27)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 28)
  return 29
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %16636, object umbra::SortOperator* %16650, bool %16664)

define int32 @_10_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_326_ = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %SortTranslator_cpp_326_0 = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_329_ = cmpne ptr %SortTranslator_cpp_326_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_329_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%SortTranslator_cpp_326_, %body %SortTranslator_cpp_341_, %cont]
  %CodeGen_hpp_1103_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load data128 %CodeGen_hpp_1103_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 16
  %MaterializationHelper_cpp_230_1 = load int64 %MaterializationHelper_cpp_233_
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then %else

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont

else:
  br %cont

cont:
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x556cf39017c0, i64 720575940630937600, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %17935, i32 1)
  call void _ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x556cf39017c0, i64 360287970189639680, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 28
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %17726, int8 %17740)

declare void @_ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %17867, int64 %17881, data128 %17895)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %17957, int32 %17971)

declare void @_ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %18021, int64 %18035, int64 %18049)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %18125)

define int32 @_10_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_10_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_3)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %18547)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %18699)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %18782)
`,
];
